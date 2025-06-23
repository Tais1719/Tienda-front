import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { api } from "../../services/api";
import { useCart } from "../../hooks/CartContext";
import { FormatPrice } from "../../utils/formatPrice";

import { Button } from "../../Button";
import { Container, FormGroup, EnderecoDetalhado, LinhaHorizontal } from "./styles";

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0);
  const [deliveryTax, setDeliveryTax] = useState(0);
  const [cep, setCep] = useState("");
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpfCnpj, setCpfCnpj] = useState("");

  const [enderecoCompleto, setEnderecoCompleto] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");

  const navigate = useNavigate();
  const { cartProducts } = useCart();

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => current.price * current.quantity + acc, 0);
    setFinalPrice(sumAllItems);
  }, [cartProducts]);

  // Buscar endereço automaticamente quando cep mudar e tiver 8 dígitos
  useEffect(() => {
    async function buscarEndereco() {
      if (cep.length !== 8) {
        setEnderecoCompleto("");
        setDeliveryTax(0);
        return;
      }

      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (data.erro) {
          toast.error("CEP não encontrado.");
          setEnderecoCompleto("");
          setDeliveryTax(0);
          return;
        }

        const estado = data.uf;
        const endereco = `${data.logradouro}, ${data.bairro} - ${data.localidade} / ${data.uf}`;
        setEnderecoCompleto(endereco);

        const freteEstados = {
          SP: 1000,
          RJ: 1500,
          MG: 1200,
          BA: 1800,
          PE: 2000,
          CE: 2200,
          RS: 1600,
          DF: 1900,
          default: 2500,
        };

        const frete = freteEstados[estado] || freteEstados.default;
        setDeliveryTax(frete);

        toast.success("Frete e endereço obtidos com sucesso!");
      } catch (err) {
        toast.error("Erro ao buscar o endereço.");
        setEnderecoCompleto("");
        setDeliveryTax(0);
      }
    }

    buscarEndereco();
  }, [cep]);

  const submitOrder = async () => {
    if (!email || !email.includes("@")) {
      toast.error("Digite um e-mail válido.");
      return;
    }
    if (!nome.trim()) {
      toast.error("Digite seu nome completo.");
      return;
    }
    if (!telefone.trim()) {
      toast.error("Digite seu telefone.");
      return;
    }
    if (!cpfCnpj.trim()) {
      toast.error("Digite seu CPF ou CNPJ.");
      return;
    }
    if (cep.length !== 8) {
      toast.error("Digite um CEP válido.");
      return;
    }
    if (!enderecoCompleto) {
      toast.error("Busque o endereço pelo CEP antes de finalizar.");
      return;
    }
    if (deliveryTax === 0) {
      toast.error("Calcule o frete antes de finalizar.");
      return;
    }
    if (cartProducts.length === 0) {
      toast.error("Seu carrinho está vazio.");
      return;
    }

    const products = cartProducts.map(product => ({
      id: product.id,
      quantity: product.quantity,
      price: product.price,
    }));

    try {
      const { data } = await api.post("/create-payment_intent", {
        products,
        email,
        cep,
        nome,
        telefone,
        cpfCnpj,
        endereco: enderecoCompleto,
        numero,
        complemento,
      });

      navigate("/checkout", { state: data });
    } catch (err) {
      if (err.response && err.response.data?.error) {
        if (Array.isArray(err.response.data.error)) {
          toast.error("Erro: " + err.response.data.error.join(", "));
          console.error("Erros do backend:", err.response.data.error);
        } else {
          toast.error("Erro: " + err.response.data.error);
          console.error("Erro do backend:", err.response.data.error);
        }
      } else {
        toast.error("Erro inesperado ao iniciar pagamento.");
        console.error("Erro inesperado:", err);
      }
    }
  };

  // Função para separar os dados do endereço para exibir nos inputs readonly
  function parseEndereco(campo) {
    if (!enderecoCompleto) return "";
    try {
      if (campo === "logradouro") return enderecoCompleto.split(",")[0];
      if (campo === "bairro") return enderecoCompleto.split(",")[1]?.split("-")[0]?.trim() || "";
      if (campo === "cidade") return enderecoCompleto.split("-")[1]?.split("/")[0]?.trim() || "";
      if (campo === "estado") return enderecoCompleto.split("/")[1]?.trim() || "";
    } catch {
      return "";
    }
  }

  return (
    <Container>
      <h2 className="title">Datos de contacto</h2>

      <FormGroup>
        <input
          type="text"
          placeholder="Nome completo *"
          value={nome}
          onChange={e => setNome(e.target.value)} 
        />
        <input
          type="email"
          placeholder="E-mail *"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <div className="linha-flex">
          <input
            type="text"
            placeholder="Celular *"
            value={telefone}
            onChange={e => setTelefone(e.target.value)}
          />
          <input
            type="text"
            placeholder="CPF ou CNPJ *"
            value={cpfCnpj}
            onChange={e => setCpfCnpj(e.target.value)}
          />
        </div>
        <input
          type="text"
          placeholder="CEP *"
          value={cep}
          onChange={e => setCep(e.target.value.replace(/\D/g, "").slice(0, 8))}
        />
      </FormGroup>

      {enderecoCompleto && (
        <EnderecoDetalhado>
          <label>* Endereço (logradouro):</label>
          <div className="linha-flex">
            <input type="text" value={parseEndereco("logradouro")} readOnly />
            <input
              type="text"
              placeholder="Número *"
              value={numero}
              onChange={e => setNumero(e.target.value)}
            />
          </div>

          <label>Complemento:</label>
          <input
            type="text"
            placeholder="Complemento"
            value={complemento}
            onChange={e => setComplemento(e.target.value)}
          />

          <div className="linha-flex">
            <div className="input-pequeno">
              <label>* Bairro:</label>
              <input type="text" value={parseEndereco("bairro")} readOnly />
            </div>
            <div className="input-pequeno">
              <label>* Cidade:</label>
              <input type="text" value={parseEndereco("cidade")} readOnly />
            </div>
            <div className="input-pequeno">
              <label>* Estado:</label>
              <input type="text" value={parseEndereco("estado")} readOnly />
            </div>
          </div>
        </EnderecoDetalhado>
      )}

      <LinhaHorizontal />

      <div className="container-bottom">
        <div className="linha-valor">
          <p>Total de itens</p>
          <p>{cartProducts.length}</p>
        </div>
        <div className="linha-valor">
          <p>Valor</p>
          <p>{FormatPrice(finalPrice)}</p>
        </div>
        <div className="linha-valor">
          <p>Frete</p>
          <p>{FormatPrice(deliveryTax)}</p>
        </div>
        <div className="linha-valor total">
          <p>Total</p>
          <p>{FormatPrice(finalPrice + deliveryTax)}</p>
        </div>
      </div>

      <Button onClick={submitOrder}>Finalizar pedido</Button>
    </Container>
  );
}

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { api } from "../../services/api";
import { useCart } from "../../hooks/CartContext";
import { FormatPrice } from "../../utils/formatPrice";

import { Button } from "../../Button";
import {
  Container,
  FormGroup,
  EnderecoDetalhado,
  LinhaHorizontal,
  EmptyCartContainer,
  EmptyCartButton,
} from "./styles";

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0);
  const [deliveryTax, setDeliveryTax] = useState(0);

  const [cep, setCep] = useState("");
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");

  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");

  const [enderecoCarregado, setEnderecoCarregado] = useState(false);

  const navigate = useNavigate();
  const { cartProducts } = useCart();

  useEffect(() => {
    const subtotal = cartProducts.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    setFinalPrice(subtotal);
  }, [cartProducts]);

  useEffect(() => {
    const cepLimpo = cep.replace(/\D/g, "");
    if (cepLimpo.length === 8) {
      fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
        .then((res) => res.json())
        .then((data) => {
          if (data.erro) throw new Error("CEP não encontrado");

          setCidade(data.localidade);
          setEstado(data.uf);
          setLogradouro(data.logradouro);
          setBairro(data.bairro);
          setDeliveryTax(20); // valor de frete fixo
          setEnderecoCarregado(true);
        })
        .catch(() => {
          toast.error("CEP inválido.");
          limparEndereco();
          setEnderecoCarregado(false);
        });
    } else {
      limparEndereco();
      setEnderecoCarregado(false);
    }
  }, [cep]);

  function limparEndereco() {
    setDeliveryTax(0);
    setLogradouro("");
    setBairro("");
    setCidade("");
    setEstado("");
    setNumero("");
    setComplemento("");
  }

  function aplicarMascaraCelular(valor) {
    return valor
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3")
      .slice(0, 15);
  }

  const enderecoCompletoPreenchido =
    logradouro && bairro && cidade && estado;
const submitOrder = async () => {
  // Limpa o CEP para garantir só números
  const cepLimpo = cep.replace(/\D/g, "");

  if (!email || !email.includes("@"))
    return toast.error("Digite um e-mail válido.");
  if (!nome.trim()) return toast.error("Digite seu nome completo.");
  if (!telefone.trim()) return toast.error("Digite seu número de celular.");
  if (cepLimpo.length !== 8) return toast.error("CEP inválido.");
  if (!logradouro || !bairro || !cidade || !estado)
    return toast.error("Endereço incompleto.");
  if (!numero.trim()) return toast.error("Digite o número da residência.");
  if (deliveryTax === 0) return toast.error("Calcule o frete antes de finalizar.");
  if (cartProducts.length === 0) return toast.error("Seu carrinho está vazio.");

  const enderecoCompleto = `${logradouro}, ${numero} - ${bairro}, ${cidade} - ${estado}`;

  const products = cartProducts.map((product) => ({
    id: product.id,
    quantity: product.quantity,
    price: product.price,
  }));

  const payload = {
    products,
    email,
    cep: cepLimpo, // envia apenas números
    nome,
    telefone,
    endereco: enderecoCompleto,
    complemento,
  };

  try {
    const { data } = await api.post("/create-payment_intent", payload);
    navigate("/checkout", { state: data });
  } catch (err) {
    const error = err.response?.data?.error;
    toast.error(
      "Erro: " +
        (Array.isArray(error) ? error.join(", ") : error || "Erro inesperado")
    );
  }
};

  if (cartProducts.length === 0) {
    return (
      <EmptyCartContainer>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="black"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 5m12-5l2 5M9 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
          />
        </svg>

        <h2>Seu carrinho está vazio.</h2>
        <p>
          Antes de continuar com o pagamento, adicione alguns produtos ao seu
          carrinho. Você encontrará muitos produtos interessantes na nossa página
          <strong> "Loja"</strong>.
        </p>

        <EmptyCartButton onClick={() => navigate("/")}>
          VOLTAR PARA A LOJA
        </EmptyCartButton>
      </EmptyCartContainer>
    );
  }

  return (
    <Container>
      <h2 className="title">Dados de contato e entrega</h2>

      <FormGroup>
        <div className="linha-flex">
          <label className="label-blue">Nome completo:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="linha-flex">
          <label className="label-blue">E-mail:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="linha-flex">
          <label className="label-blue">Celular:</label>
          <input
            type="text"
            value={telefone}
            onChange={(e) =>
              setTelefone(aplicarMascaraCelular(e.target.value))
            }
          />
        </div>

        <div className="linha-flex">
          <label className="label-blue">CEP:</label>
          <input
            type="text"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />
        </div>
      </FormGroup>

      {enderecoCarregado && (
        <EnderecoDetalhado>
          <div className="linha-flex">
            <label>* Rua:</label>
            <input
              type="text"
              placeholder="Rua *"
              value={logradouro}
              onChange={(e) => setLogradouro(e.target.value)}
            />
          </div>

          <div className="linha-flex">
            <label>* Complemento:</label>
            <input
              type="text"
              placeholder="Apartamento, bloco, etc."
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
            />
          </div>

          <div className="linha-flex">
            <label>* Bairro:</label>
            <input
              type="text"
              placeholder="Bairro *"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
            />
            <input
              type="text"
              placeholder="Número *"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
            />
          </div>

          <div className="linha-flex">
            <label>* Cidade:</label>
            <input
              type="text"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              readOnly={!!cidade}
            />

            <label>* Estado:</label>
            <input
              type="text"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              readOnly={!!estado}
            />
          </div>
        </EnderecoDetalhado>
      )}

      <LinhaHorizontal className={enderecoCarregado ? "ativo" : ""} />

      <div className="container-bottom">
        <div className="linha-valor">
          <p>Produtos</p>
          <p>{cartProducts.length}</p>
        </div>
        <div className="linha-valor">
          <p>Subtotal</p>
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

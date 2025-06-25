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

  const [codigoPostal, setCodigoPostal] = useState("");
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dni, setDni] = useState("");

  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [provincia, setProvincia] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");

  const navigate = useNavigate();
  const { cartProducts } = useCart();

  useEffect(() => {
    const sumAllItems = cartProducts.reduce(
      (acc, current) => current.price * current.quantity + acc,
      0
    );
    setFinalPrice(sumAllItems);
  }, [cartProducts]);

  useEffect(() => {
    const argCepRegex = /^\d{4}$/;
    if (argCepRegex.test(codigoPostal)) {
      fetch(
        `https://nominatim.openstreetmap.org/search?q=${codigoPostal},Argentina&format=json&addressdetails=1`
      )
        .then((res) => res.json())
        .then((data) => {
          if (!data.length) throw new Error("CEP não encontrado");

          const addr = data[0].address;
          setCidade(addr.city || addr.town || addr.village || "");
          setProvincia(addr.state || "");
          setLogradouro(addr.road || addr.pedestrian || "");
          setBairro(addr.suburb || addr.neighbourhood || addr.hamlet || "");
          setDeliveryTax(1500);
        })
        .catch(() => {
          toast.error("Código postal inválido para Argentina.");
          limparEndereco();
        });
    } else {
      limparEndereco();
    }
  }, [codigoPostal]);

  function limparEndereco() {
    setDeliveryTax(0);
    setLogradouro("");
    setBairro("");
    setCidade("");
    setProvincia("");
    setNumero("");
    setComplemento("");
  }

  function aplicarMascaraCelular(valor) {
    return valor
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d{4,5})(\d{4})$/, "($1) $2-$3");
  }

  function aplicarMascaraDNI(valor) {
    return valor
      .replace(/\D/g, "")
      .replace(/^(\d{1,2})(\d{3})(\d{3})$/, "$1.$2.$3");
  }

  const enderecoCompletoPreenchido =
    logradouro && bairro && cidade && provincia;

  const submitOrder = async () => {
    if (!email || !email.includes("@"))
      return toast.error("Ingresa un e-mail válido.");
    if (!nome.trim())
      return toast.error("Ingresa tu nombre completo.");
    if (!telefone.trim())
      return toast.error("Ingresa tu número de celular.");
    if (!dni.trim()) return toast.error("Ingresa tu DNI.");
    if (!codigoPostal.match(/^\d{4}$/))
      return toast.error("Código postal inválido.");
    if (!enderecoCompletoPreenchido)
      return toast.error("Dirección incompleta.");
    if (!numero.trim())
      return toast.error("Ingresa el número de tu domicilio.");
    if (deliveryTax === 0)
      return toast.error("Calcula el envío antes de finalizar.");
    if (cartProducts.length === 0)
      return toast.error("Tu carrito está vacío.");

    const enderecoCompleto = `${logradouro}, ${numero} - ${bairro}, ${cidade} / ${provincia}`;

    const products = cartProducts.map((product) => ({
      id: product.id,
      quantity: product.quantity,
      price: product.price,
    }));

    try {
      const { data } = await api.post("/create-payment_intent", {
        products,
        email,
        codigoPostal,
        nome,
        telefone,
        dni,
        endereco: enderecoCompleto,
        complemento,
      });

      navigate("/checkout", { state: data });
    } catch (err) {
      const error = err.response?.data?.error;
      toast.error(
        "Error: " +
          (Array.isArray(error)
            ? error.join(", ")
            : error || "Error inesperado")
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

        <h2>Tu carrito está vacío.</h2>
        
        <p>
          Antes de continuar con el pago, debes agregar algunos productos a tu carrito de compras.
          Encontrarás muchos productos interesantes en nuestra página{" "}
          <strong>"Tienda"</strong>.
        </p>

        <EmptyCartButton onClick={() => navigate("/")}>
          VOLVER A LA TIENDA
        </EmptyCartButton>
      </EmptyCartContainer>
    );
  }

  return (
    <Container>
      <h2 className="title">Datos de contacto y envío</h2>

      <FormGroup>
        <input
          type="text"
          placeholder="Nombre completo *"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="email"
          placeholder="Correo electrónico *"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="linha-flex">
          <input
            type="text"
            placeholder="Celular *"
            value={telefone}
            onChange={(e) => setTelefone(aplicarMascaraCelular(e.target.value))}
          />
          <input
            type="text"
            placeholder="DNI *"
            value={dni}
            onChange={(e) => setDni(aplicarMascaraDNI(e.target.value))}
          />
        </div>
        <input
          type="text"
          placeholder="Código Postal *"
          value={codigoPostal}
          onChange={(e) => setCodigoPostal(e.target.value)}
        />
      </FormGroup>

      {codigoPostal.length === 4 && (
        <EnderecoDetalhado>
          <label>* Dirección automática:</label>
          <div className="linha-flex">
            <input
              type="text"
              placeholder="Calle *"
              value={logradouro}
              onChange={(e) => setLogradouro(e.target.value)}
              readOnly={!!logradouro}
            />
            <input
              type="text"
              placeholder="Número *"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
            />
          </div>

          <label>* Barrio:</label>
          <input
            type="text"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
            readOnly={!!bairro}
          />

          <div className="linha-flex">
            <div className="input-pequeno">
              <label>* Ciudad:</label>
              <input
                type="text"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                readOnly={!!cidade}
              />
            </div>
            <div className="input-pequeno">
              <label>* Provincia:</label>
              <input
                type="text"
                value={provincia}
                onChange={(e) => setProvincia(e.target.value)}
                readOnly={!!provincia}
              />
            </div>
          </div>

          <label>Complemento:</label>
          <input
            type="text"
            placeholder="Departamento, piso..."
            value={complemento}
            onChange={(e) => setComplemento(e.target.value)}
          />
        </EnderecoDetalhado>
      )}

      <LinhaHorizontal />

      <div className="container-bottom">
        <div className="linha-valor">
          <p>Productos</p>
          <p>{cartProducts.length}</p>
        </div>
        <div className="linha-valor">
          <p>Subtotal</p>
          <p>{FormatPrice(finalPrice)}</p>
        </div>
        <div className="linha-valor">
          <p>Envío</p>
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

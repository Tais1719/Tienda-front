import { useEffect, useState } from "react"; 
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { api } from "../../services/api";
import { useCart } from "../../hooks/CartContext";
import { FormatPrice } from "../../utils/formatPrice";

import { Button } from "../../Button";
import { Container, FormGroup } from "./styles";

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0);
  const [deliveryTax, setDeliveryTax] = useState(0);
  const [email, setEmail] = useState("");
  const [cep, setCep] = useState("");

  const navigate = useNavigate();
  const { cartProducts, clearCart } = useCart();

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc;
    }, 0);
    setFinalPrice(sumAllItems);
  }, [cartProducts]);

  const handleFreteCalculo = async () => {
    if (cep.length !== 8) {
      toast.error("CEP inválido. Deve conter 8 dígitos.");
      return;
    }

    try {
      // Simulação do cálculo de frete (pode integrar com API real depois)
      const frete = 1000; // Exemplo: R$10
      setDeliveryTax(frete);
      toast.success("Frete calculado com sucesso!");
    } catch (err) {
      toast.error("Erro ao calcular o frete.");
    }
  };

  const submitOrder = async () => {
    if (!email || !email.includes("@")) {
      toast.error("Digite um e-mail válido.");
      return;
    }

    if (cep.length !== 8 || deliveryTax === 0) {
      toast.error("Calcule o frete corretamente antes de continuar.");
      return;
    }

    const products = cartProducts.map((product) => ({
      id: product.id,
      quantity: product.quantity,
      price: product.price,
    }));

    try {
      const { data } = await api.post("/create-payment_intent", {
        products,
        email,
        cep,
      });

      navigate("/checkout", {
        state: data,
      });
    } catch (err) {
      toast.error("Erro ao iniciar pagamento. Tente novamente!");
    }
  };

  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo del pedido</h2>
          <p className="items">Itens</p>
          <p className="items-price">{FormatPrice(finalPrice)}</p>
          <p className="delivery-tax">Taxa de entrega</p>
          <p className="delivery-tax-price">{FormatPrice(deliveryTax)}</p>
        </div>

        <div style={{ padding: "0 20px" }}>
          <FormGroup>
            <label htmlFor="cep">CEP:</label>
            <input
              id="cep"
              type="text"
              value={cep}
              onChange={(e) => setCep(e.target.value.replace(/\D/g, "").slice(0, 8))}
              placeholder="Digite seu CEP"
            />
            <button type="button" onClick={handleFreteCalculo}>
              Calcular frete
            </button>
          </FormGroup>

          <FormGroup>
            <label htmlFor="email">E-mail:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu e-mail"
              required
            />
          </FormGroup>
        </div>

        <div className="container-bottom">
          <p>Total</p>
          <p>{FormatPrice(finalPrice + deliveryTax)} </p>
        </div>
      </Container>

      <Button onClick={submitOrder}>Finalizar el pedido </Button>
    </div>
  );
}

import PropTypes from "prop-types";
import { CardImage, Container } from "./styles";
import { useCart } from '../../hooks/CartContext';
import { CardButton } from "../CardButton";
import { useNavigate } from 'react-router-dom'; // Importando o useNavigate

export function CardProduct ({product }) {
  const { putProductInCart } = useCart();
  const navigate = useNavigate(); // Hook de navegação

  const handleImageClick = () => {
    navigate(`/produto/${product.id}`); // Redireciona para a página de detalhes do produto
  };

  return (
    <Container>
      <CardImage 
        src={product.url} 
        alt={product.name} 
        onClick={handleImageClick} // Quando a imagem for clicada, chama handleImageClick
      />
      <div style={{ display:'flex', alignContent:'center', flexDirection: 'column'}}>
        <div style={{height:70, alignContent:'center'}}>
        <p style={{textAlign:'center'}}>{product.name}</p>
        </div>
        <strong style={{textAlign:'center'}}>{product.CurrencyValue}</strong>
      </div>
      <CardButton onClick={() => putProductInCart(product)} />
    </Container>
  );
}

CardProduct.propTypes = {
  product: PropTypes.object
};

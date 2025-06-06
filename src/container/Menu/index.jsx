import { useEffect, useState } from "react";
import { Banner, Container, ProductsContainer } from "./styles";
import { api } from "../../services/api";
import { FormatPrice } from "../../utils/formatPrice";
import { CardProduct } from "../../components/CardProduct";
import { useLocation } from "react-router-dom";

export function Menu() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  const [activeCategory, setActiveCategory] = useState(() => {
    const categoryId = +queryParams.get("categorias"); // <-- deve ter "s"
    return isNaN(categoryId) ? 0 : categoryId;
  });

  // Carregar produtos
  useEffect(() => {
    async function loadProducts() {
      try {
        const { data } = await api.get("/products");
        const formatted = data.map((product) => ({
          ...product,
          CurrencyValue: FormatPrice(product.price),
        }));
        setProducts(formatted);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      }
    }

    loadProducts();
  }, []);

  // Filtrar produtos ao mudar categoria
  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category_id === activeCategory
      );
      setFilteredProducts(filtered);
    }
  }, [products, activeCategory]);

  // Reagir à mudança na URL (ex: clique no link do Header)
  useEffect(() => {
    const categoryId = +queryParams.get("categorias");
    setActiveCategory(isNaN(categoryId) ? 0 : categoryId);
  }, [search]);

  return (
    <main>
      <Container>
        <Banner>
          <h1>
            <br />
            Moda que te define
            <br />
            calidad que, que te <span>Acompaña!</span>
          </h1>
        </Banner>

        <ProductsContainer>
          {filteredProducts.map((product) => (
            <CardProduct product={product} key={product.id} />
          ))}
        </ProductsContainer>
      </Container>
    </main>
  );
}

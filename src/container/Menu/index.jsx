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
    const categoryId = +queryParams.get("categorias");
    return isNaN(categoryId) ? 0 : categoryId;
  });

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
        console.error("Error al cargar los productos:", error);
      }
    }

    loadProducts();
  }, []);

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

  useEffect(() => {
    const categoryId = +queryParams.get("categorias");
    setActiveCategory(isNaN(categoryId) ? 0 : categoryId);
  }, [search]);

  return (
    <main>
      <Banner>
       
      </Banner>

      <Container>
        <ProductsContainer>
          {filteredProducts.map((product) => (
            <CardProduct product={product} key={product.id} />
          ))}
        </ProductsContainer>
      </Container>
    </main>
  );
}

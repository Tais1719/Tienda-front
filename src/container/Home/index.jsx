import { OffersCarousel, CategoriesCarousel } from "../../components";
import { Banner, Container, Text } from "./styles";

export function Home() {
  return (
    <main>
      <Banner>
      

       

        {/* Frase convite */}
        <Text>
           Descubrí nuestras categorías y encontrá tu estilo ideal. ¡Calidad, confort y actitud!
        </Text>

       
      </Banner>

      <Container> 
        <div>
          <CategoriesCarousel />
          <OffersCarousel />
        </div>
      </Container>
    </main>
  );
}

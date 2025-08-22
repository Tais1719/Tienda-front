import { OffersCarousel, CategoriesCarousel } from "../../components";
import { Banner, BannerImage, BannerContent, GlobalStyle } from "./styles";
import { FaTshirt, FaShoePrints, FaUserTie } from "react-icons/fa";
import BannerHome from '../../assets/foto.png';

export function Home() {
  return (
    <>
      <GlobalStyle />
      <main >
        <Banner>
          <BannerImage src={BannerHome} alt="Banner" />
          <BannerContent>
            <h1>Viva uma vida com estilo!</h1>
            <p>
              Descubra nossas categorias e encontre seu estilo ideal. 
              Qualidade premium, conforto incomparável e atitude que te define! 
              Explore nossa coleção exclusiva e sinta a diferença em cada detalhe.
            </p>

            <div className="icons">
              <FaTshirt title="Moda Casual" />
              <FaShoePrints title="Estilo Urbano" />
              <FaUserTie title="Elegância Masculina" />
            </div>
            
          </BannerContent>
        </Banner>
   
        <div>
          <CategoriesCarousel />
          <OffersCarousel />
        </div>
      </main>
    </>
  );
}

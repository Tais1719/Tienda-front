import { Container, HeaderText, Title, Subtitle, BannerImage } from './styles';
import bannerPrincipal from '../../assets/banner.png';

export function CategoriesCarousel() {
  return (
    <Container>
      <HeaderText>
        <Title>Preço de perder o fôlego</Title>
        <Subtitle>Ofertas incríveis só por tempo limitado</Subtitle>
      </HeaderText>
      <BannerImage src={bannerPrincipal} alt="Banner promocional" />
    </Container>
  );
}

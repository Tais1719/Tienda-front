import { useState, useEffect } from 'react';
import { Container, HeaderText, Title, Subtitle, BannerImage } from './styles';
import banner1 from '../../assets/banner1.png';
import banner2 from '../../assets/banner2.png';
import banner3 from '../../assets/banner3.png';
import banner4 from '../../assets/banner4.png';


export function CategoriesCarousel() {
  const images = [banner1, banner2,banner3,banner4 ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Container>
      <HeaderText>
        <Title>Preço de perder o fôlego</Title>
        <Subtitle>Ofertas incríveis só por tempo limitado</Subtitle>
      </HeaderText>
      <BannerImage
        src={images[currentIndex]}
        alt="Banner promocional"
      />
    </Container>
  );
}

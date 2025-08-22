import { Container, BannerImage, BannerTextOverlay, DiscountTitle, DiscountSubtitle } from './styles'
import ofer1 from '../../assets/oferta6.png'

export function CategoriesCarousel() {
  return (
    <Container>
      <div style={{ position: 'relative' }}>
        <BannerImage src={ofer1} alt="Banner de oferta" />
        <BannerTextOverlay>
          <DiscountTitle>40% OFF – Aproveite!</DiscountTitle>
          <DiscountSubtitle>Somente por tempo limitado</DiscountSubtitle>
        </BannerTextOverlay>
      </div>
    </Container>
  )
}

import { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { api } from '../../services/api'

import { Container, Title } from './styles';
import { CardProduct } from '../CardProduct';
import { FormatPrice } from '../../utils/formatPrice';

export function OffersCarousel() { 
  const [offers, setOffers] = useState([])

  useEffect(() => {
    async function loadProducts() { 
      const { data } = await api.get('/products')

      const onlyOffers = data
        .filter(product => product.offer)
        .map(product => ({
          CurrencyValue: FormatPrice(product.price),
          ...product,
        }))

      setOffers(onlyOffers)
    }

    loadProducts()
  }, [])

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,          // 5 cards visíveis
      slidesToSlide: 5   // desliza 5 por vez
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,          // 3 cards visíveis
      slidesToSlide: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,          // 1 card visível
      slidesToSlide: 1
    } 
  };

  return (
    <Container>
      <Title>Ofertas Exclusivas!</Title> 
      
      <Carousel
        responsive={responsive}
        infinite={true}
        partialVisible={false}
        itemClass="carousel-item"
        containerClass="carousel-container"
        arrows={true}
      >
        {offers.map(product => (
          <CardProduct key={product.id} product={product}/>
        ))}
      </Carousel>
    </Container>
  )
}

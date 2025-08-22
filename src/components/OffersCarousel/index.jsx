import { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { api }  from '../../services/api'


import { Container, Title, } from './styles';
import { CardProduct } from '../CardProduct';
import { FormatPrice } from '../../utils/formatPrice';


export function OffersCarousel() { 
    const [offers, setOffers] = useState([])

    useEffect(()=>{
        async function loadProducts() { 
            const {data }  = await api.get('/products')

           const onlyOffers = data.filter(product => product.offer)
           .map((product)=>({ CurrencyValue: FormatPrice(product.price),
            ...product,
           }))
        

           setOffers(onlyOffers)
       
 

         }
        loadProducts()
     }, [])

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 
  } 
};


    return(
        <Container>
           <Title>Ofertas Exclusivas!</Title> 
         
          <Carousel
    responsive={responsive}
    infinite={true}
    partialVisible={false}
    itemClass="carousel-item"
  >
    {offers.map((product) => (
      <CardProduct key={product.id} product= {product}/>
   
    ))}
 
 
      </Carousel>
        </Container>
    )
 }
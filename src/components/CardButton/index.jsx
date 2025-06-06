import Cart from '../../assets/cart.svg'
import { ContainerButton } from './styles'
export function CardButton ({...props}){

    return(
    
         <ContainerButton {...props}>
          
          Agregar al carrito
         </ContainerButton>
     
    )

}

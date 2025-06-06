// src/pages/Cart.jsx
import { CartItems, CartResume } from '../../components'
import {  Container, Title, Content } from './styles'

export function Cart() {
  return (
    <Container>
     
      <Title>Checkout do-  seu - Pedido</Title>
      <Content>
        <CartItems />
        <CartResume />
      </Content>
    </Container>
  )
}

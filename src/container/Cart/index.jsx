// src/pages/Cart.jsx
import { CartItems, CartResume } from '../../components'
import {  Container, Title, Content } from './styles'

export function Cart() {
  return (
    <Container>
     
      <Title>Resumen de su pedido</Title>
      <Content>
        <CartItems />
        <CartResume />
      </Content>
    </Container>
  )
}

import { Table } from '../index'
import { useCart } from '../../hooks/CartContext'
import TrashIcon from '../../assets/trash.svg'
import { FormatPrice } from '../../utils/formatPrice'
import {
  ButtonGroup,
  EmptyCart,
  ProductImage,
  ProductTotalPrice,
  TrashImage,
} from './styles'
import useAppStore from '../../store/useAppStore'

export function CartItems() {
  const { cartProducts, decreaseProduct, increaseProduct, deleteProduct } = useCart()
  const increment = useAppStore((state) => state.increment)
  const decrement = useAppStore((state) => state.decrement)
  const resetCount = useAppStore((state) => state.resetCount)

if (!cartProducts.length) {
  return null;
}




  return (
    <Table.Root>
      <Table.Header>
        <Table.Tr>
          <Table.Th></Table.Th>
          <Table.Th>Itens</Table.Th>
          <Table.Th>Preço</Table.Th>
          <Table.Th>Quantidade</Table.Th>
          <Table.Th>Total</Table.Th>
          <Table.Th></Table.Th>
        </Table.Tr>
      </Table.Header>

      <Table.Body>
        {cartProducts.map((product) => (
          <Table.Tr key={product.id}>
            <Table.Td>
              <ProductImage src={product.url} alt={product.name} />
            </Table.Td>
            <Table.Td>{product.name}</Table.Td>
            <Table.Td>{product.CurrencyValue}</Table.Td>
            <Table.Td>
              <ButtonGroup>
                <button
                  onClick={() => {
                    decreaseProduct(product.id)
                    decrement()
                  }}
                >
                  –
                </button>
                <span>{product.quantity}</span>
                <button
                  onClick={() => {
                    increaseProduct(product.id)
                    increment()
                  }}
                >
                  +
                </button>
              </ButtonGroup>
            </Table.Td>
            <Table.Td>
              <ProductTotalPrice>
                {FormatPrice(product.quantity * product.price)}
              </ProductTotalPrice>
            </Table.Td>
            <Table.Td>
              <TrashImage
                src={TrashIcon}
                alt="Remover item"
                onClick={() => {
                  deleteProduct(product.id)
                  resetCount()
                }}
              />
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Body>
    </Table.Root>
  )
}

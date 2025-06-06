import { Table } from '../index'
import { useCart } from '../../hooks/CartContext';
import TrashIcon from '../../assets/trash.svg'
import { FormatPrice } from '../../utils/formatPrice';
import { ButtonGroup, EmtyCart, ProductImage, ProductTotalPrice, TrashImage, } from './styles';
import useAppStore from '../../store/useAppStore';


export function CartItems() {
    const { cartProducts, decreaseProduct, increaseProduct, deleteProduct } = useCart()
    console.log(cartProducts)
    const increment = useAppStore((state) => state.increment)
    const decrement = useAppStore((state) => state.decrement)
    const resetCount = useAppStore((state) => state.resetCount)
    return (
        <Table.Root>
            <Table.Header>
            <Table.Tr>
    <Table.Th></Table.Th>
    <Table.Th>Itens</Table.Th>
    <Table.Th>Precio</Table.Th>
    <Table.Th>Cantidad</Table.Th>
    <Table.Th>Total</Table.Th>
    <Table.Th></Table.Th>
</Table.Tr>

            </Table.Header>
            <Table.Body>
                {cartProducts?.length ? (
                    cartProducts.map((product) => (
                        <Table.Tr key={product.id}>
                            <Table.Td>
                                <ProductImage img src={product.url} />
                            </Table.Td>
                            <Table.Td>{product.name}</Table.Td>
                            <Table.Td>{product.CurrencyValue}</Table.Td>
                            <Table.Td>
                                <ButtonGroup>
                                    <button onClick={() => {
                                        decreaseProduct(product.id)
                                        decrement()
                                    }}>-</button>

                                    {product.quantity}
                                    <button onClick={() => {
                                        increaseProduct(product.id)
                                        increment()
                                    }
                                    }>+</button>
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
                                    alt="lixeira"
                                    onClick={() => {
                                        deleteProduct(product.id)
                                        resetCount()
                                    }} />
                            </Table.Td>
                        </Table.Tr>
                    ))
                ) : <EmtyCart>Carrito vacío</EmtyCart>}
            </Table.Body>

        </Table.Root>
    )

}  

import { useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { UserCircle, ShoppingCart, MagnifyingGlass } from '@phosphor-icons/react'
import { useUser } from '../../hooks/UserContent'
import {
  Container, HeaderLink, SearchForm, Options, Profile,
  LinkContainer, LogoutButton, Navigation, Content, StoreTitleContainer
} from './styles'
import { useCart } from '../../hooks/CartContext'
import { api } from '../../services/api'

export function Header() {
  const navigate = useNavigate()
  const { logout, userInfo } = useUser()
  const { pathname, search } = useLocation()
  const { getCartQuantity } = useCart()
  const [searchTerm, setSearchTerm] = useState('')
  const [categories, setCategories] = useState([])
  const count = getCartQuantity()

  useEffect(() => {
    async function loadCategories() {
      try {
        const { data } = await api.get('/categories')
        setCategories(data)
      } catch (error) {
        console.error('Erro ao carregar categorias:', error)
      }
    }
    loadCategories()
  }, [])

  function logoutUser() {
    logout()
    navigate('/login')
  }

  const currentCategory = new URLSearchParams(search).get('categorias')

  return (
    <>
      <StoreTitleContainer>Origem</StoreTitleContainer>

      <Container style={{ position: 'fixed', zIndex: 9999, top: 0 }}>
        <Content>
          <Navigation>
            <div style={{ display: 'flex', gap: '50px' }}>
              <HeaderLink to="/" $isActive={pathname === '/'}>Home</HeaderLink>
              <HeaderLink to="/cardapio" $isActive={pathname === '/cardapio' && !currentCategory}>Todos</HeaderLink>
              {categories.map((category) => (
                <HeaderLink
                  key={category.id}
                  to={`/cardapio?categorias=${category.id}`}
                  $isActive={pathname === '/cardapio' && currentCategory === String(category.id)}
                >
                  {category.name}
                </HeaderLink>
              ))}
            </div>
          </Navigation>
 
          <Options>
            <Profile>
              <UserCircle color="#636262" size={24} />
              <div>
                <p>Olá, <span>{userInfo.name}</span></p>
                <LogoutButton onClick={logoutUser}>Sair</LogoutButton>
              </div>
            </Profile>

            

            <LinkContainer>
              <div style={{ position: 'relative' }}>
                <ShoppingCart color="#2b2b2d" size={24} />
                {count > 0 && (
                  <span style={{
                    position: 'absolute',
                    top: -6,
                    right: -6,
                    backgroundColor: 'red',
                    color: 'white',
                    borderRadius: '50%',
                    fontSize: '10px',
                    width: '16px',
                    height: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {count}
                  </span>
                )}
              </div>
              <HeaderLink to="/carrinho">Carrinho</HeaderLink>
            </LinkContainer>
          </Options>
        </Content>
      </Container>
    </>
  )
}

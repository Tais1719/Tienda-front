import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { UserCircle, ShoppingCart } from '@phosphor-icons/react';
import { useUser } from '../../hooks/UserContent';
import {
  Container, HeaderLink, Options, Profile,
  LinkContainer, LogoutButton, Navigation, Content, StoreTitleContainer
} from './styles';
import { useCart } from '../../hooks/CartContext';
import { api } from '../../services/api';

export function Header() {
  const navigate = useNavigate();
  const { logout, userInfo } = useUser();
  const { pathname, search } = useLocation();
  const { getCartQuantity } = useCart();
  const count = getCartQuantity();

  const [categories, setCategories] = useState([]);
  const [showHeader, setShowHeader] = useState(true);

  const currentCategory = new URLSearchParams(search).get('categorias');

  // Carrega categorias
  useEffect(() => {
    async function loadCategories() {
      try {
        const { data } = await api.get('/categories');
        setCategories(data);
      } catch (error) {
        console.error('Erro ao carregar categorias:', error);
      }
    }
    loadCategories();
  }, []);

  // Scroll só na Home
  useEffect(() => {
    if (pathname !== '/') return; // só aplica na Home

    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 100) {
        setShowHeader(false); // scroll para baixo, esconde
      } else {
        setShowHeader(true);  // scroll para cima, mostra
      }
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  function logoutUser() {
    logout();
    navigate('/login');
  }

  return (
    <>
      <StoreTitleContainer
        style={{
      
          top: pathname === '/' ? (showHeader ? '0' : '-120px') : '0',
          transition: 'top 0.3s ease',
        }}
      >
        Origen
      </StoreTitleContainer>
<Container
  isHome={pathname === '/'}
  style={{
    top: pathname === '/' ? (showHeader ? '0' : '-120px') : '0',
  }}
>
        <Content >
          <Navigation >
            <div style={{ display: 'flex', gap: '70px' }}>
              <HeaderLink to="/" $isActive={pathname === '/'}>Home</HeaderLink>
              <HeaderLink
                to="/cardapio"
                $isActive={pathname === '/cardapio' && !currentCategory}
              >
                Todos
              </HeaderLink>
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
  );
}

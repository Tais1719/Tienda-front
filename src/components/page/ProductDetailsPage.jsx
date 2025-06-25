import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
import { FormatPrice } from '../../utils/formatPrice';
import { ProductDetails } from '../../components/page/ProductDetails';

export function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProductDetails() {
      setLoading(true);
      try {
        const { data } = await api.get(`/products/${id}`);

        const fakeImages = [
          data.url,
          'https://placehold.co/500x300?text=Imagem+2',
          'https://placehold.co/500x300?text=Imagem+3',
          'https://placehold.co/500x300?text=Imagem+4',
          'https://placehold.co/500x300?text=Imagem+5',
          'https://placehold.co/500x300?text=Imagem+6',
        ];

        setProduct({
          CurrencyValue: FormatPrice(data.price),
          images: fakeImages,
          ...data,
        }); 

        setError(null);
      } catch (error) {
        if (error.response?.status === 404) {
          setError('Produto não encontrado.');
        } else {
          setError('Erro ao carregar os detalhes do produto.');
        }
      } finally {
        setLoading(false);
      }
    }

    loadProductDetails();
  }, [id]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return null;

  return <ProductDetails product={product} />;
}

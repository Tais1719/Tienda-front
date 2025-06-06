// src/components/page/ProductDetails.jsx
import styled from 'styled-components';
import { useState } from 'react';

const Container = styled.div`
  position: relative;
  margin-left: 90px;
  padding: 1rem;
  max-width: 500px;
  margin-top: 150px;
  background-color: #fafdef;
`;

const Title = styled.h1`
  position: absolute;
  top: 10px;
  left: 700px;
  font-size: 1rem;
  background-color: #fff8dc;
  padding: 0.25rem 0.5rem;
  border-radius: 9px;
  width: 600px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ImageWrapper = styled.div`
  position: relative;
  margin-top: 3rem;
  margin-bottom: 1rem;
`;

const Arrow = styled.button`
  position: absolute;
  top: 50%;
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  cursor: pointer;
  font-size: 2rem;
  z-index: 2;
  transform: translateY(-50%);
`;

const LeftArrow = styled(Arrow)`
  left: -30px;
`;

const RightArrow = styled(Arrow)`
  right: -30px;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Modal = styled.div`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.85);
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalImage = styled.img`
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 12px;
`;

const DescriptionPriceWrapper = styled.div`
  margin-top: 1rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #e90808;
  margin-bottom: 0.5rem;
`;

const Price = styled.strong`
  font-size: 1.5rem;
  color: #1a8917;
`;

export function ProductDetails({ product }) {
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = product.images || [product.url];

  const nextImage = () =>
    setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <Container>
      <Title>{product.name}</Title>

      <ImageWrapper>
        {images.length > 1 && (
          <>
            <LeftArrow onClick={prevImage}>&larr;</LeftArrow>
            <RightArrow onClick={nextImage}>&rarr;</RightArrow>
          </>
        )}
        <Image
          src={images[currentImage]}
          alt={product.name}
          onClick={() => setShowModal(true)}
        />
      </ImageWrapper>

      <DescriptionPriceWrapper>
        <Description>{product.description}</Description>
        <Price>{product.CurrencyValue}</Price>
      </DescriptionPriceWrapper>

      <Modal open={showModal} onClick={() => setShowModal(false)}>
        <ModalImage src={images[currentImage]} alt={product.name} />
      </Modal>
    </Container>
  );
}

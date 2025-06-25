import styled from 'styled-components'

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  color: #666;

  p {
    margin-top: 16px;
    font-size: 18px;
    font-weight: 500;
  }
`

export const ProductImage = styled.img`
  width: 84px;
  height: 124px;
  object-fit: cover;
  border-radius: 4px;
`

export const ProductTotalPrice = styled.span`
  font-weight: 600;
`

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  button {
    width: 32px;
    height: 32px;
    background: #f3f4f6;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 18px;
    transition: background 0.2s, transform 0.1s;

    &:hover {
      background: #e5e7eb;
    }

    &:active {
      transform: scale(0.95);
    }
  }

  span {
    min-width: 24px;
    text-align: center;
    font-weight: 600;
  }
`

export const TrashImage = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`

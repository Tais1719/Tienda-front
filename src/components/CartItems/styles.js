// Product styles
import styled from 'styled-components';

export const ProductImage = styled.img`

  width: 110px;
  height: 120px;
  object-fit: cover;
  border-radius: 4px;
  display: block;
`;

export const ProductTotalPrice = styled.span`
  font-weight: 600;

  font-size: 13px;
  padding: 1px 8px;
  border-radius: 4px;
  display: inline-block;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  padding: 1px;
  border-radius: 4px;

  button {
    width: 2px;
    height: 24px;
     padding:10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: #e5e7eb;
    }
    &:active {
      transform: scale(0.95);
    }
  }

  span {
    background-color: #8b8589;
    margin:20px;
    color: #fff;
    min-width: 30px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 13px;
    border-radius: 4px;
  }
`;

export const TrashImage = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;

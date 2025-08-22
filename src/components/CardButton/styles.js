import styled from "styled-components";

export const ContainerButton = styled.button`
  background-color: #7aabf5ff;
  width: 100%;
  height: 42px;
  margin-top: 12px; /* espaço mais natural abaixo do conteúdo */
  border: 0;
  border-radius: 5px;
  font-size: 16px;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.1s ease, background-color 0.2s;

  /* Remove hover */
  &:hover {
    background-color: #60a5fa;
  }

  /* Zoom ao clicar */
  &:active {
    transform: scale(0.95);
    background-color: #3b82f6; /* Azul mais escuro ao clicar, opcional */
  }
`;

// src/components/SearchIcon.styles.js
import styled from "styled-components";

// Estiliza o botão do ícone de busca
export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
  }
`;

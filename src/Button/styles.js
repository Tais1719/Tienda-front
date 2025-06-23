import styled from "styled-components";

// Estilo do botão com clique suave
export const ContainerButton = styled.button`
  width: 100%;
  height: 52px;
  border-radius: 5px;
  border: 0;
  background-color: #778899;
  cursor: pointer;
  font-size: 30px;
  color: #fff;
  font-family: "Road Rage", serif;

  transition: background-color 0.5s ease, transform 0.2s ease; /* Transição suave */

  &:hover {
    background-color: #d1d5db;
  }

  &:active {
    transform: scale(0.90); /* Leve redução no clique */
    background-color: #a0aec0; /* Cor diferente ao clicar, opcional */
  }
`;

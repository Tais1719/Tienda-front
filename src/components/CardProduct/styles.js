import styled, { css } from "styled-components";

export const Container = styled.div`
background-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border-radius: 5%;
  background-color: rgba(237, 238, 233, 1);
  width: 100%;
  max-width: 400px;
  margin-bottom: 30px;
  position: relative; /* necessário para posicionar as setas */

  p {
    font-size: 18px;
    color: rgb(26, 138, 14);
    line-height: 20px;
    margin-bottom: 9px;
  }

  strong {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 20px;
    color: rgb(62, 62, 63);
    font-weight: 900;
    line-height: 20px;
  }

  @media (max-width: 430px) {
    padding: 16px;

    p {
      font-size: 16px;
    }

    strong {
      font-size: 18px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;

  @media (max-width: 430px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const CardImage = styled.img`

  height: 120px;
  width: 150px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;

  @media (max-width: 430px) {
    height: 80px;
    width: 80px;
  }
`; 

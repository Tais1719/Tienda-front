// styles.js
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 800;
  padding-bottom: 20px;
  margin-top: 130px;
  color: rgb(75, 78, 75);
margin-left:190px;
  

  
`;

export const Content = styled.div`

  display: grid;
  grid-template-columns: 1fr 55%; /* lado esquerdo e direito */
  gap: 10px;
  width: 100%;
  max-width: 1280px;
  margin-left: 60px;

`;


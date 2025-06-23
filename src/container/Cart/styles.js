// styles.js
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-bottom: 40px;
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 800;
  padding-bottom: 12px;
  margin-top: 150px;
  color: rgb(75, 78, 75);
  text-align: center;
  position: relative;

  
`;

export const Content = styled.div`

  display: grid;
  grid-template-columns: 1fr 55%; /* lado esquerdo e direito */
  gap: 150px;
  width: 100%;
  max-width: 1280px;
  margin-left: 100px;
  padding: 40px;
`;


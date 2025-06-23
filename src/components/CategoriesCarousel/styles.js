import styled from 'styled-components';
export const Container = styled.div`
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow: hidden;

  /* Garante que não vai ter espaçamento lateral */
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`;


export const HeaderText = styled.div`
  text-align: center;
  padding: 20px 20px;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1.5px;
`;

export const Subtitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 300;
  margin: 10px 0 0;
  font-family: Arial, Helvetica, sans-serif;
  color: #555;
`;
export const BannerImage = styled.img`
  width: 100vw;
  height: 70vh;
  
  display: block;
`;

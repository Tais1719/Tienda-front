import styled, { keyframes } from 'styled-components';

// Animação de gradiente arco-íris no texto
const gradientMove = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
`;

// Animação de piscar para o subtítulo
const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`;

export const Container = styled.div`
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow: hidden;
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
  font-weight: 800;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1.5px;
  background: linear-gradient(-45deg, #ff6ec4, #7873f5,#0a1172, #C4FCEF);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradientMove} 4s ease infinite;
`;

export const Subtitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 10px 0 0;
  font-family: Arial, Helvetica, sans-serif;
  color: crimson;
  animation: ${blink} 1.2s infinite;
`;

export const BannerImage = styled.img`
  width: 100vw;
  height: 70vh;
  display: block;
`;

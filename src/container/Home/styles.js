import styled, { createGlobalStyle } from "styled-components";
import BannerHome from '../../assets/foto.webp';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    font-family: Arial, sans-serif;
  }
`;

export const Banner = styled.div`
  position: relative;
  background: url('${BannerHome}') no-repeat center center;
  background-size: cover;
  height: auto;
  height: 850px;
  padding: 4rem 2rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  h1 {
    font-family: "Road Rage", sans-serif;
    font-size: 80px;
    color:#fff;
    margin-bottom: 1rem;
    text-align: center;
  }

 
`;

export const Text = styled.p`
  color: #fff;
  margin-left: 45%;
  font-size: 1.4rem;
  font-weight: 800;
  max-width: 600px;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  margin-top: 8rem;
  line-height: 1.5;
`;

export const Container = styled.section`
  background: rgba(234, 234, 227, 0.85);
  padding: 2rem;

  > div {
    max-width: 1600px;
    margin: 0 auto;
  }
`;



import styled, { keyframes, createGlobalStyle } from "styled-components";


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

const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;
export const Banner = styled.div`
  position: relative;
  height: 850px; /* altura menor que antes */
  overflow: hidden;
  
  &::before {
    content: "";
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: linear-gradient(
      rgba(126, 123, 123, 0.4),
      rgba(59, 61, 60, 0.2),
      rgba(87, 128, 97, 0.2)
    );
    z-index: 0; 
  }
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left top;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0; 
`;

export const BannerContent = styled.div`
  position: absolute;
  top: 25%;
  left: 5%;
  display: flex;
  flex-direction: column;
  z-index: 2;

  h1 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 50px;
    background: linear-gradient(90deg, #19191a60, #10b981, #60a5fa);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${gradient} 5s ease infinite;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 6px rgba(8, 8, 8, 0.6);
  }

  p {
    margin-top: 20px;
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: 700;
    max-width: 650px;
    line-height: 1.6;
    text-align: left;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
  }

  .icons {
    display: flex;
    gap: 20px;
    margin-top: 2rem;

    svg {
      font-size: 2rem;
      color: #292207ff;
      transition: transform 0.5s, color 0.5s;

      &:hover {
        transform: translateY(-10px) rotate(15deg);
        color: #53b910ff;
      }

      animation: float 3s ease-in-out infinite;
    }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }
`;

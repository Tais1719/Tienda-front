import styled, { keyframes } from 'styled-components'

// Animação de gradiente arco-íris no texto
const gradientMove = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
`

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`


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
background: linear-gradient(
         rgba(87, 128, 97, 0.2)
    );
`

export const BannerImage = styled.img`
  width: 100%;       /* define o tamanho da imagem */
  height: 100%;      /* mesma altura para ficar perfeitamente circular */
  display: block;
  margin-top: 60px;


  border-radius: 3%;      /* deixa totalmente arredondada */
  object-fit: cover;       /* garante que a imagem preencha o círculo sem distorcer */
`



export const BannerTextOverlay = styled.div`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  pointer-events: none;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.7);
`

export const DiscountTitle = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1.5px;
  color: #5d9949ff;
  text-shadow: 1px 1px 4px rgba(0,0,0,0.6);
  animation: ${blink} 1.2s infinite;

`

export const DiscountSubtitle = styled.p`
  font-size: 1.5rem;
  margin-top: 10px;
  font-weight: 600;

`

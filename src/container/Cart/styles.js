
import styled from "styled-components";



export const Container = styled.div`
  background-color: rgb(192, 186, 186);
  width: 100%;
  min-height: 100vh;
  padding-bottom: 40px;
`;



export const Title = styled.div`
font-size: 32px;
font-weight: 800;
padding-bottom: 12px;
margin-top: 50px;
color: rgb(69, 150, 11) ;
text-align: center;
position: relative;

&::after{
  content: '';
   position: absolute;
   left: calc(50% + -28px);
   bottom: 0;
   left: 50%;
   width: 56px;
   height: 4px;
   background-color:rgb(69, 150, 11);
   transform: translateX(-50%);
}
`;

export const Content = styled.div`
display: grid;
grid-template-columns: 1fr 25%;
gap: 40px;
width: 100%;
max-width: 1280px;
padding: 40px;
margin: 0 auto;
`;


import styled from "styled-components";


export const Container = styled.div`

  width: 100%; /* Ocupa toda a largura da viewport */

.carousel-item{

    padding-right: 40px;


} 

overflow-x: hidden;


  .react-multi-carousel-list{
overflow: visible;



}


.react-multiple-carousel__arrow--left {
    left: 10px;
  top: 10px;

}

.react-multiple-carousel__arrow--right {
  
right: 130px;
  top:30px;

}


padding-left: 40px;
padding-bottom:40px;



`
export const Title = styled.h2`
  margin-top: 40px;
  font-size: 40px;
  font-weight: 900;
  color: transparent;
  text-align: center;
  margin-bottom: 48px;
  position: relative;

  background: linear-gradient(
    

    #64748b 90%       /* cinza azulado suave */
  );
  background-size: 20% 100%;
  
  background-clip: text;
  -webkit-background-clip: text;

font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;



  &::after {
    content: '';
    position: absolute;
    bottom: -16px;
    left: 50%;
    transform: translateX(-50%);
    width: 140px;
    height: 8px;
    border-radius: 8px;

    background: linear-gradient(
      270deg,
rgb(158, 176, 218),

      #64748b,
rgb(200, 211, 238),
      #3b82f6
    );
    background-size: 300% 60%;
    animation: slideBorder 3s linear infinite;

    box-shadow: 0 0 26px #3b82f6, 0 0 50px #64748b;
  }

  filter: drop-shadow(0 0 29px #3b82f6);
`;
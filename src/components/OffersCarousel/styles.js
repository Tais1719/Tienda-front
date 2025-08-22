import styled from "styled-components";


export const Container = styled.div`

  width: 100%; /* Ocupa toda a largura da viewport */
background: linear-gradient(
     
      rgba(142, 163, 148, 0.2),
        rgba(39, 63, 41, 0.2),
          rgba(19, 247, 80, 0.2)
    );



.carousel-item{
    padding-right: 40px;


} 

overflow-x: hidden;


  .react-multi-carousel-list{    
overflow: visible;



}


.react-multiple-carousel__arrow--left {
    left:1px;
  top:150px;

}

.react-multiple-carousel__arrow--right {
  
right: 40px;
  top:140px;

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
    

    #748d72ff 90%       /* cinza azulado suave */
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
    transform: translateX(-30%);
    width: 140px;
    height: 8px;
    border-radius: 8px;

    background: linear-gradient(
      230deg,
rgb(158, 176, 218),

      #64748b,
rgb(200, 211, 238),
      #446844ff
    );
    background-size: 300% 60%;
    animation: slideBorder 3s linear infinite;

    box-shadow: 0 0 23px #70bd90ff, 0 0 50px #64748b;
  }

  filter: drop-shadow(0 0 29px #357438ff);
`;
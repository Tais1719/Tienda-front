import styled from "styled-components";


export const Container = styled.div`
  width: 100vw; /* Ocupa toda a largura da viewport */
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
  top:10px;

}


padding-left: 40px;
padding-bottom:40px;



`

export const Title = styled.h2`
font-size: 32px;
color:blue;
font-weight: 900;
padding-bottom: 8px;
position: relative;
text-align: center;
margin:60px 0;

&::after{
    content: '';
    position: absolute;
    bottom: 0;
    width: 55px;
    height: 4px;
    background:navy;
    left: 50%;
transform: translateX(-28px);

}


`

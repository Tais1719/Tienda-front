import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.div`
 width: 98vw; /* Ocupa toda a largura da viewport */

.carousel-item{
    padding-right: 40px;

}
.react-multiple-carousel__arrow--left {
    left: 10px;
  top: 10px;

}


 
.react-multiple-carousel__arrow--right {
right: 50px;
  top:10px;
}

padding-left: 40px;

` 


export const Title = styled.h2`
font-size: 32px;
color:  ${(props) =>props.theme.blue};
font-weight: 900;
padding-bottom: 12px;
position: relative;
text-align: center;
margin-bottom: 40px;
margin-top: 20px;

&::after{
    content: '';
    position: absolute;
    bottom: 0;
    width: 55px;
    height: 4px;
    background:  ${(props) =>props.theme. darkBlue};
    left: 50%;
transform: translateX(-28px);

}


`

export const ContainerItems = styled.div`
background: url('${(props)=> props.imageUrl }');
background-position: center;
background-size:cover;
border-radius: 20px;
display: flex;
align-items: center;
padding: 20px 10px;
width: 100%;
height: 250px;
 
p{
  color: #ffffff;
background-color:rgba(0,0,0,0.5);
padding: 10px 30px;
border-radius: 30px;
font-size: 22.5px;
font-weight: bold;
margin-top:50px;


 


}

`

export const CategoryButton = styled(Link)`


color: #ffffff;
background-color:rgba(0,0,0,0.5);
padding: 10px 30px;
border-radius: 30px;
font-size: 22.5px;
font-weight: 500;
margin-top:50px;
text-decoration: none;


&:hover{
 background-color:#778899;

}

`

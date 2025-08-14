import styled from "styled-components";
import Background from '../../assets/login6.jpg'

import { Link as ReactLink } from "react-router-dom";

export const Container = styled.div`

display: flex;
height: 100vh;
right: 100vw;

`

export const LeftContainer = styled.div`
background: url('${Background}');
background-size:cover ;
background-position:center;
height: 100%;
width:100%; 
display: flex;
align-items: center;
justify-content: center;

img{
    width: 80%;

}

`

export const RightContainer = styled.div`

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

height: 100%;
width:100%;
max-width: 50%;
background-color: #eceef1ff;




p{
  
color: #494646ff;
font-size: 18px;
font-weight: 800;


}

a{
  text-decoration: underline;
  color:rgb(56, 26, 249) ;
  
  
  }



`

export const Title = styled.h2`

font-family:'Times New Roman', Times, serif;
  font-size: 40px;
  color: ${(props) =>props.theme.darkBlue};
  font-size:30px;
  margin-bottom:50px;
  


`

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 20px;
padding: 20px;
width: 100%;
max-width: 400px;

`

export const InputContainer = styled.div`

display: flex;
flex-direction: column;
gap: 5px;
width: 100%;


input{
   
    width: 100%;
border: none;
height: 52px;
border-radius: 5px;
padding: 0 16px;

}
 
 label{
    font-size: 18px;
   color: #302c53ff;
    font-weight: 600;

}



`

export const Link  = styled (ReactLink)`

text-decoration: none;
color: white;

`
import styled from "styled-components";
import ReactSelect from 'react-select'
import { Button } from "../../../components";


export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
min-height: 100vh;

`;

export const Form = styled.form`
border-radius: 20px;
background-color: ${(props) => props.theme.black};
padding: 22px;
width: 100%;
max-width:380px;
display: flex;
flex-direction: column;
gap: 25px;


`;



export const InputGroup = styled.div`
display: flex;
flex-direction: column;




`;



export const Label = styled.label`

color: ${(props) => props.theme.white};
font-size: 14px;


`;



export const Input = styled.input`
width: 100%;
height: 48px;
border: none;
border-radius: 5px;
padding: 0 12px;

`;



export const LabelUpload = styled.label`
cursor: pointer;
border:1px dashed ${(props) => props.theme.white};
border-radius: 5px;
padding: 12px;
display: flex;
color:  ${(props) => props.theme.white};
margin: 20px 0;

>svg{

    width:20px;
    height: 20px;
    fill:  ${(props) => props.theme.white};
    margin-right: 4px;
};
input{
display:none;

}

`; 


export const Select= styled(ReactSelect)`
background-color: red;

`;

export const SubmitButton = styled(Button)`
margin-top: 20px;

`;

export const ErrorMessage = styled.span`
color:${(props) => props.theme.darkRed};
font-size: 14px;
line-height:80%;
font-weight:600;


`;

export const Containercheckbox  = styled.div`
display: flex;
gap: 10px;
cursor: pointer;


input{ 
    cursor: pointer;
 }


`;

export const DeletarButton = styled.button`
height: 52px;
  border-radius: 5px;
  border: 0;
  background-color:  ${(props) =>props.theme.red};
  cursor: pointer;
  font-size: 30px;
  color:#fff;
  
font-family: "Road Rage", serif;

&:hover {
background-color:rgb(124, 61, 53);
border: 1 px dashed #fff;
  
}

`;






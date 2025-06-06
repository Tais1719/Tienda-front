import styled from "styled-components";
import { Link } from 'react-router-dom';




export const Container = styled.nav`
display: flex;
flex-direction: column;
width:100% ;
height: 100vh;
background-color:${(props)=> props.theme.black}  ;
align-items: center;


img { 
    width: 60%;
    margin: 40px 0;
} 

`;


export const NavLinkContainer = styled.nav`
display: flex;
flex-direction: column;
width: 100%;


`;



export const NavLink = styled(Link)`
display: flex;
align-items: center;
gap: 19px;
padding: 19px 20px;
margin-top: 5px;
text-decoration:none;
color: ${(props) => props.theme.white} ;
background-color: ${(props) => (props.$isActive ? props.theme.darkBlue: 'transparent')} ;


&:hover { 
    background-color:  ${(props) => props.theme.darkBlue};

}

`;



export const  Footer = styled.footer`

width:100%;
margin-top: auto;



`;


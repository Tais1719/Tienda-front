import styled from "styled-components";


export const Container = styled.div`

margin-right:90px;
margin-left:90px;


`;

export const  ProductoImage = styled.img`
height: 80px;
padding: 12px;
border-radius: 16px;

 

`;


export const  EditButton= styled.button`
border: none;
cursor: pointer;
background-color:${(props) => props.theme.darkWhite} ;
height: 32px;
width: 32px;
border-radius: 8px;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: center;



svg{
   height:18px;
   width: 18px;
}


&:hover{
    background-color:${(props) => props.theme.darkBlue};


    svg{
   
        fill:${(props) => props.theme.white}
}
}


`;


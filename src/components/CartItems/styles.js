import styled from "styled-components";



export const ProductImage = styled.img`

height: 120px;
width: 120px;
`;

export const ButtonGroup = styled.div`
display: flex;
align-items: center;
gap: 12px;


button { 
    display:flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    color: #fff;
    border-radius: 4px;
    background-color:  ${(props) =>props.theme.  darkGray};
    transition: all 0.4s;
    border: none;

    &:hover { 
        background-color:#6b7280;
    }

}
`;


export const EmtyCart = styled.p`
font-size: 20px;
text-align: center;
font-weight: bold;
color: navy;
`;



export const ProductTotalPrice = styled.p`

font-weight: bold;
`;

export const TrashImage = styled.img`
height: 20px;
width: 20px;
cursor: pointer;
`;

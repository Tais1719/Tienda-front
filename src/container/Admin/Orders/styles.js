
import Select from 'react-select';
import styled from 'styled-components'





export const ProductImage = styled.img`
height: 100px;
padding: 9px;




`;

export const SelectStatus = styled(Select)`

width: 240px;

`;



export const Filter= styled.div`
display: flex;
justify-content: center;
margin: 28px 0;
gap: 50px;


`;


export const FilterOption = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  color:${(props) =>
     props.$isActiveStatus ? props.theme. darkBlue: props.theme.darkGray};
  border-bottom: ${(props) =>
    props.$isActiveStatus ? `4px solid ${props.theme. darkBlue}` : 'none'};
  font-size: 18px;
  line-height: 20px;
  padding-bottom: 5px;
`;


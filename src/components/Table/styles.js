import styled from 'styled-components';

export const Root = styled.table`
    width: 10%;
    margin-bottom: 50%;
    border-collapse: collapse;
    background-color: #fff;
    border-radius: 20px;
   
`;

export const Header = styled.thead``;

export const Tr = styled.tr``; 

export const Th = styled.th`
    padding: 20px;
    text-align: left;
    color: #484848;
    border-bottom: 1px solid #cdcdcd;

    &:last-child { 

        border-top-right-radius:20px;
     }
     
    &:first-child { 
        
    border-top-left-radius: 20px;
  

}

`;

export const Td = styled.td`

    color: #484848;
    font-weight: 500;
    line-height: 115%;
`;

export const Body = styled.tbody``;
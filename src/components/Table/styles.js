import styled from 'styled-components';

export const Root = styled.table`
  background-color: #faf8f8ff;
  width:120%;
  border-radius: 20px;

  th, td {
    border: none !important;   /* remove qualquer borda das células */
  }

  tr {
    border: none !important;   /* remove qualquer borda das linhas */
  }
`;

export const Header = styled.thead``;

export const Tr = styled.tr``; 

export const Th = styled.th`
  padding: 10px;
  text-align: left;
  color: #484848;
`;

export const Td = styled.td`
  color: #484848;
  font-weight: 500;
  line-height: 115%;
`;

export const Body = styled.tbody``;

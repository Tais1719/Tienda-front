import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 720px;
  margin: 40px auto;
  padding: 0 20px;
  font-family: Arial, sans-serif;

  .title {
    font-size: 26px;
    font-weight: 700;
    color: #3b5672;
    margin-bottom: 30px;
    text-align: center;
  }

  .linha-flex {
    display: flex;
    gap: 20px;
    margin-bottom: 15px;

    input {
      flex: 1;
    }
  }

  .container-bottom {
   
    margin-top: 20px;
   margin-right:80px;
    font-size: 16px;
    

    .linha-valor {
       margin-left: 40px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
    } 

    .total {
      margin-left: 40px;
      font-size: 20px;
      font-weight: 600;
      border-top: 2px solidrgb(65, 66, 68);
      padding-top: 8px;
      margin-top: 10px;
      color:#1b4332;
      margin-bottom: 30px;;
    }
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  input {
    padding: 10px 5px 8px 5px;
    font-size: 16px;
    border: none;
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
    font-weight: 600;
    color: #484848;
    outline: none;
    transition: border-color 0.3s ease;

    &:focus {
      border-bottom-color: #1a73e8;
    }
  }
`;

export const EnderecoDetalhado = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 6px;
    color: #333;
  }

  input {
    width: 100%;
    padding: 10px 5px 8px 5px;
    font-weight: 600;
    color: #484848;
    border: none;
    border-bottom: 2px solid #ccc;
    background-color: transparent;
    outline: none;
    transition: border-color 0.3s ease;
    margin-bottom: 0;
  }

  .linha-flex {
    display: flex;
    gap: 20px;
    margin-bottom: 10px;

    > div.input-pequeno {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
  }
`;

export const LinhaHorizontal = styled.hr`
 
  border: none;
`;

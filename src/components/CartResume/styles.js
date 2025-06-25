import styled from "styled-components";
import { Button as DefaultButton } from "../../Button";

export const Container = styled.div`
  width: 100%;
  max-width: 720px;
  margin: 10px auto;
  padding: 0 10px;
  font-family: Arial, sans-serif;

  .title {
    font-size: 24px;
    font-weight: 700;
    color: #3b5672;
    margin-bottom: 20px;
    text-align: center;
  }

  .linha-flex {
    display: flex;
    gap: 8px;
    margin-bottom: 8px;

    input {
      flex: 1;
    }
  }

  .container-bottom {
    margin-top: 10px;
    margin-right: 20px;
    font-size: 14px;
    color: #222;

    .linha-valor {
      margin-left: 20px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 4px;
    }

    .total {
      font-size: 18px;
      font-weight: 700;
      border-top: 1px solid #444;
      padding-top: 6px;
      margin-top: 6px;
      margin-left: 20px;
      margin-bottom: 20px;
    }
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  input {
    padding: 8px 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 6px;
    margin-bottom: 10px;
    font-weight: 500;
    color: #484848;
    outline: none;
    background-color: #fdfdfd;
    transition: border-color 0.2s ease;

    &:focus {
      border-color: #1a73e8;
      background-color: #fff;
    }

    &::placeholder {
      color: #999;
      font-weight: 400;
    }
  }
`;

export const EnderecoDetalhado = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 4px;
    color: #2a2a2a;
  }

  input {
    width: 100%;
    padding: 8px 10px;
    font-size: 14px;
    font-weight: 500;
    color: #484848;
    border: 1px solid #ccc;
    border-radius: 6px;
    background-color: #f9f9f9;
    outline: none;

    &:focus {
      border-color: #1a73e8;
      background-color: #fff;
    }
  }

  .linha-flex {
    display: flex;
    gap: 8px;

    > div.input-pequeno {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
  }
`;

export const LinhaHorizontal = styled.hr`
  border: none;
  height: 1px;
  background-color: #ccc;
  margin: 20px 0;
`;

export const EmptyCartContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 20px 20px 0; /* espaço acima */

  display: flex;
  flex-direction: column;
  align-items: center; /* centraliza horizontalmente */

  font-family: Arial, sans-serif;
  text-align: center;

  svg {
    width: 150px;
    opacity: 0.5;
    margin-bottom: 15px;
  }

  h2 {
    font-size: 22px;
    color: #3b5672;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    max-width: 480px;
    line-height: 1.5;
    word-break: break-word;
  }
`;

export const EmptyCartButton = styled(DefaultButton)`
  margin-top: 20px;
  padding: 6px 14px;
  font-size: 16px;
  border-radius: 50px;
  background-color: #60a5fa;
  width: 180px;
  text-align: center;
  cursor: pointer;
  color: white;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3b82f6;
  }
`;

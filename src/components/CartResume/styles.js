import styled from "styled-components";
import { Button as DefaultButton } from "../../Button";

export const Container = styled.div`
  width: 90%;
  max-width: 580px;
  position: fixed;
  top: 108px;
  left: 77%;
  transform: translateX(-50%);
  background-color: #f3f3f3ff;
  border-radius: 10px;
  font-family: Arial, sans-serif;
   padding: 10px; /* ESPAÇO INTERNO: deixa conteúdo longe das bordas */

  .title {
    font-size: 15px;
    font-weight: 700;
    color: #3b5672;
    margin-bottom: 18px;
    text-align: center;
  }

  .linha-flex {
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;

    input {
      flex: 1;
      min-width: 0;  
      background: none;
      border: none;
      border-bottom: 1px solid #dbd8d8ff;
      color: #1d252cff;
      padding: 1px;
      font-size: 13px;
      font-weight: 500;
      outline: none;


      &:focus,
      &:active {
        border-bottom-color: #ccc;
        outline: none;
      }

      &::placeholder {
        color: #999;
      }
    }
  }

  .container-bottom {
    margin-top: 20px;
    font-size: 14px;
    color: #6f6666ff;

    .linha-valor {
      display: flex;
      justify-content: space-between;
      margin-bottom: 2px;
    }

    .total {
      color: #1b1a1aff;
      font-size: 18px;
      font-weight: 700;
      border-top: 1px solid #444;
      padding-top: 6px;
      margin-top: 6px;
      margin-bottom: 16px;
    }
  }

  @media (max-width: 768px) {
    .title {
      font-size: 20px;
    }

    .linha-flex {
      flex-direction: column;

      input {
        &:focus,
        &:active {
          border-bottom-color: #ccc;
          outline: none;
        }
      }
    }
  }

  @media (max-width: 480px) {
    width: 95%;
    .title {
      font-size: 18px;
    }
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .linha-flex {
    display: flex;
    align-items: baseline;

    label {
      font-size: 14px;
      color: #33373b;
      font-weight: 600;
      white-space: nowrap;
      margin: 0;
    } 

    input {
      background: none;
      border: none;
      border-bottom: 1px solid #ccc; /* linha só no input */
      font-size: 14px;
      font-weight: 500;
      color: #484848;
      outline: none;
      padding: 0;
      margin-left: 10px; /* pequeno espaço entre label e texto digitado */
      width: auto; /* linha acompanha o texto, não ocupa 100% */

      &::placeholder {
        color: #999;
      }

      &:focus {
        border-bottom-color: #3b5672;
      }
    }
  }
`;

export const EnderecoDetalhado = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;

  label {
    font-size: 13px;
    font-weight: 600;
    margin: 6px 0 2px;
    color: #2a2a2a;
  }


  input {
    background: none;
    border: none;
    border-bottom: 1px solid #ccc;
    padding: 5px 4px;
    font-size: 14px;
    font-weight: 500;
    color: #484848;
    outline: none;
    margin-bottom: 6px;

    &:focus,
    &:active {
      border-bottom-color: #ccc;
      outline: none;
    }

    &::placeholder {
      color: #999;
    }
  }

  .linha-flex {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    > div.input-pequeno {
      flex: 1;
      display: flex;
      flex-direction: column;

      input {
        min-width: 0;

        &:focus,
        &:active {
          border-bottom-color: #ccc;
          outline: none;
        }
      }
    }

    input {
      flex: 1;
      min-width: 0;

      &:focus,
      &:active {
        border-bottom-color: #ccc;
        outline: none;
      }
    }
  }

  @media (max-width: 768px) {
    .linha-flex {
      flex-direction: column;
    }
  }
`;
 export const LinhaHorizontal = styled.hr`
  border: none;
  height: 1px;
  background-color: #3b5672;
  margin: 16px 0;

  width: 0;
  opacity: 0;

  &.ativo {
    width: 100%;
    opacity: 1;
  }
`;


export const EmptyCartContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-left: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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

  @media (max-width: 480px) {
    h2 {
      font-size: 18px;
    }

    p {
      font-size: 14px;
    }
  }
`;

export const EmptyCartButton = styled(DefaultButton)`
  margin-top: 20px;
  padding: 8px 16px;
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

  @media (max-width: 480px) {
    width: 100%;
    font-size: 14px;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  background-color: aliceblue;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;

  * {
    color: #484848;
    font-weight: 600;
  }

  .container-top {
    display: grid;
    grid-gap: 10px 18%;
    grid-template-areas: 
      'title title'      
      'items items-price'
      'delivery-tax delivery-tax-price';

    .title {
      grid-area: title;
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 20px;
      background-color: #484848;
      color: #fff;
      width: 100%;
      padding: 15px;
      text-align: center;
      border-top-right-radius: 20px;
      border-top-left-radius: 20px;
    }

    .items {
      grid-area: items;
      padding-left: 20px;
    }

    .items-price {
      grid-area: items-price;
      padding-right: 20px;
    }

    .delivery-tax {
      grid-area: delivery-tax;
      padding-left: 20px;
      white-space: nowrap;
    }

    .delivery-tax-price {
      grid-area: delivery-tax-price;
      padding-right: 20px;
    }
  }

  .container-bottom {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    margin-top: 24px;
    padding-right: 40px;

    * {
      font-weight: 700;
      color: #000;
    }
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  label {
    margin-bottom: 5px;
    font-weight: 700;
  }

  input {
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
  }

  button {
    background-color: #1a73e8;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
      background-color: #145bb5;
    }
  }
`;

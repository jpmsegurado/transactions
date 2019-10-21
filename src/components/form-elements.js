import styled from 'styled-components';

export const Form = styled.form`
  width: 300px;
  margin-top: 20px;
`;

export const FieldWrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;

  label, input {
    display: block;
    width: 100%;
  }

  label {
    padding: 10px 0;
  }

  input {
    padding: 10px;
    border-radius: 5px;
    border: solid 1px #ccc;
    outline: transparent;

    &:focus, &:hover {
      border: solid 1px #777;
      transition: .3s;
    }

    &.money {
      text-align: right;
    }
  }

  &.error {
    input {
      box-shadow: #FF2F00 0px 1px 3px 0px;
      border-color: #FF2F00;
    }
  }
`;

export const SubmitButton = styled.button`
  display: block;
  width: 100%;
  background-color: #AA612D;
  border: 0;
  padding: 10px;
  color: #fff;
  margin-top: 20px;
  font-size: 17px;
  font-weight: bold;
  outline: transparent;
  cursor: pointer;

  &:active {
    background-color: #B84D14;
  }
`;

export const ErrorMessage = styled.div`
  font-size: 12px;
  color: #FF2F00;
  margin-bottom: 20px;
`;

export const currencyConfig = {
  locale: "pt-BR",
  formats: {
    number: {
      BRL: {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      },
    },
  },
};
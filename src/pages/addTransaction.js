import React, { Component } from 'react';
import PageComponent from '../components/page';
import styled from 'styled-components';
import IntlCurrencyInput from "react-intl-currency-input"

const Form = styled.form`
  width: 300px;
  margin-top: 20px;
`;

const FieldWrapper = styled.div`
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
`;

const SubmitButton = styled.button`
  display: block;
  width: 100%;
  background-color: #FF6D1D;
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

const currencyConfig = {
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

export default class AddTransactionsPage extends Component {

  state = {
    form: {}
  };

  onSubmit (event) {
    event.preventDefault();
  }

  changeFieldValue (fieldName, fieldValue) {
    this.setState({
      form: {
        ...this.state.form,
        [fieldName]: fieldValue
      }
    })
  }

  render () {
    return (
      <PageComponent>
        <h2>Nova Transação</h2>
        <Form onSubmit={this.onSubmit.bind(this)}>
          <FieldWrapper>
            <label>Descrição</label>
            <input
              onChange={(evt) => this.changeFieldValue('description', evt.target.value)}
            />
          </FieldWrapper>

          <FieldWrapper>
            <label>Valor</label>
            <IntlCurrencyInput
              className="money"
              currency="BRL"
              config={currencyConfig}
              onChange={(evt, value) => this.changeFieldValue('value', value)}
            />
          </FieldWrapper>

          <SubmitButton type="submit">Adicionar</SubmitButton>
        </Form>
      </PageComponent>
    )
  }
}
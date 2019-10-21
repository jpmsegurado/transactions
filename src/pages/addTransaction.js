import React, { Component } from 'react';
import PageComponent from '../components/page';
import styled from 'styled-components';
import IntlCurrencyInput from "react-intl-currency-input"
import {
  Form,
  FieldWrapper,
  SubmitButton,
  ErrorMessage,
  currencyConfig
} from '../components/form-elements';

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

    if (fieldName === 'description') {
      this.setState({
        showDescriptionError: fieldValue.length === 0
      })
    }

    if (fieldName === 'value') {
      this.setState({
        showValueError: fieldValue === 0
      })
    }
  }

  render () {
    const { showDescriptionError, showValueError } = this.state;

    return (
      <PageComponent>
        <h2>Nova Transação</h2>
        <Form onSubmit={this.onSubmit.bind(this)}>
          <FieldWrapper className={showDescriptionError ? 'error' : ''}>
            <label>Descrição</label>
            <input
              onChange={(evt) => this.changeFieldValue('description', evt.target.value)}
            />
          </FieldWrapper>

          {
            showDescriptionError &&
            <ErrorMessage>Por favor preencha o campo descrição</ErrorMessage>
          }

          <FieldWrapper className={showValueError ? 'error' : ''}>
            <label>Valor</label>
            <IntlCurrencyInput
              className="money"
              currency="BRL"
              config={currencyConfig}
              onChange={(evt, value) => this.changeFieldValue('value', value)}
              onBlur={(evt, value) => this.changeFieldValue('value', value)}
            />
          </FieldWrapper>

          {
            showValueError &&
            <ErrorMessage>O valor não pode ser zero.</ErrorMessage>
          }

          <SubmitButton type="submit">Adicionar</SubmitButton>
        </Form>
      </PageComponent>
    )
  }
}
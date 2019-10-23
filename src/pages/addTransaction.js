import React, { Component } from 'react';
import PageComponent from '../components/page';
import { connect } from 'react-redux';
import IntlCurrencyInput from "react-intl-currency-input"
import {
  Form,
  FieldWrapper,
  SubmitButton,
  ErrorMessage,
  currencyConfig
} from '../components/form-elements';
import { withRouter } from 'react-router-dom';
import { ADD_TRANSACTION } from '../actions/transactionsActions';

class AddTransactionsPage extends Component {

  state = {
    form: {}
  };

  onSubmit (event) {
    event.preventDefault();
    const { description = '', value = 0 } = this.state.form;
    if (value === 0 || description.length === 0) {
      return this.setState({
        showDescriptionError: description.length === 0,
        showValueError: value === 0
      })
    }

    const transaction = { value, description };
    this.props.addTransaction(transaction);
    this.props.history.push('/');
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

const mapDispatchToProps = (dispatch) => ({
  addTransaction: (transaction) => {
    return dispatch(ADD_TRANSACTION(transaction))
  }
});

export default connect(null, mapDispatchToProps)(withRouter(AddTransactionsPage))
import React, { Component } from 'react';
import styled from 'styled-components';
import { formatCurrency } from '../common';

const Card = styled.div`
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
  border-radius: 2px;
  background-color: #fff;
  padding: 20px;

  h3 {
    margin: 0;
  }

  p {
    margin: 10px 0 0;
  }
`;

export class TransactionCard extends Component {
  render () {
    const { transaction } = this.props;
    const formattedValue = formatCurrency(transaction.value);
    return (
      <Card>
        <h3>{transaction.description}</h3>
        <p>{formattedValue}</p>
      </Card>
    );
  }
}
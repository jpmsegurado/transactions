import React, { Component } from 'react';
import { formatCurrency } from '../common';
import styled from 'styled-components';

const Footer = styled.div`
  padding: 20px;
  display: flex;
  position: absolute;
  width: 100%;
  bottom: 0;
  background-color: #ececec;
  justify-content: flex-end;
  font-size: 20px;

  strong {
    margin-left: 40px;
  }
`;

export default class TransactionsFooter extends Component {
  render () {
    return (
      <Footer>
        Total: <strong>{formatCurrency(this.props.total)}</strong>
      </Footer>
    )
  }
}
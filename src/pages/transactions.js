import React, { Component, Fragment } from 'react';
import { TransactionCard } from '../components/transaction-card';
import { connect } from 'react-redux';
import PageComponent from '../components/page';
import styled from 'styled-components';
import orderBy from 'lodash/fp/orderBy';
import TransactionsFooter from '../components/transactions-footer';

const ItemWrapper = styled.div`
  width: calc((100% - 40px) / 3);

  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;

  ${ItemWrapper} {
    margin-bottom: 20px;
    &:nth-child(3n), &:nth-child(3n - 1) {
      margin-left: 20px;
    }

    @media screen and (max-width: 720px) {
      &:nth-child(3n), &:nth-child(3n - 1) {
        margin-left: 0px;
      }
    }
  }
`;

const OverridePageComponent = styled(PageComponent)`
  height: calc(100% - 64px);
  position: absolute;
`;

class TransactionsPage extends Component {
  render () {
    return (
      <Fragment>
        <OverridePageComponent>
          <h2>Transações</h2>
          <ListWrapper>
            {this.props.transactions.map((transaction) => (
              <ItemWrapper key={transaction.datetime}>
                <TransactionCard
                  transaction={transaction}
                />
              </ItemWrapper>
            ))}
          </ListWrapper>
        </OverridePageComponent>
        <TransactionsFooter total={this.props.total} />
      </Fragment>
    )
  }
}

const mapStateToProps = (store) => {
  let transactions = [...store.transactions.transactions];
  transactions = orderBy(['datetime'], ['desc'])(transactions);
  return {
    transactions,
    total: store.transactions.total
  }
};

export default connect(mapStateToProps)(TransactionsPage);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ADD_TRANSACTION } from './actions/transactionsActions';
import MenuComponent from './components/menu';
import HeaderComponent from './components/header';
import styled from 'styled-components';

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
`;

const PagesWrapper = styled.div`
  width: calc(100% - 250px);
  height: calc(100% - 60px);
`;

const MenuWrapper = styled.div`
  width: 250px;
  height: calc(100% - 60px);
`;

class App extends Component {

  render () {
    return (
      <AppWrapper>
        <HeaderComponent />
        <MenuWrapper>
          <MenuComponent />
        </MenuWrapper>
        <PagesWrapper></PagesWrapper>
      </AppWrapper>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    total: store.transactions.total
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTransaction: (transaction) => dispatch(ADD_TRANSACTION(transaction))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

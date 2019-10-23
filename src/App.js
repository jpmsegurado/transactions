import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { SCREEN_SIZES } from './common';
import { connect } from 'react-redux';
import MenuComponent from './components/menu';
import styled from 'styled-components';
import TransactionsPage from './pages/transactions';
import AddTransactionsPage from './pages/add-transactions';

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
`;

const PagesWrapper = styled.div`
  width: calc(100% - 300px);
  height: 100%;
  overflow: auto;
  position: relative;

  @media (max-width: ${SCREEN_SIZES.SM_MAX}) {
    width: 100%;
  }
`;

const MenuWrapper = styled.div`
  width: 300px;
  height: 100%;

  @media (max-width: ${SCREEN_SIZES.SM_MAX}) {
    position: absolute;
    left: -300px;
    top: 0;
    bottom: 0;
    z-index: 3;

    &.show {
      transform: translateX(300px);
      transition: .3s;
    }

    &.hide {
      transform: translateX(0);
      transition: .3s;
    }
  }
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Router>
          <MenuWrapper className={this.props.showMenu ? 'show' : 'hide'}>
            <MenuComponent />
          </MenuWrapper>
          <PagesWrapper>
            <Switch>
              <Route path="/" exact component={TransactionsPage}/>
              <Route path="/add-transaction" component={AddTransactionsPage}/>
            </Switch>
          </PagesWrapper>
        </Router>
      </AppWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  showMenu: state.menu.showMenu
})

export default connect(mapStateToProps)(App);

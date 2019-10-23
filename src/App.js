import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MenuComponent from './components/menu';
import styled from 'styled-components';
import TransactionsPage from './pages/transactions';
import AddTransactionsPage from './pages/addTransaction';

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
`;

const MenuWrapper = styled.div`
  width: 300px;
  height: 100%;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Router>
          <MenuWrapper>
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



export default App;

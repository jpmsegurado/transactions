import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { ADD_TRANSACTION } from './actions/transactionsActions';

class App extends Component {

  render () {
    return (
      <div className="App">
      </div>
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

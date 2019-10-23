import { ACTIONS } from '../actions/transactionsActions';
import sumBy from 'lodash/fp/sumBy';

const list = JSON.parse(localStorage.getItem('transactions') || '[]');

const initialState = {
  transactions: list,
  total: sumBy(t => t.value)(list)
};

export const transactionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TRANSACTION:
      return addTransaction(action.payload, state)
    default:
      return state;
  }
};

function addTransaction (transaction, state) {
  const transactions = [...state.transactions];
  transactions.push({
    ...transaction,
    datetime: Date.now()
  });
  const total = sumBy(t => t.value)(transactions);
  localStorage.setItem('transactions', JSON.stringify(transactions));
  return {
    ...state,
    transactions,
    total
  }
}
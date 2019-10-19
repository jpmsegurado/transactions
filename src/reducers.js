import { transactionsReducer } from './reducers/transactionsReducer';
import { combineReducers } from 'redux';
export const Reducers = combineReducers({
  transactions: transactionsReducer
});
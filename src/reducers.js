import { transactionsReducer } from './reducers/transactions-reducer';
import { menuReducer } from './reducers/menu-reducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  transactions: transactionsReducer,
  menu: menuReducer
});
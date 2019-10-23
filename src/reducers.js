import { transactionsReducer } from './reducers/transactionsReducer';
import { combineReducers } from 'redux';
import { menuReducer } from './reducers/menuReducer';

export const Reducers = combineReducers({
  transactions: transactionsReducer,
  menu: menuReducer
});
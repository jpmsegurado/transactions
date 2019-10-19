import { transactionsReducer } from './reducers/transactionsReducer';
import { menuReducer } from './reducers/menuReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  transactions: transactionsReducer,
  menu: menuReducer
});
import { transactionsReducer } from '../../reducers/transactions-reducer';
import { ACTIONS } from '../../actions/transactions-actions';

describe('transactionsReducer', () => {
  it('add transaction and check number of transactions and its sum', () => {
    const transactions = [{
      datetime: Date.now(),
      value: 240,
      description: 'Óculos novo'
    }];
    const total = 0;
    const newState = transactionsReducer({ transactions, total   }, {
      type: ACTIONS.ADD_TRANSACTION,
      payload: {
        datetime: Date.now(),
        value: 500,
        description: 'Compras do mês'
      }
    });
    expect(newState.transactions.length).toBe(2);
    expect(newState.total).toBe(740);
  });
});
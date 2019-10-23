import { ACTIONS, ADD_TRANSACTION } from '../../actions/transactions-actions';

describe('menu-actions', () => {
  it('verify if return the same type and payload', () => {
    const transaction = {
      datime: Date.now(),
      value: 123,
      description: 'A nice shirt'
    }
    expect(ADD_TRANSACTION(transaction)).toEqual({
      type: ACTIONS.ADD_TRANSACTION,
      payload: transaction
    });
  })
})
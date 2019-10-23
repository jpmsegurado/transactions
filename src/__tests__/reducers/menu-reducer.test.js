import { menuReducer } from '../../reducers/menu-reducer';
import { ACTIONS } from '../../actions/menu-actions';

describe('menuReducer', () => {
  it('add transaction and check number of transactions and its sum', () => {
    const showState = menuReducer({ showMenu: false }, {
      type: ACTIONS.TOGGLE_MENU,
      payload: true
    });
    const hideState = menuReducer({ showMenu: false }, {
      type: ACTIONS.TOGGLE_MENU,
      payload: false
    });

    expect(showState.showMenu).toBe(true);
    expect(hideState.showMenu).toBe(false);
  });
});
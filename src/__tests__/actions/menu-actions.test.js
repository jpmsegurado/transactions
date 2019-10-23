import { ACTIONS, TOGGLE_MENU } from '../../actions/menu-actions';

describe('menu-actions', () => {
  it('verify if return the same type and payload', () => {
    expect(TOGGLE_MENU(true)).toEqual({
      type: ACTIONS.TOGGLE_MENU,
      payload: true
    });
  })
})
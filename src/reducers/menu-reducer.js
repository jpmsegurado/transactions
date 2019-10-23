import { ACTIONS } from '../actions/menu-actions';

const initialState = {
  showMenu: false
};

export const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_MENU:
      return toggleMenu(action.payload, state)
    default:
      return state;
  }
};

function toggleMenu (showMenu, state) {
  return {
    ...state,
    showMenu
  }
}
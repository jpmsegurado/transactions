import { ACTIONS } from '../actions/menuActions';


const initialState = {
  activeItem: '/'
};

export const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.CHANGE_ACTIVE:
      return changeActive(action.payload, state)
    default:
      return state;
  }
};

function changeActive (newActive, state) {
  return {
    ...state,
    activeItem: newActive
  }
}
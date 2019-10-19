export const ACTIONS = {
  ADD_TRANSACTION: 'ADD_TRANSACTION'
};

export const ADD_TRANSACTION = value => ({
  type: ACTIONS.ADD_TRANSACTION,
  payload: value
});
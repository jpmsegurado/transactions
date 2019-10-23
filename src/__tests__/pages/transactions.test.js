import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import TransactionsPage from '../../pages/transactions';
import TransactionCard from '../../components/transaction-card';
import sumBy from 'lodash/fp/sumBy';

const mockStore = configureMockStore();

function setup(transactions = [], total = 0) {

  const store = mockStore({
    menu: {
      showMenu: false
    },
    transactions: {
      transactions,
      total
    }
  });

  const props = {
    addTransaction: () => {}
  };

  const wrapper = mount(
    <MemoryRouter>
      <Provider store={store}>
        <TransactionsPage {...props}  />
      </Provider>
    </MemoryRouter>
  );

  return {
    props,
    wrapper
  };
}

describe('TransactionsPage', () => {
  it('should render no cards, only empty state message', () => {
    const { wrapper } = setup();
    expect(wrapper.find(TransactionCard).length).toBe(0);
    expect(wrapper.find('#empty-state-message').text()).toBe('Você ainda não possui transações');
  });

  it('should render two transactions cards', () => {
    const transactions = [];
    transactions.push({
      datetime: 1571863047150,
      description: 'T1',
      value: 123.12
    });

    transactions.push({
      datetime: 1571863047155,
      description: 'T2',
      value: 235.40
    });

    const total = sumBy(t => t.value)(transactions);

    const { wrapper } = setup(transactions, total);

    expect(wrapper.find(TransactionCard).length).toBe(2);
  });
});
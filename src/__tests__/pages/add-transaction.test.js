import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import AddTransactionPage from '../../pages/add-transactions';
import { SubmitButton, ErrorMessage } from '../../components/form-elements';

const mockStore = configureMockStore()
const store = mockStore({
  menu: {
    showMenu: false
  }
});

function setup() {
  const props = {
    addTransaction: () => {}
  };

  const wrapper = mount(
    <MemoryRouter>
      <Provider store={store}>
        <AddTransactionPage {...props}  />
      </Provider>
    </MemoryRouter>
  );

  return {
    props,
    wrapper
  }
}

describe('AddTransactionPage', () => {
  it('should show error validation messages', () => {
    const { wrapper } = setup();
    wrapper.find(SubmitButton).simulate('submit');
    expect(wrapper.find(ErrorMessage).length).toBe(2);
  });

  it('should show description validation error message', () => {
    const { wrapper } = setup();
    wrapper.find('input[name="value"]').simulate('change', {target: {value: 'R$ 5,50'}});
    wrapper.find(SubmitButton).simulate('submit');
    expect(wrapper.find(ErrorMessage).text()).toBe('Por favor preencha o campo descrição');
  });

  it('should show value validation error message', () => {
    const { wrapper } = setup();
    wrapper.find('input[name="description"]').simulate('change', {target: {value: 'Description'}});
    wrapper.find(SubmitButton).simulate('submit');
    expect(wrapper.find(ErrorMessage).text()).toBe('O valor não pode ser zero.');
  });
});
import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { Store } from '../store';
import App from '../App';

describe('App', () => {
  it('renders without crashing', () => {
    shallow(
      <Provider store={Store}>
        <App />
      </Provider>
    );
  });
});
import React, { Component } from 'react';
import styled from 'styled-components';

const Header = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #149BE3;
  color: #fff;

  h1 {
    text-align: center;
    font-size: 25px;
    justify-self: center;
    margin: 0 auto;
  }
`;

class HeaderComponent extends Component {
  render () {
    return (
      <Header>
        <h1>Transactions App</h1>
      </Header>
    );
  }
}

export default HeaderComponent;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Menu = styled.ul`
  display: block;
  padding: 0;
  margin: 0;
  background-color: #efefef;
  width: 100%;
  height: 100%;

  > a {
    text-decoration: none;
    color: #000;
  }
`;

const MenuItem = styled.li`
  width: 100%;
  display: block;
  padding: 20px;

  &:hover, &.active {
    background-color: #149BE333;
    cursor: pointer;
    transition: .3s;
  }
`



class MenuComponent extends Component {
  render () {
    return (
      <Menu>
        <Link to="/">
          <MenuItem>Todas as transações</MenuItem>
        </Link>
        <Link to="/add-transaction">
          <MenuItem>Nova transação</MenuItem>
        </Link>
      </Menu>
    );
  }
}

export default MenuComponent;
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
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
const menuItems = [
  {
    path: '/',
    label: 'Todas as transações'
  },
  {
    path: '/add-transaction',
    label: 'Nova transação'
  }
]


class MenuComponent extends Component {
  render() {
    return (
      <Menu>
        {menuItems.map((item) => (
          <Link to={item.path} key={item.path}>
            <MenuItem 
              className={this.props.location.pathname === item.path ? 'active': ''}>
              {item.label}
            </MenuItem>
          </Link>))}
      </Menu>
    );
  }
}

export default withRouter(MenuComponent);
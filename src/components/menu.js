import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Menu = styled.ul`
  display: block;
  padding: 0;
  margin: 0;
  background-color: rgb(27, 36, 48);
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
  color: #fff;
  user-select: none;

  &:hover, &.active {
    background-color: #FFFFFF44;
    cursor: pointer;
    transition: .3s;
  }
`
const Header = styled.h1`
  background-color: rgb(35, 47, 62);
  height: 60px;
  font-size: 20px;
  margin: 0;
  line-height: 60px;
  color: #fff;
  text-align: center;
`;

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
      <Fragment>
        <Header>Transactions App</Header>
        <Menu>
          {menuItems.map((item) => (
            <Link to={item.path} key={item.path}>
              <MenuItem
                className={this.props.location.pathname === item.path ? 'active': ''}>
                {item.label}
              </MenuItem>
            </Link>))}
        </Menu>
      </Fragment>
    );
  }
}

export default withRouter(MenuComponent);
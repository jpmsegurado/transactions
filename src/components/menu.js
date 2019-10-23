import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Close } from 'styled-icons/evil/Close';
import { SCREEN_SIZES } from '../common';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { TOGGLE_MENU } from '../actions/menu-actions';

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

  @media (max-width: ${SCREEN_SIZES.SM_MAX}) {
    text-align: left;
    display: flex;
    align-items: center;
    padding: 0 10px;
  }
`;

const Icon = styled(Close)`
  color: #fff;
  width: 30px;
  height: 30px;
  margin-left: auto;
  cursor: pointer;

  @media (min-width: ${SCREEN_SIZES.DESKTOP_MIN}) {
    display: none;
  }
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
        <Header>
          Transactions App
          <Icon onClick={() => this.props.toggleMenu(false)}/>
        </Header>
        <Menu>
          {menuItems.map((item) => (
            <Link to={item.path} key={item.path} onClick={() => this.props.toggleMenu(false)}>
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

const mapDispatchToProps = (dispatch) => ({
  toggleMenu: (value) => dispatch(TOGGLE_MENU(value))
})

export default connect(null, mapDispatchToProps)(withRouter(MenuComponent));
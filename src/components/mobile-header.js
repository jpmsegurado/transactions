import React, { Component } from 'react';
import { SCREEN_SIZES } from '../common';
import { connect } from 'react-redux';
import { TOGGLE_MENU } from '../actions/menuActions';
import { Menu } from 'styled-icons/boxicons-regular/Menu';
import styled from 'styled-components';

const Header = styled.div`
  width: 100%;
  height: 60px;
  font-size: 20px;
  background-color: rgb(35,47,62);
  line-height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;

  h2 {
    color: #fff;
    margin: 0 0 0 20px;
    text-align: center;
    font-size: 20px;
  }

  @media (min-width: ${SCREEN_SIZES.DESKTOP_MIN}) {
    display: none;
  }
`;

const Icon = styled(Menu)`
  margin: 5px 0 0 10px;
  height: 50px;
  left: 0;
  color: #fff;
  cursor: pointer;
`;

class MobileHeader extends Component {

  state = {};

  render () {
    return (
      <Header >
        <Icon onClick={() => this.props.toggleMenu(!this.props.showMenu)}/>
        <h2>{this.props.title}</h2>
      </Header>
    )
  }
}

const mapStateToProps = (state) => ({
  showMenu: state.menu.showMenu
})

const mapDispatchToProps = (dispatch) => ({
  toggleMenu: (value) => dispatch(TOGGLE_MENU(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(MobileHeader);
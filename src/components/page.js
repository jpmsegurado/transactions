import React, { Component } from 'react';
import styled from 'styled-components';
import { SCREEN_SIZES } from '../common';
import MobileHeader from './mobile-header';

const Page = styled.div`
  padding: 30px;
  overflow-y: auto;

  @media (max-width: ${SCREEN_SIZES.SM_MAX}) {
    margin-top: 60px;
    padding-top: 0;
  }

  > h2 {
    margin: 0;
    width: 100%;

    @media (max-width: ${SCREEN_SIZES.SM_MAX}) {
      display: none;
    }
  }
`;

export default class PageComponent extends Component {
  render () {
    return (
      <Page className={this.props.className}>
        <MobileHeader title={this.props.title}/>
        <h2>{this.props.title}</h2>
        {this.props.children}
      </Page>
    );
  }
}
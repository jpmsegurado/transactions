import React, { Component } from 'react';
import styled from 'styled-components';

const Page = styled.div`
  padding: 30px;
  overflow-y: auto;

  h2 {
    margin: 0;
    width: 100%;
  }
`;

export default class PageComponent extends Component {
  render () {
    return (
      <Page className={this.props.className}>
        {this.props.children}
      </Page>
    );
  }
}
import React, { Component } from 'react';
import styled from 'styled-components';

const Page = styled.div`
  padding: 30px;

  h2 {
    margin: 0;
  }
`;

export default class PageComponent extends Component {
  render () {
    return (
      <Page>
        {this.props.children}
      </Page>
    );
  }
}
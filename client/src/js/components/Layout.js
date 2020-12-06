import React from 'react';

import Multibox from './Multibox';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let state = this.props.state;
    return <Multibox state={ state }/>
  }
};

import React, { Component } from 'react';
import { Input, Form } from 'semantic-ui-react'

export default class Finished extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
  }

  render() {
    return (
      <div>Hey {this.state.firstName}, welcome back! Ready to pick up where you left off?</div>
    );
  }
}

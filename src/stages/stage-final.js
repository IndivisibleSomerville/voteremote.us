import React, { Component } from 'react';
import { Input, Form } from 'semantic-ui-react'

export default class Finished extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
  }

  render() {
    return (
      <pre>{JSON.stringify(this.state)}</pre>
    );
  }
}

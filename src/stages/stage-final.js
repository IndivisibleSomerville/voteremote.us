import React, { Component } from 'react';
import { Input, Form } from 'semantic-ui-react'

export default class Finished extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.user;
  }

  render() {
    return (
      <div><h1>All set!!</h1></div>
    );
  }
}

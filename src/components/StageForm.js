import React, { Component } from 'react';
import { Input, Form } from 'semantic-ui-react'

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;

    this.setState({
      [target.name]: target.type === 'checkbox'
        ? target.checked
        : target.value
    });
  }

  handleSubmit(event) {
    this.props.stageComplete(this.state);
    event.preventDefault();
  }

  render() {

    return (
      <Form onSubmit={this.handleSubmit}>
        {Object.entries(this.props.form).map(([key, value]) => {
          return (<Form.Field key={key}>
            <label>{value.label}</label>
            <Input
              name={key}
              placeholder={value.placeholder}
              type="text"
              value={this.state[key] || ""}
              onChange={this.handleChange} />
          </Form.Field>);
        })}

        <Form.Button content='Onward!' />
      </Form >
    );
  }
}
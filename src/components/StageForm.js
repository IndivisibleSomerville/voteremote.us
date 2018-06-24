import React, { Component } from 'react';
import { Input, Form } from 'semantic-ui-react';

import Joi from 'joi';

class StageForm extends Component {
  constructor(props) {
    super(props);

    // Setup this.state
    this.state = this.setupState(
      props.getStore(),
      Object.keys(props.form)
    );

    this.onChange = this.onChange.bind(this);
    this.isValidated = this.isValidated.bind(this);
  }

  setupState(store, keys) {
    let newState = {};

    // Create "error" keys for each form value, and set it to null
    keys.forEach((key) => {
      let errorName = key + '_error';

      newState[key] = store[key];
      newState[errorName] = null;
    });

    return newState;
  }

  isValidated() {
    let isDataValid = true;
    let newState = {};
    let newStore = {};

    // Iterate over props.form fields and update field's error status
    Object.keys(this.props.form).forEach((key) => {
      let schema = this.props.form[key].validation;
      let value = this.state[key];
      let validation = Joi.validate(value, schema);
      let errorName = key + '_error';

      if (validation.error !== null) {
        isDataValid = false;
        // set error message for given field property
        newState[errorName] = validation.error.details[0].message;
      } else {
        // set null to error message value for given field property
        newState[errorName] = null;
        newStore[key] = value;
      }
    });
    // Update state and local store
    this.setState(newState);
    if (isDataValid) {
      this.props.updateStore(newStore);
    }

    return isDataValid;
  }

  onChange(e) {
    let newState = {};

    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  render() {
    return (
      <Form>
        {Object.entries(this.props.form).map(([key, value]) => {
          let errorName = key + "_error";
          let errorCn = this.state[errorName] == null ? "" : "ui red message";

          return (<Form.Field key={key}>
            <label>{value.label}</label>
            <Input
              ref={key}
              name={key}
              placeholder={value.placeholder}
              type="text"
              value={this.state[key]}
              onChange={this.onChange}
              onBlur={this.isValidated}
            />
          <div className={errorCn}><span>{this.state[errorName]}</span></div>
          </Form.Field>);
        })}
      </Form >
    );
  }
}

export default StageForm;

import React, { Component } from 'react';

import Joi from 'joi-browser';

class YourVote extends Component {
  constructor(props) {
    super(props);

    // Setup this.state
    this.state = this.setupState(
      props.getStore(),
      Object.keys(props.form)
    );

    this.props.changeSubStep('Your Ballot', 'verify');

    this.onChange = this.onChange.bind(this);
    this.isValidated = this.isValidated.bind(this);
  }

  setupState(store, keys) {
    let newState = {
      errorMsgs: {}
    };

    keys.forEach((key) => {
      newState[key] = store[key] === undefined ? "" : store[key];
      newState.errorMsgs[key] = null;
    });

    return newState;
  }

  componentDidUpdate(prevProps) {
    // If step has changed
    if (prevProps.form !== this.props.form) {
      this.onStepChange();
    }
  }

  onStepChange() {
    let newState = this.setupState(
      this.props.getStore(),
      Object.keys(this.props.form)
    );

    // update state and store
    this.setState(newState);
    this.props.updateStore(newState);
  }

  isValidated() {
    let isDataValid = true;
    let newState = {errorMsgs: {}};
    let newStore = {};

    // Iterate over props.form fields and update field's error status
    Object.keys(this.props.form).forEach((key) => {
      let schema = this.props.form[key].validation;
      let value = this.state[key];
      let validation = Joi.validate(value, schema);

      // Reset error msg to null
      newState.errorMsgs[key] = null;

      if (validation.error !== null) {
        // set error message for given field property
        isDataValid = false;
        newState.errorMsgs[key] = this.props.form[key].errorMsg
          ? this.props.form[key].errorMsg
          : validation.error.details[0].message;
      }
      newStore[key] = value;
      newState[key] = value;
    });

    // If Data is Valid update Local Store
    if (isDataValid) {
      this.props.updateStore(newStore);
    }
    // Update State
    this.setState(newState);

    return isDataValid;
  }

  onChange(e) {
    let newState = {};

    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  render() {
    return (
      <div>
        Your VOTE!
      </div>
    )
  }
}

export default YourVote;
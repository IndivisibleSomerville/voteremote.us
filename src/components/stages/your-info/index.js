import React, { Component } from 'react';
import WelcomeForm from './stage-forms/substep1-welcome';
import AddressForm from './stage-forms/substep2-address';

import Joi from 'joi-browser';

class YourInfo extends Component {
  constructor(props) {
    super(props);
    console.log('props', this.props)
    // Setup this.state
    this.state = this.setupState(
      props.getStore(),
      Object.keys(props.form)
    );

    this.onChange = this.onChange.bind(this);
    this.onStepChange = this.onStepChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    console.log('onStepChange', this.state, newState);
    // update state and store
    // this.isValidated();
    if (this.isValidated()) {
      this.props.updateStore(this.state, this.setState(newState));
    }
  }

  handleSubmit(e, obj) {
    e.preventDefault();
    console.log('e.currentTarget', e.currentTarget);
    console.log('e.target', e.target);
    console.log('obj', obj);
    let path = '/';
    switch (e.currentTarget.name) {
      case 'Welcome Form':
        path = '/your-info/address';
        break;
      case 'Address Form':
        path = '/your-vote/choose-location';
        break;
    }
  this.onStepChange();
  this.props.history.push(path);
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

    // If Data is Valid update Store
    if (isDataValid) {
      this.props.updateStore(newStore);
    }
    // Update State
    this.setState(newState);

    return isDataValid;
  }

  onChange(e) {
    console.log('onChange', e.target.name, e.target.value)
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  render() {
    if (this.props.formName === "Welcome Form") {
      return (
        <WelcomeForm 
          state={this.state}
          onChange={this.onChange}
          handleSubmit={this.handleSubmit}
        />
      )
    }
    else if (this.props.formName === "Address Form") {
      return (
        <AddressForm 
          state={this.state}
          onChange={this.onChange}
          handleSubmit={this.handleSubmit}
        />
      )
    }
  }
}

export default YourInfo;

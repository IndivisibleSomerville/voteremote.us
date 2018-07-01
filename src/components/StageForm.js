import React, { Component } from 'react';
import { Input, Form } from 'semantic-ui-react';

import Joi from 'joi-browser';
import ReCAPTCHA from "react-google-recaptcha";

class StageForm extends Component {
  constructor(props) {
    super(props);

    // Setup this.state
    this.state = this.setupState(
      props.getStore(),
      Object.keys(props.form)
    );
    this.onChange = this.onChange.bind(this);
    this.onCaptchaChange = this.onCaptchaChange.bind(this);
    this.isValidated = this.isValidated.bind(this);
  }

  setupState(store, keys) {
    let newState = {};

    // Create "error" keys for each form value
    keys.forEach((key) => {
      newState[key] = store[key] === undefined ? "" : store[key];
    });

    return newState;
  }

  componentDidUpdate(prevProps) {
    // If step has changeds
    if (prevProps.form !== this.props.form) {
      this.onStepChange();
    }
  }

  onStepChange() {
    let newState = this.setupState(
      this.props.getStore(),
      Object.keys(this.props.form)
    );

    this.setState(newState);
    this.props.updateStore(newState);
  }

  onCaptchaChange(captcha) {
    this.setState({captcha});
    console.log("Captcha value:", captcha);
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
      let errorName = this.makeErrorKey(key);

      if (validation.error !== null) {
        // set error message for given field property
        isDataValid = false;
        newState[errorName] = validation.error.details[0].message;
      }
      newStore[key] = value;
    });

    const isCaptchaValid = !this.props.showCaptcha || this.state.captcha !== undefined;
    if (this.props.showCaptcha) {
      if (!isCaptchaValid) {
        newState[this.makeErrorKey('captcha')] = "captcha is required"
      }
      newStore['captcha']  = this.state.captcha;
    }

    // Update state and local store
    const isValid = isDataValid && isCaptchaValid;
    if (isValid) {
      this.props.updateStore(newStore);
    }
    this.setState(newState);

    return isValid;
  }

  makeErrorKey(key) {
    return key + "_error";
  }

  onChange(e) {
    let newState = {};

    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }
  makeErrorDiv(key) {
    const errorName = this.makeErrorKey(key);
    const errorCn = this.state[errorName] == null ? "" : "ui red message";
    return <div className={errorCn}><span>{this.state[errorName]}</span></div>;
  }
  render() {
    const captcha = (this.props.showCaptcha?<div>
      <ReCAPTCHA
        ref="recaptcha"
        sitekey="6LeSqWEUAAAAAIE0iuav_dtrNtBQsUJIxB3Ktq0P"
        onChange={this.onCaptchaChange}
      />
      {this.makeErrorDiv('captcha')}
    </div>:"");
    return (
      <Form>
        {Object.entries(this.props.form).map(([key, value]) => {
          return (<Form.Field key={key}>
            <label>{value.label}</label>
            <Input
              ref={key}
              name={key}
              placeholder={value.placeholder}
              type="text"
              value={this.state[key]}
              onChange={this.onChange}
            />
            {this.makeErrorDiv(key)}
          </Form.Field>);
        })}
        {captcha}
      </Form >
    );
  }
}

export default StageForm;

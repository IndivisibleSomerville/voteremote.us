
import React, { Component } from 'react';
import { Input, Form } from 'semantic-ui-react'

class StageForm extends Component {
  constructor(props) {
    super(props);

    this.validatorTypes = this.makeValidationObject(this.props.form, (key) => this.props.form[key].validation);
    console.log(this.validatorTypes)

    this.getValidatorData = this.getValidatorData.bind(this);
    this.renderHelpText = this.renderHelpText.bind(this);
    this.isValidated = this.isValidated.bind(this);
  }

  isValidated() {
    return new Promise((resolve, reject) => {
      this.props.validate((error) => {
        if (error) {
          reject();
          return;
        }
        resolve();
      });
    });
  }

  getValidatorData() {
    return this.makeValidationObject(this.props.form, (key) => this.props.getStore()[key])
  }

  makeValidationObject(key, valueCb) {
    return Object.entries(this.props.form)
      .map(([key, value]) => {
        return [key, valueCb(key)];
      })
      .filter(([key, value]) => value !== null && value !== undefined)
      .reduce((result, [key, value]) => {
        result[key] = value;
        return result
      }, {});
  }

  handleChange(event) {
    const target = event.target;

    this.props.updateStore({
      [target.name]: target.type === 'checkbox'
        ? target.checked
        : target.value
    });
  }

  renderHelpText(message, id) {
    return (<div className="val-err-tooltip" key={id}><span>{message}</span></div>);
  }

  render() {
    return (
      <Form>
        {Object.entries(this.props.form).map(([key, value]) => {
          return (<Form.Field key={key}>
            <label>{value.label}</label>
            <Input
              name={key}
              placeholder={value.placeholder}
              type="text"
              value={this.props.getStore()[key] || ""}
              onChange={this.handleChange.bind(this)} />
          </Form.Field>);
        })}
      </Form >
    );
  }
}

export default StageForm; //validation(strategy)(StageForm);

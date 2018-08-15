import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class QuestionRegistered extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: null
    };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    console.log('e.currentTarget.value', e.currentTarget.value);
    console.log('this.state.sel', this.state.selectedOption);
    let path = '/';

    switch (this.state.selectedOption) {
      case 'yesAbsentee':
        path = '/your-ballot/absentee-ballot';
        break;
      case 'yesInPerson':
        path = '/finished';
        break;
      case 'no':
        path = '/your-ballot/register';
        break;
      case 'not sure':
        path = '/your-ballot/verify';
        break;
    }
    this.props.history.push(path);
  }

  onChange(e) {
    let newState = {};
    let value = e.target.value;

    newState.selectedOption = value;
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <div className="form_header_progress_bar">
          <img src="./images/form-header-your-vote.png" alt="Your Vote" />
        </div>
        <div className="form_header_box">
          <h1>Your Vote</h1>
        </div>
        <div>
          <h2 className="questionRegistered_header">Are you registered to vote at that address?</h2>
        </div>
        <Form onSubmit={this.handleSubmit} className="questionRegistered">
          <div className="radio">
            <label>
              <input type="radio" value="yesAbsentee" checked={this.state.selectedOption === "yesAbsentee"} onChange={this.onChange} />
              <span className="questionRegistered_option"> Yes! Help me request an absentee ballot</span>
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="yesInPerson" checked={this.state.selectedOption === "yesInPerson"} onChange={this.onChange} />
              <span className="questionRegistered_option"> Yes, and I'll be voting in person</span>
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="no" checked={this.state.selectedOption === "no"} onChange={this.onChange} />
              <span className="questionRegistered_option"> No, help me register to vote</span>
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="not sure" checked={this.state.selectedOption === "not sure"} onChange={this.onChange} />
              <span className="questionRegistered_option"> I don't know, help me check my registration</span>
            </label>
          </div>
          <Button
            style={{
                color: "white", 
                display: "inline-block", 
                width: "100%", 
                height: "100%", 
                textAlign: "center", 
                backgroundColor: "#FB3B3E",
                fontSize: "22px"
            }}
            content="Next"  
          />
        </Form>
      </div>
    )
  }
}

export default QuestionRegistered;
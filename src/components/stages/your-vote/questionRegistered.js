import React, { Component } from 'react';

class QuestionRegistered extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: null
    };

    this.onChange = this.onChange.bind(this);
  }

  selectIframe(value) {
    switch (value) {
      case 'yes':
        this.props.changeSubStep('Your Ballot', 'absentee');
        break;
      case 'no':
        this.props.changeSubStep('Your Ballot', 'register');
        break;
      case 'not sure':
        this.props.changeSubStep('Your Ballot', 'verify');
        break;
    }
  }

  onChange(e) {
    let newState = {};
    let value = e.target.value;

    newState.selectedOption = value;
    this.selectIframe(value);
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
        <form className="questionRegistered">
          <div className="radio">
            <label>
              <input type="radio" value="yes" checked={this.state.selectedOption === "yes"} onChange={this.onChange} />
              <span className="questionRegistered_option"> Yes, help me request an absentee ballot</span>
            </label>
          </div>
          <p>Add: "Yes, and I'll be voting in person"</p>
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
        </form>
      </div>
    )
  }
}

export default QuestionRegistered;
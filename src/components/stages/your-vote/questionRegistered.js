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
      <div className="yv-registered-question">
        <div className="yv-registered-question-title">
          <h2>Are you registered to vote?</h2>
        </div>
        <form>
          <div className="radio">
            <label>
              <input type="radio" value="yes" checked={this.state.selectedOption === "yes"} onChange={this.onChange} />
              <span> Yes, let's sign up for an absentee ballot</span>
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="no" checked={this.state.selectedOption === "no"} onChange={this.onChange} />
              <span> No, help me sign up</span>
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="not sure" checked={this.state.selectedOption === "not sure"} onChange={this.onChange} />
              <span> I don't know, help me check.</span>
            </label>
          </div>
        </form>
      </div>
    )
  }
}

export default QuestionRegistered;
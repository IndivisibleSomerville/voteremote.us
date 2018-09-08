import React from 'react';
import '../../styles/form-inputs.css';

class AreYouRegistered extends React.Component {
  state = {
      selectedOption: null
  }

  handleSubmit = (e) => {
    let nextStep = '';
    switch (this.state.selectedOption) {
      case 'yesAbsentee':
        nextStep = 'PrefillAbsenteeRequest';
        break;
      case 'yesInPerson':
        nextStep = 'Finished';
        break;
      case 'no':
        nextStep = 'PrefillReg';
        break;
      case 'not sure':
        nextStep = 'LookUpReg';
        break;
      default:
        break;
    }
    this.props.handleStepChange(nextStep);
  }

  handleChange = (e) => {
    const newState = {};
    const value = e.target.value;
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
        <form onSubmit={this.handleSubmit} className="questionRegistered">
          <div className="radioButton">
            <label>
              <input type="radio" value="yesAbsentee" checked={this.state.selectedOption === "yesAbsentee"} onChange={this.handleChange} />
              <span className="questionRegistered_option"> Yes, and I need to request an absentee ballot</span>
            </label>
          </div>
          <div className="radioButton">
            <label>
              <input type="radio" value="yesInPerson" checked={this.state.selectedOption === "yesInPerson"} onChange={this.handleChange} />
              <span className="questionRegistered_option"> Yes, and I'll be voting in person</span>
            </label>
          </div>
          <div className="radioButton">
            <label>
              <input type="radio" value="no" checked={this.state.selectedOption === "no"} onChange={this.handleChange} />
              <span className="questionRegistered_option"> No, help me register to vote</span>
            </label>
          </div>
          <div className="radioButton">
            <label>
              <input type="radio" value="not sure" checked={this.state.selectedOption === "not sure"} onChange={this.handleChange} />
              <span className="questionRegistered_option"> I don't know, help me check my registration</span>
            </label>
          </div>
          <button className="button form_button_solid_background form_button">Next</button>
        </form>
      </div>
    )
  }
}

export default AreYouRegistered;
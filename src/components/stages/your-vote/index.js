import React, { Component } from 'react';

import './style/your-vote.css';

import SelectDistrict from './selectDistrict';
import QuestionRegistered from './questionRegistered';

class YourVote extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    let subStep = this.props.formName === 'selectDistrict'
      ? <SelectDistrict {...this.props} />
      : <QuestionRegistered {...this.props} />;

    return (
      <div className="your-vote-container">
        {subStep}
      </div>
    )
  }
}

export default YourVote;
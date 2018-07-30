import React, { Component } from 'react';

// mock api call data REMOVE for production!!
// add api call
const data = {
  school: {
    districtName: 'Georgia 12th District',
    considered: 'Considered a "solid republican" district',
    electionResults: '2016 Election Results...' 
  },
  home: {
    districtName: 'Massachusetts 3rd District',
    considered: 'Considered a "swing" district',
    electionResults: '2016 Election Results...' 
  }
};

class SelectDistrict extends Component {
  constructor(props) {
    super(props);
    this.state = this.setupState(data);

    // Hide navigation
    this.props.updateStore({showNavigation: false});

    this.onClick = this.onClick.bind(this);
  }

  setupState(data) {
    return data;
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

  onClick(e) {
    let newState = {};
    let value = e.target.value;

    this.props.updateStore({
      districtSelector: e.target.value,
      showNavigation: true
    });
    this.props.jumpToStep(this.props.getStore().currentStep + 1);
  }

  render() {
    return (
      <div className="yv-state-question">
        <div className="yv-state-question-title">
          <h2>You are eligible to vote in these districts (choose one)</h2>
        </div>
        <div className="yv-state-question-school">
          <h2>{this.state.school.districtName}</h2><span>{this.state.school.considered}</span>
          <span>{this.state.electionResults}</span>
          <button value="school" onClick={this.onClick}>
            VOTE IN GEORGIA
          </button>
        </div>
        <div className="yv-state-question-home">
          <h2>{this.state.home.districtName}</h2><span>{this.state.home.considered}</span>
          <span>{this.state.electionResults}</span>
          <button value="home" onClick={this.onClick}>
            VOTE IN MASSACHUSETTS
          </button>
        </div>
      </div>
    )
  }
}

export default SelectDistrict;
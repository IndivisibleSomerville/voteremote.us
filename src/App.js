import React, { Component } from 'react';
import './VoteOrgForm';
import store from 'store';
const Appcues = window.Appcues;

const stages = [
  require('./stages/stage1-welcome').default,
  require('./stages/stage-final').default
]

const resumeStage = require('./stages/stage-resume').default

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: null,
      user: store.get('user') || {}
    }
    this.stageComplete = this.stageComplete.bind(this);
  }

  componentDidMount() {
    const user = this.state.user;
    if (user.email) {
      Appcues.identify(user.email, user);
    } else {
      Appcues.anonymous();
    }
  }

  stageComplete(userProps) {
    this.setState((prevState, props) => {
      const user = Object.assign({}, prevState.user, userProps);
      user.latestStage = prevState.stage;
      Appcues.identify(user.email, user || {});
      store.set('user', user);
      return { stage: prevState.stage + 1, user };
    });
  }

  render() {
    const Stage = (this.state.stage === null) ? resumeStage : stages[this.state.stage];
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Vote Remote!</h1>
        </header>
        <Stage user={this.state.user} stageComplete={this.stageComplete} />
      </div>
    );
  }
}

export default App;

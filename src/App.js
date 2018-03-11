import React, { Component } from 'react';
import './App.css';
import './VoteOrgForm'
import VoteOrgForm from './VoteOrgForm';

class App extends Component {
  componentWillMount() {
    this.setState({ kind: null })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Vote Remote!</h1>
        </header>
        {
          this.state.kind
            ? <VoteOrgForm kind={this.state.kind} campaign="indivisiblesomerville.org" />
            : <div>
              <button onClick={() => this.setState({ kind: "register" })}>Clicky to Register!</button>
              <button onClick={() => this.setState({ kind: "absentee" })}>Clicky for that absentee action!</button>
            </div>
        }

      </div>
    );
  }
}

export default App;

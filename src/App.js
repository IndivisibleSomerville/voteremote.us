import React, { Component } from 'react';
import logo from './logo.svg';
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
            ? <VoteOrgForm kind={this.state.kind} />
            : <button onClick={() => this.setState({ kind: "register" })}>Clicky to Register!</button>
        }

      </div>
    );
  }
}

export default App;

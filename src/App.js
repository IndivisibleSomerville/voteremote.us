import React, { Component } from 'react';
import VoteOrgForm from './VoteOrgForm';
import { Transition } from 'semantic-ui-react';
import { Link, Route, Switch } from 'react-router-dom';

import './App.css';

// Generic Components
import Header from './components/Header';
import Footer from './components/Footer';

// Stages
import YourInfo from './components/stages/your-info';
import YourVote from './components/stages/your-vote';
import YourBallot from './components/stages/your-ballot';
import Finished from './components/stages/finished';

// Sub-steps
import welcomeSubStep from './components/stages/your-info/sub-steps/substep1-welcome';
import addressSubStep from './components/stages/your-info/sub-steps/substep2-address';
import absentee from './components/stages/your-ballot/absentee';
import register from './components/stages/your-ballot/register';
import verify from './components/stages/your-ballot/verify';

const Appcues = window.Appcues;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        currentStep: 0,
        showNavigation: true
      }
    };

    this.stepProps = { 
      getStore: this.getStore.bind(this), 
      updateStore: this.updateStore.bind(this)
    };
  }

  componentDidMount() {
    const user = this.state.user;

    if (user.email) {
      Appcues.identify(user.email, user);
    } else {
      Appcues.anonymous();
    }
  }

  getStore() {
    return this.state.user;
  }

  updateStore(userProps, cb) {
    this.setState((prevState, props) => {
      const user = Object.assign({}, prevState.user, userProps, { started: true });
      return {
        user: cb ? cb(user) : user
      };
    });
  }

  // Called when the step changes. Do persistence and API calls here.
  stepChange(step) {
    this.updateStore({}, (user) => {
      user.currentStep = step;

      Appcues.identify(user.email, user || {});
      return user;
    });
  }

  render() {
    console.log('store', this.state);
    return (
      <div className="root">
        <Header />
        <div className="form_page">
          <div className="form_container">
            <Switch>
              <Route exact path="/your-info/address" render={(props) => <YourInfo formName="Address Form" {...this.stepProps} {... props} form={addressSubStep} />} />
              <Route exact path="/your-vote/choose-location" render={(props) => <YourVote formName="selectDistrict" {...this.stepProps} {... props} form={addressSubStep} />} />
              <Route exact path="/your-vote/are-you-registered" render={(props) => <YourVote formName="registered" {...this.stepProps} {... props} form={addressSubStep} />} />
              <Route exact path="/your-ballot/verify" render={(props) => <YourBallot formName="verify" {...this.stepProps} {... props} />} />
              <Route exact path="/your-ballot/register" render={(props) => <YourBallot formName="register" {...this.stepProps} {... props} form={addressSubStep} />} />
              <Route exact path="/your-ballot/absentee-ballot" render={(props) => <YourBallot formName="absentee" {...this.stepProps} {... props} form={addressSubStep} />} />
              <Route exact path="/finished" render={(props) => <Finished {...this.stepProps} {... props} />} />
              <Route path="/" render={(props) => <YourInfo formName="Welcome Form" {...this.stepProps} {... props} form={welcomeSubStep} />} />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

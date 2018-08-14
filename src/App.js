import React from 'react';
import { Route, Switch } from 'react-router-dom';
import firebase from 'firebase';

import './App.css';

// Generic Components
import Header from './components/Header';
import Footer from './components/Footer';
import IntakeForm from './components/IntakeForm';

const App = () => (
  <div className="root">
    <Header />
      <Switch>
        <Route path={'/get-started'} component={IntakeForm} />
        <Route exact path={'/'} render={() => <h1>Hi!</h1>} />
      </Switch>
    <Footer />
  </div>
)

export default App;



// <div className="form_page">
// <div className="form_container">
//   <StepZilla
//     steps={this.steps}
//     onStepChange={(step) => this.stepChange(step)}
//     nextButtonCls="form_button form_button_solid_background"
//     backButtonCls="form_button form_button_solid_background no_display"
//     startAtStep={this.state.user.currentStep || 0}
//     showNavigation={this.state.user.showNavigation}
//     showSteps={false}
//   />
// </div>
// </div>
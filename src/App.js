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

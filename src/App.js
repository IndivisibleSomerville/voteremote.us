import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import IntakeForm from './components/IntakeForm';
import CampusCoordinatorPage from './components/CampusCoordinatorPage';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import StateRequirementsPageTemp from './components/StateRequirementsPageTemp';

import './App.css';

const App = () => (
  <div className="root">
    <Header />
      <Switch>
        <Route path={'/get-started'} component={IntakeForm} />
        <Route path={'/get-involved'} component={CampusCoordinatorPage} />
        <Route path={'/state-requirements'} component={StateRequirementsPageTemp} />
        <Route path={'/about'} component={AboutPage} />
        <Route exact path={'/'} component={HomePage} />
      </Switch>
    <Footer />
  </div>
)

export default App;

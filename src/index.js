import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import ScrollToTop from './components/general-helpers/ScrollToTop';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import 'semantic-ui/dist/semantic.min.css';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-125429696-1');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <HashRouter>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </HashRouter>, 
  document.getElementById('vote-remote')
);
registerServiceWorker();

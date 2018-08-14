import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui/dist/semantic.min.css';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>, 
  document.getElementById('vote-remote')
);
registerServiceWorker();

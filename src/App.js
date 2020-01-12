import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import AppRoutes from './components/AppRoutes';
import './index.css';

const history = createBrowserHistory({
  basename: '/'
});

export const navigateToScreen = (path, props = {}) => {
  history.push(path, { ...props });
};

function App() {
  return (
    <Router history={history}>
      <AppRoutes />
    </Router>
  );
}

export default App;

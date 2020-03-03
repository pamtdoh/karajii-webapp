import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

function Root({ store }) {
  return (
    <Provider store={store}>
      <Router>
        <App/>
      </Router>
    </Provider>
  );
}

export default Root;

import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import store from './redux/configureStore';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
);

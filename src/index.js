import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import {Router, Route, browserHistory } from 'react-router';

import App from 'app';
import Resources from 'resources';
import requireAuth from 'require_auth';
import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware()(createStore);

let store = createStore(reducers, {authenticated:false}, compose(
  applyMiddleware(),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="resources" component={requireAuth(Resources)} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));

import React from 'react';
import { render } from 'react-snapshot';

import { createStore } from './utils/store';

import { App, AppWithRouter } from './components';

import sagas from './sagas';
import reducer from './reducer';
import { routes, notFound } from './routes';

import registerServiceWorker from './registerServiceWorker';

export const { store, history } = createStore(reducer, sagas);

render(
  <App store={store}>
    <AppWithRouter history={history} routes={routes} notFound={notFound} />
  </App>,
  document.getElementById('root'),
);
registerServiceWorker();

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { ConnectedRouter } from 'react-router-redux';

import Router from './RouterView';

const AppWithRouter = props => (
  <ConnectedRouter history={props.history}>
    <Fragment>
      {props.children || null}
      <Router routes={props.routes} notFound={props.notFound} />
    </Fragment>
  </ConnectedRouter>
);

AppWithRouter.propTypes = {
  history: PropTypes.object.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  notFound: PropTypes.object.isRequired,
  children: PropTypes.node,
};

// export
export { AppWithRouter };

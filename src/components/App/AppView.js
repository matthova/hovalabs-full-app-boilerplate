import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Provider } from 'rebass';
import * as ReactRedux from 'react-redux';

import { theme } from '../../design-system/theme';

class AppView extends PureComponent {
  render() {
    let container = <Provider theme={theme}>{this.props.children || null}</Provider>;

    if (this.props.store) {
      container = <ReactRedux.Provider store={this.props.store}>{container}</ReactRedux.Provider>;
    }

    return container;
  }
}

AppView.propTypes = {
  store: PropTypes.object,
  children: PropTypes.node,
};

// export
export default AppView;

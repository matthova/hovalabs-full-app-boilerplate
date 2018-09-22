import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from 'styled-components';
import * as ReactRedux from 'react-redux';

import { theme } from '../../design-system/theme';

class AppView extends PureComponent {
  render() {
    let container = <ThemeProvider theme={theme}>{this.props.children || null}</ThemeProvider>;

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
AppView.defaultProps = {
  store: {},
  children: null,
};
// export
export default AppView;

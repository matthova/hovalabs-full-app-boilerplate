import { connect } from 'react-redux';

// VIEWS
import App from './AppView';

// map our redux store state to props of our component
const mapStateToProps = (state, ownProps) => ({});

// map a redux action to props of our component
const mapDispatchToProps = (dispatch, ownProps) => ({});

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export { ConnectedApp as App };

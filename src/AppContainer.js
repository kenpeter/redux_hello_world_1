// import
// connect
// connect state and dispatch
// react redux
import { connect } from 'react-redux';

// import
// app component
// form app
import App from './App';

// action creator, a func create action
import { bindActionCreators } from 'redux';


// import hello action
import HelloAction from './actions/HelloAction';


// https://stackoverflow.com/questions/38202572/understanding-react-redux-and-mapstatetoprops
// map state to props, allow state to appear inside component
// const, why const, because only once
// map state to props
// () => {}, state
const mapStateToProps = (state) => {
  // console log
  console.log('map to state to props, state.text: ' + state.text);
  
  // map state to props
  // return {}
  // text:
  // state.text
  return {
    text: state.text
  }
}

// const, because only once
// map dispatch to props
// () => {}
// pass dispatch
const mapDispatchToProps = (dispatch) => {
  // console log
  console.log('map to dispatch to props');
  
  // bindActionCreators, allow action creator to dispatch straight away.
  // return bind action creator
  // {onChange: hello action}, so pass obj
  // along with dispatch
  // In App component, we use it like <App> this.props.onChange
  return bindActionCreators({onChange: HelloAction}, dispatch);
}

// const
// App container to contain app
// connect()
// map state to props
// map dispatch to props
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App) // App

export default AppContainer;

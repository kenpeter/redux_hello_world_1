// react, syntax
import React from 'react';

// dom, to render
import ReactDOM from 'react-dom';

// provider to jam store
import { Provider } from 'react-redux'

// what is store, store holds the whole state tree.
// create store from redux
import { createStore } from 'redux'

// hello reducer
import HelloReducer from './reducers/HelloReducer'

// app container
import AppContainer from './AppContainer';

// import index css
import './index.css';

// console
console.log('from index.js');

// create a store which has some reducers.
let store = createStore(HelloReducer, {text: 'Initial value from createStore'});

// dom render
// So provider is another react component
// so pass store as prop to provider and inside we have app container
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);


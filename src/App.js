// react, component
// from react
import React, { Component } from 'react';
// logo
import logo from './logo.svg';
// app css
import './App.css';

// class app
// extends
// component
class App extends Component {
  // on change for input field
  // pass event
  onChangeHandler(event) {
    // console log
    console.log('from onChangeHandler App.js');
    
    // onChange === HelloAction(newText)
    // so action just a func
    // now payload is completed and will be fired.
    //this.props.onChange(event.target.value);
    console.log("test...");
    console.log(this.props);
  }

  // render
  // return
  render() {
    return (
      // app top
      <div className="App">
        {/* app header */}
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Some text</h2>
        </div>
        <p className="App-intro">
          {/* 
            It means App just pure component, app container handles all the states, complex stuff 
            mapStateToProps return {text: state.text }
            now we have this.props.text
          */}
          Hello, {this.props.text}
          {' '}
          <input onChange={this.onChangeHandler.bind(this)}>
          </input>
        </p>
      </div>
    );
  }
}

export default App;

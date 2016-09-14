import React from 'react';
import ReactOnRails from 'react-on-rails';
import {observable} from 'mobx';
import {observer} from 'mobx-react'

const appState = observable({
  count: 0
})

appState.increment = function () {
  this.count++;
}

appState.decrement = function () {
  this.count--;
}

@observer class Counter extends React.Component{
  render() {
    return(
      <div>
        Counter: {appState.count} <br/>
        <button onClick={this.handleInc}> + </button>
        <button onClick={this.handleDec}> - </button>
      </div>
    );
  }

  handleInc = () => {
    appState.count++;
  }

  handleDec =() => {
    appState.count--;
  }
}

// This is how react_on_rails can see the Counter in the browser.
ReactOnRails.register({ Counter });

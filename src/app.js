import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  render() {
    return (
      <div>this is the app</div>
    )
  }
}

var app = document.querySelector("#app");
ReactDOM.render(<App />, app);
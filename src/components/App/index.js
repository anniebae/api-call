import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Request from 'superagent'
import _ from 'lodash'

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    // Called the first time the component is loaded right before the component is added to the page
    this.search();
  }

  updateSearch() {
    this.search(this.refs.query.value);
  }

  render() {
    var movies = _.map(this.state.movies, (movies) => {
      return <li>{movies.Title}</li>
    })
    return (
      <div>
        <input ref="query" onChange={ (e) => {this.updateSearch(); } } type="text" />
        <ul>{movies}</ul>
      </div>
    )
  }

  search(query = "star"){
    var url = `http://www.omdbapi.com/?s=${query}&y=&r=json&plot=short`;
    Request.get(url).then((response) => {
      this.setState({
        movies: response.body.Search,
        total: response.body.totalResults
      });
    });
  }
}

var app = document.querySelector("#app");
ReactDOM.render(<App />, app);
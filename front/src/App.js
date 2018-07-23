import React, { Component } from 'react'
import MovieListContainer from './containers/MovieListContainer'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Wild Movies</h1>
        <MovieListContainer />
      </div>
    )
  }
}

export default App

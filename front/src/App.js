import React, { Component } from 'react'
import MovieList from './components/MovieList'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Wild Movies</h1>
        <MovieList />
      </div>
    )
  }
}

export default App

import React, { Component } from 'react'
import MovieListContainer from './containers/MovieListContainer'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  state = {
    title: "",
    year: "",
    picture: ""
  }
  handleChange = (event) => {
    const value = event.target.value
    const name = event.target.name
    this.setState({
      [name]: value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    fetch('/api/movies', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(movie => {
      console.log(movie)
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Wild Movies</h1>
        <MovieListContainer />
        <form onSubmit={this.handleSubmit}>
          <h2>New movie</h2>
          <input name="title" placeholder="title" onChange={this.handleChange} /><br />
          <input name="year" placeholder="year" onChange={this.handleChange} /><br />
          <input name="picture" placeholder="picture" onChange={this.handleChange} /><br />
          <button type="submit">Envoyer</button>
        </form>
      </div>
    )
  }
}

export default App

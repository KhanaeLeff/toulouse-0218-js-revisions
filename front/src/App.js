import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import MovieListContainer from './containers/MovieListContainer'
import MovieForm from './containers/MovieForm'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>Wild Movies</h1>
          <Link to="/">Home</Link> | <Link to="/movies/new">New movie</Link>

          <Switch>
            <Route exact path="/" component={MovieListContainer} />
            <Route exact path="/movies/new" component={MovieForm} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App

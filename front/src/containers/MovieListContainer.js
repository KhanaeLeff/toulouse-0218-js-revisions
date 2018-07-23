import React, { Component } from 'react'
import MovieList from '../components/MovieList'

class MovieListContainer extends Component {
  state={
    movies:[]
  }
  componentDidMount () {
    fetch('/api/movies')
    .then(res => res.json())
    .then(movies => this.setState({
      movies: movies
    }))
  }
  render () {
    return <MovieList movies={this.state.movies} />
  }
}

export default MovieListContainer
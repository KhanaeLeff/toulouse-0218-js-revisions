import React, { Component } from 'react'
import MovieList from '../components/MovieList'

class MovieListContainer extends Component {
  state={
    movies:[]
  }

  handleDelete = (id) => {
    fetch(`/api/movies/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(result =>{})
  }

  componentDidMount () {
    fetch('/api/movies')
    .then(res => res.json())
    .then(movies => this.setState({
      movies: movies
    }))
  }
  render () {
    return <MovieList 
    movies={this.state.movies}
    handleDelete={this.handleDelete} />
  }
}

export default MovieListContainer
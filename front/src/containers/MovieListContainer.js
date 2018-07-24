import React, { Component } from 'react'
import MovieList from '../components/MovieList'

class MovieListContainer extends Component {
  state={
    movies:[],
    movieEditingId: false
  }

  movieUpdated = updatedMovie => {
    const movieId = updatedMovie.id
    const newMovies = [...this.state.movies]
    const index = newMovies.findIndex(movie => {
      return movie.id === movieId
    })
    newMovies.splice(index, 1, updatedMovie)
    this.setState({ 
      movies: newMovies,
      movieEditingId: false 
    })
  }

  handleOpenEditing = (id) => {
    this.setState({ movieEditingId: id })
  }

  handleDelete = (id) => {
    fetch(`/api/movies/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(result =>{
      const movies = [...this.state.movies]
      const index = movies.findIndex(movie => {
        return movie.id === id
      })
      movies.splice(index, 1)
      this.setState({ movies: movies })
    })
  }

  componentDidMount () {
    fetch('/api/movies')
    .then(res => res.json())
    .then(movies => this.setState({
      movies: movies
    }))
  }
  render () {
    const { movies } = this.state
    return <MovieList 
    movies={movies}
    handleDelete={this.handleDelete}
    handleOpenEditing={this.handleOpenEditing}
    movieEditingId={this.state.movieEditingId}
    movieUpdated={this.movieUpdated} />
  }
}

export default MovieListContainer
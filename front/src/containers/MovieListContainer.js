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
    handleDelete={this.handleDelete} />
  }
}

export default MovieListContainer
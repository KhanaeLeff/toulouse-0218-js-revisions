import React from 'react'
import MovieItem from './MovieItem'
import MovieForm from '../containers/MovieForm'

class MovieList extends React.Component {
  render () {
    const {movies} = this.props
    const movie = movies.find(movie => movie.id === this.props.movieEditingId)
    
    return (
      <div>
        {
          this.props.movies.map(
            (movie) => <MovieItem 
              movie={movie}
              handleDelete={this.props.handleDelete}
              handleOpenEditing={this.props.handleOpenEditing} />
          )
        }
        {
          this.props.movieEditingId && <MovieForm 
          movie={movie}
          movieUpdated={this.props.movieUpdated} /> 
        }
      </div>
    )
  }
}

export default MovieList
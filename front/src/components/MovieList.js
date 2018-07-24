import React from 'react'
import MovieItem from './MovieItem'

class MovieList extends React.Component {
  render () {
    return (
      <div>
        {
          this.props.movies.map(
            (movie) => <MovieItem 
              movie={movie}
              handleDelete={this.props.handleDelete} />
          )
        }
      </div>
    )
  }
}

export default MovieList
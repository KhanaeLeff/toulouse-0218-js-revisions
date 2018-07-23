import React from 'react'
import MovieItem from './MovieItem'

class MovieList extends React.Component {
  render () {
    return (
      <div>
        {
          this.props.movies.map(
            (movie) => <MovieItem movie={movie} />
          )
        }
      </div>
    )
  }
}

export default MovieList
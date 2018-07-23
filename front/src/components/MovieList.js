import React from 'react'
import movies from '../movies.json'
import MovieItem from './MovieItem'

class MovieList extends React.Component {
  render () {
    return (
      <div>
        {
          movies.map(
            (movie) => <MovieItem movie={movie} />
          )
        }
      </div>
    )
  }
}

export default MovieList
import React from 'react'
import movies from '../movies.json'

class MovieItem extends React.Component {
  render () {
    return (
      <div>{this.props.movie.title}</div>
    )
  }
}

export default MovieItem
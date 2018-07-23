import React from 'react'

class MovieItem extends React.Component {
  render () {
    return (
      <div>{this.props.movie.title}</div>
    )
  }
}

export default MovieItem
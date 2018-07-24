import React from 'react'

class MovieItem extends React.Component {
  render () {
    return (
      <div>{this.props.movie.title} 
      <span class="icon-pencil" onClick= {() => this.props.handleOpenEditing(this.props.movie.id)}></span> 
      <span class="icon-bin" onClick={() => this.props.handleDelete(this.props.movie.id)}></span></div>
    )
  }
}

export default MovieItem
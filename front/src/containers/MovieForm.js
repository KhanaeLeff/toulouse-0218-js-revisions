import React from 'react'

class MovieForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.movie ? this.props.movie : 
    {
      title: "",
      year: "",
      picture: ""
    }
  }

  handleChange = (event) => {
    const value = event.target.value
    const name = event.target.name
    this.setState({
      [name]: value
    })
  }
  
  createMovie = () => {
    fetch('/api/movies', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(movie => {
      console.log(movie)
    })
  } 

  updateMovie = (id) => {
    fetch(`/api/movies/${id}`, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(movie => {
      this.props.movieUpdated(movie)
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.id) {
      this.updateMovie(this.state.id)
    }
    else {
      this.createMovie()
    }
  }
  render () {
    const isNew = !this.state.id
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>{isNew ? 'New movie' : `Edit ${this.state.title}`}</h2>
        <input name="title" value={this.state.title} placeholder="title" onChange={this.handleChange} /><br />
        <input name="year" value={this.state.year} placeholder="year" onChange={this.handleChange} /><br />
        <input name="picture" value={this.state.picture} placeholder="picture" onChange={this.handleChange} /><br />
        <button type="submit">Envoyer</button>
      </form>
    )
  }
}

export default MovieForm

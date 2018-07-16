import React, { Component } from 'react'

class EditPlayerForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: props.player.firstName,
      lastName: props.player.lastName
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleChange (event) {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit (event) {
    event.preventDefault()
    this.props.handleSaveClick(this.props.player.rosterPosition, {
      firstName: this.state.firstName,
      lastName: this.state.lastName
    })
  }

  render () {
    return (
      <article className='box'>
        <form onSubmit={this.handleFormSubmit}>
          <div className='field'>
            <label>First Name</label>
            <div className='control'>
              <input onChange={this.handleChange} name='firstName' className='input' type='text' value={this.state.firstName} />
            </div>
          </div>
          <div className='field'>
            <label>Last Name</label>
            <div className='control'>
              <input onChange={this.handleChange} name='lastName' className='input' type='text' value={this.state.lastName} />
            </div>
          </div>
          <div className='field is-grouped is-grouped-right'>
            <div className='control'>
              <button className='button is-link'>Save</button>
            </div>
          </div>
        </form>
        {/* <h6 className='subtitle is-6'>{this.props.player.alphaNumeric}</h6> */}
        <p>Strength: {this.props.player.scores.strength}</p>
        <p>Speed: {this.props.player.scores.speed}</p>
        <p>Agility: {this.props.player.scores.agility}</p>
      </article>
    )
  }
}

export default EditPlayerForm

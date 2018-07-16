import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class EditPlayerForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: props.player.firstName,
      lastName: props.player.lastName
    }
  }

  render () {
    return (
      <article className='box'>
        <nav className='level'>
          <div className='level-left'>
            <h4 className='title is-4'>{this.props.player.firstName} {this.props.player.lastName}</h4>
          </div>
          <div className='level-right'>
            <span className='icon'><FontAwesomeIcon icon='save' /></span>
          </div>
        </nav>
        <h6 className='subtitle is-6'>{this.props.player.alphaNumeric}</h6>
        <p>Strength: {this.props.player.scores.strength}</p>
        <p>Speed: {this.props.player.scores.speed}</p>
        <p>Agility: {this.props.player.scores.agility}</p>
      </article>
    )
  }
}

export default EditPlayerForm

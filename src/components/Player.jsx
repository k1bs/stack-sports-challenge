import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Player extends Component {
  render () {
    return (
      <article className='box'>
        <nav className='level'>
          <div className='level-left'>
            <h4 className='title is-4'>{this.props.player.firstName} {this.props.player.lastName}</h4>
          </div>
          <div className='level-right'>
            <span onClick={() => this.props.handleEditClick(this.props.player)} className='icon'><FontAwesomeIcon icon='edit' /></span>
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

export default Player

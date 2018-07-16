import React, { Component } from 'react'

class Player extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <article className='box'>
        <h4 className='title is-4'>{this.props.player.firstName} {this.props.player.lastName}</h4>
        <h6 className='subtitle is-6'>{this.props.player.alphaNumeric}</h6>
        <p>Strength: {this.props.player.scores.strength}</p>
        <p>Speed: {this.props.player.scores.speed}</p>
        <p>Agility: {this.props.player.scores.agility}</p>
      </article>
    )
  }
}

export default Player

import React from 'react'

const Player = (props) => {
  return (
    <article className='is-child box'>
      <h4 className='title is-4'>{props.player.firstName} {props.player.lastName}</h4>
      <h6 className='subtitle is-6'>{props.player.alphaNumeric}</h6>
      <p>Strength: {props.player.scores.strength}</p>
      <p>Speed: {props.player.scores.speed}</p>
      <p>Agility: {props.player.scores.agility}</p>
    </article>
  )
}

export default Player

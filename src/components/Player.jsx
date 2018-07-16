import React from 'react'

const Player = (props) => {
  return (
    <article className='is-child box'>
      <h5 className='title is-5'>{props.player.firstName} {props.player.lastName}</h5>
      <h5 className='subtitle is-5'>{props.player.firstName} {props.player.lastName}</h5>
      <p>Strength: {props.player.scores.strength}</p>
      <p>Speed: {props.player.scores.speed}</p>
      <p>Agility: {props.player.scores.agility}</p>
    </article>
  )
}

export default Player

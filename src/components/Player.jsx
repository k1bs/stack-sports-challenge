import React from 'react'

const Player = (props) => {
  return (
    <div className='tile is-child box'>
      <p>{props.player.firstName}</p>
    </div>
  )
}

export default Player

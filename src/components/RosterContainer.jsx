import React, { Component } from 'react'
import Player from './Player.jsx'
import faker from 'faker'

class RosterContainer extends Component {
  constructor () {
    super()
    this.state = {
      rosterName: '',
      roster: []
    }
  }

  componentWillMount () {
    let newRoster = []
    for (let i = 0; i < 15; i++) {
      newRoster.push({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        speed: Math.round((Math.random() * 32) + 1),
        strength: Math.round((Math.random() * 32) + 1),
        agility: Math.round((Math.random() * 32) + 1)
      })
    }
    this.setState({
      roster: newRoster
    })
  }

  renderRoster () {
    return this.state.roster.map((player, index) => {
      return <Player key={index} player={player} />
    })
  }

  render () {
    return (
      <section className='section'>
        <p>Roster Container</p>
        <div className='container'>
          {this.renderRoster()}
        </div>
      </section>
    )
  }
}

export default RosterContainer

import React, { Component } from 'react'
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
      return <p key={index}>{player.firstName}</p>
    })
  }

  render () {
    return (
      <div>
        <p>Roster Container</p>
        <div>
          {this.renderRoster()}
        </div>
      </div>
    )
  }
}

export default RosterContainer

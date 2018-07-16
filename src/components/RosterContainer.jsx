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
      let startingStatus = i < 10
      newRoster.push({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        speed: Math.round((Math.random() * 32) + 1),
        strength: Math.round((Math.random() * 32) + 1),
        agility: Math.round((Math.random() * 32) + 1),
        startingStatus
      })
    }
    console.log(newRoster)
    this.setState({
      roster: newRoster
    })
  }

  renderStarters () {
    return this.state.roster.map((player, index) => {
      if (player.startingStatus) {
        return <Player key={index} player={player} />
      } else {
        return ''
      }
    })
  }

  renderSubs () {
    return this.state.roster.map((player, index) => {
      if (!player.startingStatus) {
        return <Player key={index} player={player} />
      } else {
        return ''
      }
    })
  }

  render () {
    return (
      <section className='section'>
        <div className='container'>
          <p className='subtitle'>Starting Lineup</p>
          <div className='tile is-ancestor'>
            <div className='tile is-parent is-8 is-vertical'>
              {this.renderStarters()}
            </div>
            <div className='tile is-parent is-4 is-vertical'>
              {this.renderSubs()}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default RosterContainer

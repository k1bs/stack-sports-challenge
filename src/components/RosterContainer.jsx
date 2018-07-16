import React, { Component } from 'react'
import Player from './Player.jsx'
import faker from 'faker'

class RosterContainer extends Component {
  constructor () {
    super()
    this.state = {
      rosterName: '',
      roster: [],
      usedNames: [],
      usedScores: []
    }
  }

  componentWillMount () {
    this.generateRoster()
  }

  generateRoster () {
    let newRoster = []
    for (let i = 0; i < 15; i++) {
      let startingStatus = i < 10
      newRoster.push({
        firstName: this.nameGenerator('first'),
        lastName: this.nameGenerator('last'),
        speed: Math.round((Math.random() * 32) + 1),
        strength: Math.round((Math.random() * 32) + 1),
        agility: Math.round((Math.random() * 32) + 1),
        startingStatus
      })
    }
    this.setState({
      roster: newRoster
    })
  }

  nameGenerator (type) {
    let name
    switch (type) {
      case 'first':
        name = faker.name.firstName()
        break
      case 'last':
        name = faker.name.lastName()
        break
    }
    if (!this.state.usedNames.includes(name)) {
      this.setState({
        usedNames: [...this.state.usedNames, name]
      })
      return name
    } else {
      this.nameGenerator(type)
    }
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
          <div className='columns'>
            <div className='column is-8'>
              <p className='subtitle'>Starting Lineup</p>
              {this.renderStarters()}
            </div>
            <div className='column'>
              <p className='subtitle'>Bench</p>
              {this.renderSubs()}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default RosterContainer

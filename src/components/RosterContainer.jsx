import React, { Component } from 'react'
import Player from './Player.jsx'
import genHelpers from '../helpers/gen-helpers'

class RosterContainer extends Component {
  constructor () {
    super()
    this.state = {
      roster: [],
      usedNames: [],
      usedScores: []
    }
  }

  componentDidMount () {
    this.generateRoster()
  }

  generateRoster () {
    let newRoster = []
    let firstNameArray = genHelpers.firstNameGen()
    let lastNameArray = genHelpers.lastNameGen()
    let {scoreArray, sumArray} = genHelpers.scoreGen()
    for (let i = 0; i < 15; i++) {
      let alphaNumeric = `${firstNameArray[i].charAt(0)}${lastNameArray[i].charAt(0)}`
      let numbers = parseInt(sumArray[i], 10)
      alphaNumeric = alphaNumeric + '00' + numbers
      let startingStatus = i < 10
      newRoster.push({
        firstName: firstNameArray[i],
        lastName: lastNameArray[i],
        scores: scoreArray[i],
        startingStatus,
        alphaNumeric
      })
    }
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

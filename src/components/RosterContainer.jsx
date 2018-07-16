import React, { Component } from 'react'
import Player from './Player'
import EditPlayerForm from './EditPlayerForm'
import genHelpers from '../helpers/gen-helpers'

class RosterContainer extends Component {
  constructor () {
    super()
    this.state = {
      roster: [],
      usedNames: [],
      usedScores: [],
      editIndex: null
    }
    this.handleEditClick = this.handleEditClick.bind(this)
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
      let rosterPosition = i
      let alphaNumeric = `${firstNameArray[i].charAt(0)}${lastNameArray[i].charAt(0)}`
      let numbers = parseInt(sumArray[i], 10)
      alphaNumeric = alphaNumeric + '00' + numbers
      let startingStatus = i < 10
      newRoster.push({
        firstName: firstNameArray[i],
        lastName: lastNameArray[i],
        scores: scoreArray[i],
        startingStatus,
        alphaNumeric,
        rosterPosition
      })
    }
    this.setState({
      roster: newRoster
    })
  }

  renderStarters () {
    return this.state.roster.map((player, index) => {
      if (player.startingStatus) {
        return this.renderPlayerOrForm(player, index)
      } else {
        return ''
      }
    })
  }

  renderPlayerOrForm (player, index) {
    if (player.rosterPosition === this.state.editIndex) {
      return <EditPlayerForm key={index} player={player} />
    } else {
      return <Player key={index} player={player} handleEditClick={this.handleEditClick} />
    }
  }

  handleEditClick (player) {
    console.log(player)
    this.setState({
      editIndex: player.rosterPosition
    })
  }

  renderSubs () {
    return this.state.roster.map((player, index) => {
      if (!player.startingStatus) {
        return this.renderPlayerOrForm(player, index)
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

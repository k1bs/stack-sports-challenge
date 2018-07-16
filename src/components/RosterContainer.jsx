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
      editIndex: null,
      nameErrorMessage: ''
    }
    this.handleEditClick = this.handleEditClick.bind(this)
    this.handleSaveClick = this.handleSaveClick.bind(this)
  }

  componentDidMount () {
    this.generateRoster()
  }

  generateRoster () {
    let newRoster = []
    let usedNames = []
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
      usedNames.push({
        firstName: firstNameArray[i],
        lastName: lastNameArray[i]
      })
    }
    this.setState({
      roster: newRoster,
      usedNames
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
      return <EditPlayerForm key={index} player={player} message={this.state.nameErrorMessage} handleSaveClick={this.handleSaveClick} />
    } else {
      return <Player key={index} player={player} handleEditClick={this.handleEditClick} />
    }
  }

  handleEditClick (player) {
    this.setState({
      editIndex: player.rosterPosition,
      nameErrorMessage: ''
    })
  }

  handleSaveClick (playerPosition, newNameObject) {
    let match = this.state.usedNames.find(card => (card.firstName === newNameObject.firstName) && (card.lastName === newNameObject.lastName))
    if (newNameObject.firstName.charAt(0) === ' ' ||
        newNameObject.lastName.charAt(0) === ' ' ||
        newNameObject.firstName.length === 0 ||
        newNameObject.lastName.length === 0) {
      this.setState({
        nameErrorMessage: "Name can't be blank or begin with a space."
      })
    } else if (match && (this.state.usedNames.indexOf(match) !== playerPosition)) {
      this.setState({
        nameErrorMessage: 'Name already in use.'
      })
    } else {
      // The JSON parsing is a concise way to deep copy by value an object/iterable
      let newPlayerCard = JSON.parse(JSON.stringify(this.state.roster[playerPosition]))
      newPlayerCard.firstName = newNameObject.firstName
      newPlayerCard.lastName = newNameObject.lastName
      let newRoster = JSON.parse(JSON.stringify(this.state.roster))
      let newUsedNames = JSON.parse(JSON.stringify(this.state.usedNames))
      newUsedNames.splice(playerPosition, 1, {firstName: newNameObject.firstName, lastName: newNameObject.lastName})
      newRoster.splice(playerPosition, 1, newPlayerCard)
      this.setState({
        roster: newRoster,
        usedNames: newUsedNames,
        editIndex: null,
        nameErrorMessage: ''
      })
    }
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
              <h4 className='title is-4'>Starting Lineup</h4>
              {this.renderStarters()}
            </div>
            <div className='column'>
              <h4 className='title is-4'>Bench</h4>
              {this.renderSubs()}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default RosterContainer

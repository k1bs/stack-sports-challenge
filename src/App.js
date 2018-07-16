import React, { Component } from 'react'
import Header from './components/Header'
import Landing from './components/Landing'
import Footer from './components/Footer'
import RosterContainer from './components/RosterContainer'
import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faSave } from '@fortawesome/free-solid-svg-icons'

library.add(faEdit, faSave)

class App extends Component {
  constructor () {
    super()
    this.state = {
      rosterName: 'farts',
      namingMode: true
    }
    this.handleRosterNameSubmit = this.handleRosterNameSubmit.bind(this)
  }

  handleRosterNameSubmit (event, rosterName) {
    event.preventDefault()
    this.setState({
      rosterName,
      namingMode: false
    })
  }

  render () {
    // TODO: add bang in front of namingMode
    return (
      <div className='App'>
        {!this.state.namingMode
          ? <div>
            <Header rosterName={this.state.rosterName} />
            <RosterContainer />
            <Footer />
          </div>
          : <Landing handleRosterNameSubmit={this.handleRosterNameSubmit} />}
      </div>
    )
  }
}

export default App

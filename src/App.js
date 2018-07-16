import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import RosterContainer from './components/RosterContainer'

class App extends Component {
  constructor () {
    super()
    this.state = {
      rosterName: 'farts',
      namingMode: true
    }
  }

  handleRosterNameSubmit (rosterName) {
    this.setState({
      rosterName,
      namingMode: false
    })
  }

  render () {
    // TODO: add bang in front of namingMode
    return (
      <div className='App'>
        {this.state.namingMode
          ? <div>
            <Header rosterName={this.state.rosterName} />
            <RosterContainer />
            <Footer />
          </div>
          : <p>set a nme</p>}
      </div>
    )
  }
}

export default App

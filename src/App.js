import React, { Component } from 'react'
import Header from './components/Header.jsx'
import RosterContainer from './components/RosterContainer.jsx'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <RosterContainer />
      </div>
    )
  }
}

export default App

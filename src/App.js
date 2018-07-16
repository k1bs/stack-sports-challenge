import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import RosterContainer from './components/RosterContainer'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <RosterContainer />
        <Footer />
      </div>
    )
  }
}

export default App

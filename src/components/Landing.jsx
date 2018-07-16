import React, { Component } from 'react'

class Landing extends Component {
  constructor (props) {
    super(props)
    this.state = {
      teamName: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange (event) {
    const value = event.target.value
    this.setState({
      teamName: value
    })
  }

  render () {
    return (
      <section className='hero is-primary is-bold is-fullheight'>
        <div className='hero-body'>
          <div className='container name-container'>
            <form onSubmit={(event) => this.props.handleRosterNameSubmit(event, this.state.teamName)}>
              <div className='field'>
                <label className='label is-large has-text-white'>Name your Team</label>
                <div className='control'>
                  <input class='input is-large' type='text' onChange={this.handleInputChange} value={this.state.teamName} placeholder='Your Team Name' />
                </div>
              </div>
              <div className='field'>
                <div className='control'>
                  <button className='button is-link is-large'>Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default Landing

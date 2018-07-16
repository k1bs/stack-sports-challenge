import React, { Component } from 'react'

class Landing extends Component {
  constructor (props) {
    super(props)
    this.state = {
      teamName: '',
      valid: '',
      message: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.submitHelper = this.submitHelper.bind(this)
  }

  handleInputChange (event) {
    const value = event.target.value
    let validity
    if (value.length > 1) {
      validity = 'valid'
    } else {
      validity = 'invalid'
    }
    this.setState({
      teamName: value,
      valid: validity,
      message: ''
    })
  }

  submitHelper (event) {
    event.preventDefault()
    if (this.state.valid === 'valid') {
      this.props.handleRosterNameSubmit(event, this.state.teamName)
    } else {
      this.setState({
        message: 'Team Name must be at least 2 characters'
      })
    }
  }

  render () {
    return (
      <section className='hero is-dark is-fullheight'>
        <div className='hero-head'>
          <nav className='navbar'>
            <div className='container navbar-menu'>
              <div className='navbar-start'>
                <h4 className='navbar-item title is-4'>Stack Sports</h4>
              </div>
              <div className='navbar-end'>
                <span className='navbar-item'>Coding Challenge by Alex Kibler</span>
              </div>
            </div>
          </nav>
        </div>
        <div className='hero-body'>
          <div className='container name-container'>
            <form onSubmit={this.submitHelper}>
              <div className='field'>
                <label className='label is-large has-text-white'>Name your Team</label>
                <div className='control'>
                  <input className={'input is-large ' + (this.state.message.length > 0 ? 'is-danger' : '')} type='text' onChange={this.handleInputChange} value={this.state.teamName} placeholder='Your Team Name' />
                </div>
                <p className='help has-text-white'>{this.state.message}</p>
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

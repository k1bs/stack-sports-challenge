import React from 'react'

const Header = (props) => {
  return (
    <section className='hero is-primary'>
      <div className='hero-body'>
        <div className='container'>
          <h1 className='title'>
            {props.rosterName}
          </h1>
          <p className='subtitle'>Where Champions Play</p>
        </div>
      </div>
    </section>
  )
}

export default Header

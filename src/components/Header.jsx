import React from 'react'

const Header = (props) => {
  return (
    <section className='hero is-primary is-bold'>
      <div className='hero-body'>
        <div className='container'>
          <h1 className='title'>
            {props.rosterName}
          </h1>
          <p className='subtitle'>Home of Champions</p>
        </div>
      </div>
    </section>
  )
}

export default Header

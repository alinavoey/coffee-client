import React, { Component } from 'react'

class HomePage extends Component {
  render () {
    return (
      <>
        <div className='hero' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/coffee-resized.jpg'})` }}>
          <h1 className='hero-msg'>Hey there, sleepy friend. Lets get you caffeinated.</h1>
        </div>
        {/* <div className='hero'><img className='hero-img' src={process.env.PUBLIC_URL + '/coffee-resized.jpg'}/></div> */}
      </>
    )
  }
}

export default HomePage

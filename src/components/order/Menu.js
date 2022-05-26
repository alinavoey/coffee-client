import React, { Component } from 'react'

class Menu extends Component {
  render () {
    return (
      <>
        <div className='menu-img-container'><img className='menu-img' src={process.env.PUBLIC_URL + '/coffee-shop.jpg'}/></div>

        <div className='menu-section'>

          <img className='menu-icon' src={process.env.PUBLIC_URL + '/icon-fresh.png'}/>
          {/* <span>Fresh Ingredients</span> */}

          <img className='menu-icon' src={process.env.PUBLIC_URL + '/icon-beans.png'}/>
          {/* <span>Roasted Daily</span> */}

          <img className='menu-icon' src={process.env.PUBLIC_URL + '/icon-organic.png'}/>
          {/* <span>Organic Coffee</span> */}
          <h4>Organic Coffee. Roasted Daily. Fresh Ingredients.</h4>
          <hr></hr>

        </div>

        <div className='menu'>
          <h4>How about a cup of Joe?</h4>

          <p>Small <span>$2.00</span></p>
          <p>Medium <span>$3.00</span></p>
          <p>Large <span>$4.00</span></p>

          <div>
            <p>Drinks:</p>
            <p>Coffee</p>
            <p>Latte</p>
            <p>Americano</p>
            <p>Capuccino</p>
          </div>

          <p>Milk:</p>
          <p>Whole</p>
          <p>Oat</p>
          <p>Almond</p>
        </div>
      </>
    )
  }
}

export default Menu

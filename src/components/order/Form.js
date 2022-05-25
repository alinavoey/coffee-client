import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import RangeSlider from 'react-bootstrap-range-slider'
import Col from 'react-bootstrap/Col'

class OrderForm extends Component {
  render () {
    return (
      <>
        <form onSubmit={this.props.handleSubmit}>
          <div id='drink-section' className='drink-option'>
            <h4>Drink Selection</h4>
            <div className='drink-grid'>
              <label>
                <input
                  type="radio"
                  name="drinkType"
                  value='Coffee'
                  onChange={this.props.onDrinkOption}
                  checked={this.props.drink.drinkType === 'Coffee'}
                /> <div className='form-coffee-img'><img src={process.env.PUBLIC_URL + '/drink-coffee.jpg'}/></div> Coffee
              </label>
              <label>
                <input
                  type="radio"
                  name="drinkType"
                  value='Latte'
                  onChange={this.props.onDrinkOption}
                  checked={this.props.drink.drinkType === 'Latte'}
                /> <div className='form-coffee-img'><img src={process.env.PUBLIC_URL + '/drink-latte.jpg'}/></div> Latte
              </label>
              <label>
                <input
                  type="radio"
                  name="drinkType"
                  value='Americano'
                  onChange={this.props.onDrinkOption}
                  checked={this.props.drink.drinkType === 'Americano'}
                /> <div className='form-coffee-img'><img src={process.env.PUBLIC_URL + '/drink-americano.jpg'}/></div>  Americano
              </label>
              <label>
                <input
                  type="radio"
                  name="drinkType"
                  value='Capuccino'
                  onChange={this.props.onDrinkOption}
                  checked={this.props.drink.drinkType === 'Capuccino'}
                /> <div className='form-coffee-img'><img src={process.env.PUBLIC_URL + '/drink-capp.jpg'}/></div> Capuccino
              </label>
            </div>
            <div className='arrow-down'><a href='#milk-section'><img src={process.env.PUBLIC_URL + '/arrow-down.png'}/></a></div>
          </div>

          <div id='milk-section' className='milk-option'>
            <div className='arrow-up'><a href='#drink-section'><img src={process.env.PUBLIC_URL + '/arrow-up.png'}/></a></div>
            <h4>Milk Option</h4>
            <label>
              <input
                type="radio"
                name="milk"
                value='Whole'
                onChange={this.props.onDrinkOption}
                checked={this.props.drink.milk === 'Whole'}
              /> <div className='form-milk-img'><img src={process.env.PUBLIC_URL + '/milk-whole.png'}/></div> Whole
            </label>
            <label>
              <input
                type="radio"
                name="milk"
                value='Oat'
                onChange={this.props.onDrinkOption}
                checked={this.props.drink.milk === 'Oat'}
              /> <div className='form-milk-img'><img src={process.env.PUBLIC_URL + '/milk-oat.png'}/></div> Oat
            </label>
            <label>
              <input
                type="radio"
                name="milk"
                value='Almond'
                onChange={this.props.onDrinkOption}
                checked={this.props.drink.milk === 'Almond'}
              /> <div className='form-milk-img'><img src={process.env.PUBLIC_URL + '/milk-almond.png'}/></div> Almond
            </label>
            <label>
              <input
                type="radio"
                name="milk"
                value='None'
                onChange={this.props.onDrinkOption}
                checked={this.props.drink.milk === 'None'}
              /> <div className='form-milk-img'><img src={process.env.PUBLIC_URL + '/milk-none.png'}/></div> None
            </label>
            <div className='arrow-down'><a href='#sugar-section'><img src={process.env.PUBLIC_URL + '/arrow-down.png'}/></a></div>
          </div>

          <div id='sugar-section' className='sugar-option'>
            <div className='arrow-up'><a href='#milk-section'><img src={process.env.PUBLIC_URL + '/arrow-up.png'}/></a></div>
            <h4>Sweetness Level</h4>
            <div className="d-flex align-items-center justify-content-center">
              <Col className='sugar-slider' xs="6">
                <RangeSlider
                  variant='warning'
                  value={this.props.drink.sugarLevel}
                  name="sugarLevel"
                  min={0}
                  max={100}
                  step={10}
                  onChange={this.props.onDrinkOption}
                  tooltip="on"
                  tooltipPlacement='bottom'
                  size="sm"
                />
              </Col>
            </div>
            <div className='arrow-down'><a href='#size-section'><img src={process.env.PUBLIC_URL + '/arrow-down.png'}/></a></div>
          </div>

          <div id='size-section' className='size-option'>
            <div className='arrow-up'><a href='#sugar-section'><img src={process.env.PUBLIC_URL + '/arrow-up.png'}/></a></div>
            <h4>Drink Size</h4>
            <label>
              <input
                type="radio"
                name="size"
                value='Small'
                onChange={this.props.onDrinkOption}
                checked={this.props.drink.size === 'Small'}
              /> <div className='form-size-s-img'><img src={process.env.PUBLIC_URL + '/drink-size.png'}/></div> Small
            </label>
            <label>
              <input
                type="radio"
                name="size"
                value='Medium'
                onChange={this.props.onDrinkOption}
                checked={this.props.drink.size === 'Medium'}
              /> <div className='form-size-m-img'><img src={process.env.PUBLIC_URL + '/drink-size.png'}/></div>  Medium
            </label>
            <label>
              <input
                type="radio"
                name="size"
                value='Large'
                onChange={this.props.onDrinkOption}
                checked={this.props.drink.size === 'Large'}
              /> <div className='form-size-l-img'><img src={process.env.PUBLIC_URL + '/drink-size.png'}/></div>  Large
            </label>
            <div className='add-drink-btn'>
              <button onClick={this.props.addDrink} type='click'>Add Drink</button>
            </div>
          </div>

          <div id='order-section' className='order-details'>
            <h4>Order Details</h4>
            {this.props.order.drinks.map(drink => (
              <div key={drink._id}>
                <p>{drink.size} {drink.drinkType}, Milk: {drink.milk}, Sweetness Level: {drink.sugarLevel}%</p>
              </div>
            ))}
            <p>Total Price: ${this.props.order.price}</p>
            <a href='#drink-section'>Add Another Drink</a>

            <div className="order-name">
              <label> Enter your name
                <input
                  type="text"
                  name="name"
                  placeholder='name'
                  value = {this.props.order.name}
                  onChange={this.props.handleChange}
                />
              </label>
            </div>

            <div className="order-email">
              <label> Enter your email
                <input
                  type="text"
                  name="email"
                  placeholder='email'
                  value = {this.props.order.email}
                  onChange={this.props.handleChange}
                />
              </label>
            </div>

            <button type='Submit'>Place Order</button>
          </div>
        </form>
      </>
    )
  }
}

export default withRouter(OrderForm)

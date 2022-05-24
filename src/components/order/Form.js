import React, { Component } from 'react'
import RangeSlider from 'react-bootstrap-range-slider'
import Col from 'react-bootstrap/Col'

class OrderForm extends Component {
  render () {
    return (
      <>
        <form onSubmit={this.props.handleSubmit}>
          <div className='drink-option'>
            <label>
              <input
                type="radio"
                name="drinkType"
                value='Coffee'
                onChange={this.props.onDrinkOption}
                checked={this.props.drink.drinkType === 'Coffee'}
              /> Coffee
            </label>
            <label>
              <input
                type="radio"
                name="drinkType"
                value='Latte'
                onChange={this.props.onDrinkOption}
                checked={this.props.drink.drinkType === 'Latte'}
              /> Latte
            </label>
            <label>
              <input
                type="radio"
                name="drinkType"
                value='Americano'
                onChange={this.props.onDrinkOption}
                checked={this.props.drink.drinkType === 'Americano'}
              /> Americano
            </label>
            <label>
              <input
                type="radio"
                name="drinkType"
                value='Capuccino'
                onChange={this.props.onDrinkOption}
                checked={this.props.drink.drinkType === 'Capuccino'}
              /> Capuccino
            </label>
          </div>

          <div className='milk-option'>
            <label>
              <input
                type="radio"
                name="milk"
                value='Whole'
                onChange={this.props.onDrinkOption}
                checked={this.props.drink.milk === 'Whole'}
              /> Whole
            </label>
            <label>
              <input
                type="radio"
                name="milk"
                value='Oat'
                onChange={this.props.onDrinkOption}
                checked={this.props.drink.milk === 'Oat'}
              /> Oat
            </label>
            <label>
              <input
                type="radio"
                name="milk"
                value='Almond'
                onChange={this.props.onDrinkOption}
                checked={this.props.drink.milk === 'Almond'}
              /> Almond
            </label>
            <label>
              <input
                type="radio"
                name="milk"
                value='None'
                onChange={this.props.onDrinkOption}
                checked={this.props.drink.milk === 'None'}
              /> None
            </label>
          </div>

          <div className="sugar-option">
            <label>Sweetness level</label>
            <Col xs="6">
              <RangeSlider
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

          <div className='size-option'>
            <label>
              <input
                type="radio"
                name="size"
                value='Small'
                onChange={this.props.onDrinkOption}
                checked={this.props.drink.size === 'Small'}
              /> Small
            </label>
            <label>
              <input
                type="radio"
                name="size"
                value='Medium'
                onChange={this.props.onDrinkOption}
                checked={this.props.drink.size === 'Medium'}
              /> Medium
            </label>
            <label>
              <input
                type="radio"
                name="size"
                value='Large'
                onChange={this.props.onDrinkOption}
                checked={this.props.drink.size === 'Large'}
              /> Large
            </label>
          </div>

          <button onClick={this.props.addDrink} type='click'>Add Drink</button>

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
        </form>
      </>
    )
  }
}

export default OrderForm

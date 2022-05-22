import React, { Component } from 'react'
import RangeSlider from 'react-bootstrap-range-slider'
import Col from 'react-bootstrap/Col'
import { createOrder } from '../../api/order'
// import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form'

class CreateOrder extends Component {
  constructor (props) {
    super(props)

    this.state = {
      order: {
        price: '',
        name: '',
        email: '',
        drinks: [],
        owner: ''
      },
      drink: {
        drinkType: '',
        milk: '',
        sugarLevel: 0,
        size: ''
      }
    }
    this.onDrinkOption = this.onDrinkOption.bind(this)
    this.addDrink = this.addDrink.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  onDrinkOption = (event) => {
    // console.log(event.target.value)
    // set the value of drink state based on user selection
    const currentDrink = { ...this.state.drink, [event.target.name]: event.target.value }
    // console.log(currentDrink)
    this.setState({ drink: currentDrink })
  }

  addDrink = (event) => {
    event.preventDefault()
    const currentOrder = this.state.order
    // add drink to order and set the state
    currentOrder.drinks.push(this.state.drink)
    this.setState({ order: currentOrder })

    // calculate the cost of the drink
    // object to store drink prices based on drink size
    const drinkPrice = {
      Small: 2,
      Medium: 3,
      Large: 4
    }
    const drinkOrder = this.state.order.drinks
    let drinkTotal = 0
    drinkOrder.forEach(drink => {
      // console.log(drink.size)
      drinkTotal += drinkPrice[drink.size]
    })
    const orderTotal = Number.parseFloat(drinkTotal * 1.06).toFixed(2)
    // console.log(orderTotal)
    const currentPrice = { ...this.state.order, price: orderTotal }
    this.setState({ order: currentPrice })
  }

  handleChange = (event) => {
    const currentName = { ...this.state.order, [event.target.name]: event.target.value }
    this.setState({ order: currentName })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('order has been placed')

    const { user, msgAlert } = this.props

    createOrder(this.state.order, user)
      .then(res => console.log(res.data))
      .then(() => msgAlert({ heading: 'Order Placed!', message: 'Coffee Time!', variant: 'success' }))
      .catch(err => {
        msgAlert({
          heading: 'Order failed :(',
          message: 'Something went wrong: ' + err.message,
          variant: 'danger'
        })
      })
  }

  render () {
    return (
      <>
        <h1>Lets order some coffee!</h1>
        <form onSubmit={this.handleSubmit}>
          <div id='drink-option'>
            <label>
              <input
                type="radio"
                name="drinkType"
                value='Coffee'
                onChange={this.onDrinkOption}
                checked={this.state.drink.drinkType === 'Coffee'}
              /> Coffee
            </label>
            <label>
              <input
                type="radio"
                name="drinkType"
                value='Latte'
                onChange={this.onDrinkOption}
                checked={this.state.drink.drinkType === 'Latte'}
              /> Latte
            </label>
            <label>
              <input
                type="radio"
                name="drinkType"
                value='Americano'
                onChange={this.onDrinkOption}
                checked={this.state.drink.drinkType === 'Americano'}
              /> Americano
            </label>
            <label>
              <input
                type="radio"
                name="drinkType"
                value='Capuccino'
                onChange={this.onDrinkOption}
                checked={this.state.drink.drinkType === 'Capuccino'}
              /> Capuccino
            </label>
          </div>

          <div id='milk-option'>
            <label>
              <input
                type="radio"
                name="milk"
                value='Whole'
                onChange={this.onDrinkOption}
                checked={this.state.drink.milk === 'Whole'}
              /> Whole
            </label>
            <label>
              <input
                type="radio"
                name="milk"
                value='Oat'
                onChange={this.onDrinkOption}
                checked={this.state.drink.milk === 'Oat'}
              /> Oat
            </label>
            <label>
              <input
                type="radio"
                name="milk"
                value='Almond'
                onChange={this.onDrinkOption}
                checked={this.state.drink.milk === 'Almond'}
              /> Almond
            </label>
            <label>
              <input
                type="radio"
                name="milk"
                value='None'
                onChange={this.onDrinkOption}
                checked={this.state.drink.milk === 'None'}
              /> None
            </label>
          </div>

          <label>Sweetness level</label>
          <Col xs="6">
            <RangeSlider
              value={this.state.drink.sugarLevel}
              name="sugarLevel"
              min={0}
              max={100}
              step={10}
              onChange={this.onDrinkOption}
              tooltip="on"
              tooltipPlacement='bottom'
              size="sm"
            />
          </Col>

          <div id='size-option'>
            <label>
              <input
                type="radio"
                name="size"
                value='Small'
                onChange={this.onDrinkOption}
                checked={this.state.drink.size === 'Small'}
              /> Small
            </label>
            <label>
              <input
                type="radio"
                name="size"
                value='Medium'
                onChange={this.onDrinkOption}
                checked={this.state.drink.size === 'Medium'}
              /> Medium
            </label>
            <label>
              <input
                type="radio"
                name="size"
                value='Large'
                onChange={this.onDrinkOption}
                checked={this.state.drink.size === 'Large'}
              /> Large
            </label>
          </div>

          <button onClick={this.addDrink} type='click'>Add Drink</button>

          <label> Enter your name
            <input
              type="text"
              name="name"
              placeholder='name'
              onChange={this.handleChange}
            />
          </label>
          <label> Enter your email
            <input
              type="text"
              name="email"
              placeholder='email'
              onChange={this.handleChange}
            />
          </label>

          <button type='Submit'>Place Order</button>
        </form>
      </>
    )
  }
}

export default CreateOrder

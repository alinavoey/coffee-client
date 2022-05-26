import React, { Component } from 'react'

import { createOrder } from '../../api/order'
import OrderForm from './Form'
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
        <h2 className='page-title'>Lets order some coffee!</h2>
        <OrderForm order={this.state.order} drink={this.state.drink} onDrinkOption={this.onDrinkOption} addDrink={this.addDrink} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
      </>
    )
  }
}

export default CreateOrder

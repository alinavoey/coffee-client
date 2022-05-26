import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { createOrder } from '../../api/order'
import CompleteOrder from './Complete'
import OrderForm from './Form'

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
      },
      showHideForm: true,
      showHideOrder: false
    }
    this.onDrinkOption = this.onDrinkOption.bind(this)
    this.addDrink = this.addDrink.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.hideComponent = this.hideComponent.bind(this)
  }

  hideComponent () {
    this.setState({ showHideOrder: !this.state.showHideOrder, showHideForm: !this.state.showHideForm })
  }

  onDrinkOption = (event) => {
    // set the value of drink state based on user selection
    const currentDrink = { ...this.state.drink, [event.target.name]: event.target.value }
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
      drinkTotal += drinkPrice[drink.size]
    })

    const orderTotal = Number.parseFloat(drinkTotal * 1.06).toFixed(2)
    const currentPrice = { ...this.state.order, price: orderTotal }
    this.setState({ order: currentPrice, drink: { sugarLevel: 0 } })
    this.hideComponent()
  }

  handleChange = (event) => {
    const currentName = { ...this.state.order, [event.target.name]: event.target.value }
    this.setState({ order: currentName })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { user, msgAlert, history } = this.props

    createOrder(this.state.order, user)
      .then(() => history.push('/my-orders'))
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
    const { showHideForm, showHideOrder } = this.state
    return (
      <>
        <h2 className='page-title'>Lets order some coffee!</h2>
        {showHideForm &&
          <OrderForm order={this.state.order} drink={this.state.drink} onDrinkOption={this.onDrinkOption} addDrink={this.addDrink} />
        }
        {showHideOrder &&
          <CompleteOrder order={this.state.order} hideComponent={this.hideComponent} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        }
      </>
    )
  }
}

export default withRouter(CreateOrder)

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { showOrder, updateOrder } from '../../api/order'
import OrderForm from './Form'
// import Accordion from 'react-bootstrap/Accordion'

class UpdateOrder extends Component {
  constructor (props) {
    super(props)

    this.state = {
      order: null
    }
  }

  componentDidMount () {
    const { match, user, msgAlert } = this.props

    showOrder(match.params.id, user)
      .then(res => this.setState({ order: res.data.order }))
      .then(() => {
        msgAlert({
          heading: 'Show Order Success',
          message: 'Check out your order',
          variant: 'success'
        })
      })
      .catch(error => {
        msgAlert({
          heading: 'Show Order Failed',
          message: 'Something went wrong: ' + error.message,
          variant: 'danger'
        })
      })
  }

  handleEdit = (event) => {
    event.preventDefault()
    const id = event.target.getAttribute('id')
    const { order } = this.state
    const drink = order.drinks.find(drink => drink._id === id)
    this.setState({ drink: drink })
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
    const drink = this.state.order.drinks.find(drink => drink._id === this.state.drink._id)
    const index = currentOrder.drinks.indexOf(drink)
    console.log(index)
    currentOrder.drinks[index] = this.state.drink
    console.log(currentOrder.drinks)
    this.setState({ order: currentOrder })
    console.log(this.state.order)
    console.log(this.state.drink)

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

    const { user, msgAlert, history } = this.props

    updateOrder(this.state.order, this.state.order._id, user)
      .then(() => history.push('/my-orders'))
      .then(() => msgAlert({ heading: 'Order Updated!', message: 'Coffee Time!', variant: 'success' }))
      .catch(err => {
        msgAlert({
          heading: 'Order update failed :(',
          message: 'Something went wrong: ' + err.message,
          variant: 'danger'
        })
      })
  }

  render () {
    const { order } = this.state
    let drinkJSX
    if (order === null) {
      drinkJSX = 'Loading...'
    } else {
      drinkJSX = order.drinks.map(drink => (
        <div key={drink._id}>
          <p>
            {drink.size} {drink.drinkType}, milk: {drink.milk }, sweetness level: {drink.sugarLevel}%
            <button onClick={this.handleEdit} id={drink._id}>edit</button>
          </p>
        </div>
      ))
    }
    return (
      <>
        <h4>Update Order</h4>
        <div>
          {drinkJSX}
        </div>
        {this.state.drink ? <OrderForm order={this.state.order} drink={this.state.drink} onDrinkOption={this.onDrinkOption} addDrink={this.addDrink} handleChange={this.handleChange} handleSubmit={this.handleSubmit} /> : ''}
      </>
    )
  }
}

export default withRouter(UpdateOrder)

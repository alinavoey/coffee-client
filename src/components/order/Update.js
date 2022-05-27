import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { showOrder, updateOrder } from '../../api/order'
import OrderForm from './Form'
import CompleteOrder from './Complete'

class UpdateOrder extends Component {
  constructor (props) {
    super(props)

    this.state = {
      order: null,
      drink: {
        drinkType: '',
        milk: '',
        sugarLevel: 0,
        size: ''
      },
      idx: undefined,
      showHideForm: false,
      showHideOrder: true
    }
    this.hideComponent = this.hideComponent.bind(this)
    // this.handleEdit = this.handleEdit.bind(this)
    // this.handleRemove = this.handleRemove.bind(this)
  }

  hideComponent () {
    this.setState({ showHideOrder: !this.state.showHideOrder, showHideForm: !this.state.showHideForm })
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

    const drink = order.drinks[id]
    this.setState({ drink: drink, idx: id })
    this.hideComponent()
  }

  handleRemove = (event) => {
    event.preventDefault()
    const id = event.target.getAttribute('id')
    const { order } = this.state

    order.drinks.splice(id, 1)
    this.setState({ order: order })

    this.updatePrice()
  }

  onDrinkOption = (event) => {
    // set the value of drink state based on user selection
    const currentDrink = { ...this.state.drink, [event.target.name]: event.target.value }
    this.setState({ drink: currentDrink })
  }

  addDrink = (event) => {
    event.preventDefault()
    const currentOrder = this.state.order
    const idx = this.state.idx

    if (idx) {
      currentOrder.drinks[idx] = this.state.drink
    } else {
      currentOrder.drinks.push(this.state.drink)
    }

    this.setState({ order: currentOrder, drink: { sugarLevel: 0 }, idx: undefined })
    this.updatePrice()
    this.hideComponent()
  }

  updatePrice = () => {
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

    const orderTotal = (drinkTotal * 1.06).toFixed(2)
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
    const { showHideForm, showHideOrder, order } = this.state
    let drinkJSX
    if (order === null) {
      drinkJSX = 'Loading...'
    }
    return (
      <>
        <h2 className='page-title'>Update Order</h2>
        <div>
          {drinkJSX}
        </div>
        {showHideForm && <OrderForm order={this.state.order} drink={this.state.drink} onDrinkOption={this.onDrinkOption} addDrink={this.addDrink} />}
        {order && showHideOrder &&
          <CompleteOrder order={this.state.order} hideComponent={this.hideComponent} handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleEdit={this.handleEdit} handleRemove={this.handleRemove}/>
        }
      </>
    )
  }
}

export default withRouter(UpdateOrder)

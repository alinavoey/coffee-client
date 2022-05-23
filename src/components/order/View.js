import React, { Component } from 'react'
import { indexOrders } from '../../api/order'
import Accordion from 'react-bootstrap/Accordion'

class ViewOrders extends Component {
  constructor (props) {
    super(props)

    this.state = {
      orders: null
    }
  }

  componentDidMount () {
    const { user, msgAlert } = this.props

    indexOrders(user)
      .then((res) => this.setState({ orders: res.data.orders }))
      .then(() => {
        msgAlert({
          heading: 'Index Success',
          message: 'Yippie indexed!',
          variant: 'success'
        })
      })
      .catch(error => {
        msgAlert({
          heading: 'Index Failed',
          message: 'Index Error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  // handlePending = (event) => {
  //   const { orders } = this.state
  //   event.preventDefault()
  //   orders.forEach(order => {
  //     document.getElementById('view-orders').innerHTML =
  //     'Order Name: ' + order.name + '<br> Price:' + order.price + '<br>'
  //     const drinks = order.drinks
  //     drinks.forEach(drink => {
  //       document.getElementById('view-orders').append(
  //         drink.size + ' ' + drink.drinkType + ' Milk: ' + drink.milk + ' ' + drink.sugarLevel + '% sweet'
  //       )
  //     })
  //   })
  // }

  render () {
    const { orders } = this.state
    let orderJSX
    if (orders === null) {
      orderJSX = 'You have no orders'
    } else {
      orderJSX = orders.map(order => (
        <Accordion.Item key={order._id} eventKey={order._id}>
          <Accordion.Header>{order.name} {order.createdAt}</Accordion.Header>
          <Accordion.Body>
            <p>order date: {order.createdAt}</p>
            <p>pick up time: </p>
            <p>order status: </p>
            {order.drinks.map(drink => (
              <p key={drink._id}>
                {drink.size} {drink.drinkType}, milk: {drink.milk }, sweetness level: {drink.sugarLevel}%
              </p>
            ))}
            price: ${order.price}
          </Accordion.Body>
        </Accordion.Item>
      ))
    }
    return (
      <>
        <h1>My Orders</h1>
        <button type='click' onClick={this.handlePending}>Pending Orders</button>
        <button type='click' onClick={this.handlePrevious}>Previous Orders</button>
        <div id='view-orders'></div>
        <Accordion>
          {orderJSX}
        </Accordion>
      </>
    )
  }
}

export default ViewOrders

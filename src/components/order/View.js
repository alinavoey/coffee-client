import React, { Component } from 'react'
import { deleteOrder, indexOrders } from '../../api/order'
import Accordion from 'react-bootstrap/Accordion'
import { withRouter } from 'react-router-dom'
import moment from 'moment'

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

  handleCancel = (event) => {
    event.preventDefault()
    const id = event.target.getAttribute('id')
    const { user, msgAlert } = this.props

    deleteOrder(id, user)
      .then(() => this.componentDidMount())
      .then(() => {
        msgAlert({
          heading: 'Order Canceled',
          message: 'Your order has been canceled',
          variant: 'success'
        })
      })
      .catch(error => {
        msgAlert({
          heading: 'Order cancelation failed',
          message: 'Something went wrong: ' + error.message,
          variant: 'danger'
        })
      })
  }

  render () {
    const { orders } = this.state
    const { history } = this.props
    const pickUpTime = (createdAt) => moment(createdAt).add(15, 'm')
    let orderJSX
    if (orders === null) {
      orderJSX = 'You have no orders'
    } else {
      orders.sort((a, b) => {
        if (moment(a.createdAt) > moment(b.createdAt)) {
          return -1
        }
        return 1
      })
      orderJSX = orders.map(order => (
        <Accordion.Item key={order._id} eventKey={order._id}>
          <Accordion.Header>{order.name} {moment(order.createdAt).format('LLL')}</Accordion.Header>
          <Accordion.Body>
            <p>Order Date: {moment(order.createdAt).format('LLL')}</p>
            <p>Pick Up Time: {pickUpTime(order.createdAt).format('LT')} </p>
            <p>Order Status: {pickUpTime(order.createdAt) > moment() ? 'Pending' : 'Complete'} </p>
            {order.drinks.map(drink => (
              <p key={drink._id}>
                {drink.size} {drink.drinkType}, Milk: {drink.milk }, Sweetness Level: {drink.sugarLevel}%
              </p>
            ))}
            <p>Price: ${order.price}</p>
            {pickUpTime(order.createdAt) > moment() &&
              <div className='modify-cancel-btns'>
                <button className='modify-btn' onClick={() => history.push(`/update-order/${order._id}`)}>Modify</button>
                <button className='cancel-btn' id={order._id} onClick={this.handleCancel}>Cancel Order</button>
              </div>
            }
          </Accordion.Body>
        </Accordion.Item>
      ))
    }
    return (
      <>
        <h2 className='page-title'>My Orders</h2>
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

export default withRouter(ViewOrders)

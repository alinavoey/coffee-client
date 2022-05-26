import React, { Component } from 'react'

class CompleteOrder extends Component {
  render () {
    return (
      <>
        <div id='order-section' className='order-details'>
          <h4>Order Details</h4>
          {this.props.order.drinks.map(drink => (
            <div key={drink._id}>
              <p>{drink.size} {drink.drinkType}, Milk: {drink.milk}, Sweetness Level: {drink.sugarLevel}%</p>
              <button className='update-btn' onClick={this.props.handleEdit} id={drink._id}>Update</button>
              <button className='remove-btn' onClick={this.props.handleRemove} id={drink._id}>Remove</button>
            </div>
          ))}
          <p><span className='order-price'>Total Price:</span> ${this.props.order.price}</p>
          <button onClick={this.props.hideComponent}>Add Another Drink</button>
          <hr></hr>

          <div className="order-name">
            <label> Enter your name
              <input
                required
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
                required
                type="text"
                name="email"
                placeholder='email'
                value = {this.props.order.email}
                onChange={this.props.handleChange}
              />
            </label>
          </div>

          <button onClick={this.props.handleSubmit} type='Submit'>Place Order</button>
        </div>
      </>
    )
  }
}

export default CompleteOrder

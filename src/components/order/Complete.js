import React, { Component } from 'react'

class CompleteOrder extends Component {
  render () {
    return (
      <>
        <form onSubmit={this.props.handleSubmit}>
          <div id='order-section' className='order-details'>
            <h4>Order Details</h4>
            {this.props.order.drinks.map((drink, idx) => {
              return (
                <div key={idx}>
                  <p>
                    {drink.size} {drink.drinkType}, Milk: {drink.milk}, Sweetness Level: {drink.sugarLevel}%
                    <button className='update-btn' onClick={this.props.handleEdit} id={idx}><img id={idx} src={process.env.PUBLIC_URL + '/icon-edit.png'}/></button>
                    <button className='remove-btn' onClick={this.props.handleRemove} id={idx}><img id={idx} src={process.env.PUBLIC_URL + '/icon-remove.png'}/></button>
                  </p>
                </div>
              )
            })}
            <p><span className='order-price'>Total Price:</span> ${Number(this.props.order.price).toFixed(2)}</p>
            <button type='button' className='add-another-drink-btn' onClick={this.props.hideComponent}>Add Another Drink</button>
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

            <button className='order-detail-btn' type='Submit'>Place Order</button>
          </div>
        </form>
      </>
    )
  }
}

export default CompleteOrder

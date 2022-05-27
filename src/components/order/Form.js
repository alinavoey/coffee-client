import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import RangeSlider from 'react-bootstrap-range-slider'
import Col from 'react-bootstrap/Col'

class OrderForm extends Component {
  render () {
    return (
      <>
        <h2 className='page-title'>Lets order some coffee!</h2>
        <form onSubmit={this.props.addDrink}>
          {/* Drink images credit to Starbucks */}
          <div id='drink-section' className='drink-option'>
            <h4>Drink Selection</h4>
            <div className='drink-grid'>
              <label>
                <input
                  required
                  type="radio"
                  name="drinkType"
                  value='Coffee'
                  onChange={this.props.onDrinkOption}
                  checked={this.props.drink.drinkType === 'Coffee'}
                /> <img src={process.env.PUBLIC_URL + '/drink-coffee.jpg'}/> Coffee
              </label>
              <label>
                <input
                  type="radio"
                  name="drinkType"
                  value='Latte'
                  onChange={this.props.onDrinkOption}
                  checked={this.props.drink.drinkType === 'Latte'}
                /> <img src={process.env.PUBLIC_URL + '/drink-latte.jpg'}/> Latte
              </label>
              <label>
                <input
                  type="radio"
                  name="drinkType"
                  value='Americano'
                  onChange={this.props.onDrinkOption}
                  checked={this.props.drink.drinkType === 'Americano'}
                /> <img src={process.env.PUBLIC_URL + '/drink-americano.jpg'}/> Americano
              </label>
              <label>
                <input
                  type="radio"
                  name="drinkType"
                  value='Capuccino'
                  onChange={this.props.onDrinkOption}
                  checked={this.props.drink.drinkType === 'Capuccino'}
                /> <img src={process.env.PUBLIC_URL + '/drink-capp.jpg'}/> Capuccino
              </label>
            </div>
            <div className='arrow-down'><a href='#milk-section'><img src={process.env.PUBLIC_URL + '/arrow-down.png'}/></a></div>
          </div>

          <div id='milk-section' className='milk-option'>
            <div className='arrow-up'><a href='#drink-section'><img src={process.env.PUBLIC_URL + '/arrow-up.png'}/></a></div>
            <h4>Milk Option</h4>
            <div className='milk-grid'>
              <label>
                <input
                  required
                  type="radio"
                  name="milk"
                  value='Whole'
                  onChange={this.props.onDrinkOption}
                  checked={this.props.drink.milk === 'Whole'}
                /> <img className='milk-img' src={process.env.PUBLIC_URL + '/milk-whole.png'}/> Whole
              </label>
              <label>
                <input
                  type="radio"
                  name="milk"
                  value='Oat'
                  onChange={this.props.onDrinkOption}
                  checked={this.props.drink.milk === 'Oat'}
                /> <img className='milk-img' src={process.env.PUBLIC_URL + '/milk-oat.png'}/> Oat
              </label>
              <label>
                <input
                  type="radio"
                  name="milk"
                  value='Almond'
                  onChange={this.props.onDrinkOption}
                  checked={this.props.drink.milk === 'Almond'}
                /> <img className='milk-img' src={process.env.PUBLIC_URL + '/milk-almond.png'}/> Almond
              </label>
              <label>
                <input
                  type="radio"
                  name="milk"
                  value='None'
                  onChange={this.props.onDrinkOption}
                  checked={this.props.drink.milk === 'None'}
                /> <img className='milk-img' src={process.env.PUBLIC_URL + '/milk-none.png'}/> None
              </label>
            </div>
            <div className='arrow-down'><a href='#sugar-section'><img src={process.env.PUBLIC_URL + '/arrow-down.png'}/></a></div>
          </div>

          <div id='sugar-section' className='sugar-option'>
            <div className='arrow-up'><a href='#milk-section'><img src={process.env.PUBLIC_URL + '/arrow-up.png'}/></a></div>
            <h4>Sweetness Level</h4>
            <div className="d-flex align-items-center justify-content-center">
              <Col className='sugar-slider' xs="6">
                <RangeSlider
                  variant='success'
                  value={this.props.drink.sugarLevel}
                  name="sugarLevel"
                  min={0}
                  max={100}
                  step={10}
                  onChange={this.props.onDrinkOption}
                  tooltip="on"
                  tooltipPlacement='bottom'
                  size="lg"
                />
              </Col>
            </div>
            <div className='arrow-down'><a href='#size-section'><img src={process.env.PUBLIC_URL + '/arrow-down.png'}/></a></div>
          </div>

          <div id='size-section' className='size-option'>
            <div className='arrow-up'><a href='#sugar-section'><img src={process.env.PUBLIC_URL + '/arrow-up.png'}/></a></div>
            <h4>Drink Size</h4>
            <div className='size-grid'>
              <label>
                <input
                  required
                  type="radio"
                  name="size"
                  value='Small'
                  onChange={this.props.onDrinkOption}
                  checked={this.props.drink.size === 'Small'}
                /> <img className='form-size-s-img' src={process.env.PUBLIC_URL + '/drink-size.png'}/> Small
              </label>
              <label>
                <input
                  type="radio"
                  name="size"
                  value='Medium'
                  onChange={this.props.onDrinkOption}
                  checked={this.props.drink.size === 'Medium'}
                /> <img className='form-size-m-img' src={process.env.PUBLIC_URL + '/drink-size.png'}/> Medium
              </label>
              <label>
                <input
                  type="radio"
                  name="size"
                  value='Large'
                  onChange={this.props.onDrinkOption}
                  checked={this.props.drink.size === 'Large'}
                /> <img className='form-size-l-img' src={process.env.PUBLIC_URL + '/drink-size.png'}/> Large
              </label>
            </div>

            <div className='add-drink-btn'>
              <button type='submit'>Add Drink</button>
            </div>
          </div>
        </form>
      </>
    )
  }
}

export default withRouter(OrderForm)

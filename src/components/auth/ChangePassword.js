import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { changePassword } from '../../api/auth'
import { changePasswordSuccess, changePasswordFailure } from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class ChangePassword extends Component {
  constructor (props) {
    super(props)

    this.state = {
      oldPassword: '',
      newPassword: ''
    }
  }

handleChange = (event) =>
  this.setState({
    [event.target.name]: event.target.value
  })

onChangePassword = (event) => {
  event.preventDefault()

  const { msgAlert, history, user } = this.props

  changePassword(this.state, user)
    .then(() =>
      msgAlert({
        heading: 'Change Password Success',
        message: changePasswordSuccess,
        variant: 'success'
      })
    )
    .then(() => history.push('/'))
    .catch((error) => {
      this.setState({ oldPassword: '', newPassword: '' })
      msgAlert({
        heading: 'Change Password Failed with error: ' + error.message,
        message: changePasswordFailure,
        variant: 'danger'
      })
    })
}

render () {
  const { oldPassword, newPassword } = this.state

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3 className='auth-title'>Change Password</h3>
        <Form onSubmit={this.onChangePassword}>
          <Form.Group className='auth-form' controlId='oldPassword'>
            <Form.Label>Old password</Form.Label>
            <Form.Control
              required
              name='oldPassword'
              value={oldPassword}
              type='password'
              placeholder='Old Password'
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group className='auth-form' controlId='newPassword'>
            <Form.Label>New Password</Form.Label>
            <Form.Control
              required
              name='newPassword'
              value={newPassword}
              type='password'
              placeholder='New Password'
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button className='auth-btn' type='submit'>Submit</Button>
        </Form>
      </div>
    </div>
  )
}
}

export default withRouter(ChangePassword)
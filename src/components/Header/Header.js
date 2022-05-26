import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link, NavLink } from 'react-router-dom'

const authenticatedOptions = (
  <Fragment>
    <NavDropdown title="Account" id="nav-dropdown">
      <NavDropdown.Item><NavLink to='/my-orders' className='nav-link'>My Orders</NavLink></NavDropdown.Item>
      <NavDropdown.Item><NavLink to='/change-password' className='nav-link'>Change Password</NavLink></NavDropdown.Item>
      <NavDropdown.Item><NavLink to='/sign-out' className='nav-link'>Sign Out</NavLink></NavDropdown.Item>
    </NavDropdown>
    <NavLink to='/create-order' className='nav-link'>Order</NavLink>
    {/* <NavLink to='/my-orders' className='nav-link'>My Orders</NavLink>
    <NavLink to='/change-password' className='nav-link'>Change Password</NavLink>
    <NavLink to='/sign-out' className='nav-link'>Sign Out</NavLink> */}
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <NavLink to='/sign-up' className='nav-link'>Sign Up</NavLink>
    <NavLink to='/sign-in' className='nav-link'>Sign In</NavLink>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <NavLink exact to='/' className='nav-link'>Home</NavLink>
    <NavLink exact to='/menu' className='nav-link'>Menu</NavLink>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar className='navbar' variant='dark' expand='md'>
    <Navbar.Brand>
      <Link to='/' className='logo'><img className='icon-img' src={process.env.PUBLIC_URL + '/bean-icon.png'}/>The Coffee Bean</Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='ml-auto'>
        {user && (
          <span className='navbar-text mr-2'>Welcome, {user.email}</span>
        )}
        {alwaysOptions}
        {user ? authenticatedOptions : unauthenticatedOptions}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header

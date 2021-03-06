import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link, NavLink } from 'react-router-dom'

const authenticatedOptions = (
  <Fragment>
    <NavDropdown title="Account" id="collasible-nav-dropdown">
      <NavLink to='/my-orders'className='nav-link'>My Orders</NavLink>
      <NavLink to='/change-password' className='nav-link'>Change Password</NavLink>
      <NavLink to='/sign-out' className='nav-link'>Sign Out</NavLink>
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
  <Navbar collapseOnSelect className='navbar' variant='light' bg='light' expand='md'>
    <Navbar.Brand>
      <Link to='/' className='logo'><img className='icon-img' src={process.env.PUBLIC_URL + '/bean-icon.png'}/>The Coffee Bean</Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='responsive-navbar-nav' bg='light' variant='light' />
    <Navbar.Collapse id='responsive-navbar-nav'>
      <Nav className='ml-auto'>
        {/* {user && (
          <span className='navbar-text mr-2'>Welcome, {user.email}</span>
        )} */}
        {alwaysOptions}
        {user ? authenticatedOptions : unauthenticatedOptions}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header

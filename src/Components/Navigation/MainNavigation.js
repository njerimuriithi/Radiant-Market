//import { Button } from 'bootstrap';
import React from 'react'
import {Navbar,Container,Nav,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import {FaShoppingCart ,FaHeart } from 'react-icons/fa';
import './MainNavigation.css'
//import AllCategories from '../../Pages/AllCategories';
function MainNavigation() {
  return (
    <Navbar>
    <Container>
      
      <Nav className="me-auto">
          <Link to="SolarLights" className="mx-3">SolarLights</Link>
        
         <Link to="ContactUs" className="mx-3">Contact Us</Link>
      
      </Nav>
      <FaShoppingCart className="Icon"/>
      <FaHeart className="Icon"/>
    </Container>
  </Navbar>
  )
}

export default MainNavigation
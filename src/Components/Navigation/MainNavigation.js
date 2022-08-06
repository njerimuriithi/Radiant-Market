//import { Button } from 'bootstrap';
import React from 'react'
import {Navbar,Container,Nav,Button} from 'react-bootstrap'
import {FaShoppingCart ,FaHeart } from 'react-icons/fa';
function MainNavigation() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#">All Categories</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#">Contact Us</Nav.Link>
        <Nav.Link href="#">SolarLights</Nav.Link>
      
      </Nav>
      <Button><FaShoppingCart/></Button>{''}
      <Button><FaHeart/></Button>
    </Container>
  </Navbar>
  )
}

export default MainNavigation
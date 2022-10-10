import React from 'react'
import {Navbar,Container,Nav,Button} from 'react-bootstrap'
import { Link,useNavigate  } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {FaShoppingCart ,FaHeart } from 'react-icons/fa';
import './MainNavigation.css'

function MainNavigation() {
  const navigate = useNavigate()
  const totalQuantity = useSelector((state)=> state.cart.totalQuantity);

  
  return (
    <Navbar>
    <Container>
  
      <Nav className="me-auto">
          <Link to="/" className="mx-3">SolarLights</Link>
        
        
      </Nav>
      <p>{totalQuantity}</p>
      <FaShoppingCart onClick={() => navigate("AddtoCart")} className="Icon"/>
      
      <FaHeart className="Icon"/>
    </Container>
  </Navbar>
  )
}

export default MainNavigation
import React from 'react'

import{Container,Card,Row,Col} from'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './Footer.css'
function Footer() {
  const navigate =useNavigate();
  return (
    <Container fluid>
     <Row className='main sticky-bottom'>
        <Col>
        <Card className='Card'>
            <Card.Title className='text-center fs-3 fw-semibold'>Radiant Shop</Card.Title>
            <Card.Text className='fs-5'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna</Card.Text>
            <Card.Link className='fs-5'>Email @Radiantmarket.co.ke</Card.Link>
            <Card.Link className='fs-5'>0711414141141</Card.Link>    
        </Card>
        </Col>
        <Col>
        <Card className='Card'>
            <Card.Title className='text-start fs-3 '>Information</Card.Title>
            <Card.Body >
                <Card.Title className='fs-4'>About Us</Card.Title>
                <Card.Title className='mb-3 fs-4' onClick={() => navigate("ContactUs")}>Contact Us</Card.Title>
                <Card.Title className='fs-4'>My Orders</Card.Title>
                <Card.Title className='fs-4'>Terms Conditions& </Card.Title>
            </Card.Body>

        </Card>
        </Col>
     </Row>
    </Container>
  )
}

export default Footer
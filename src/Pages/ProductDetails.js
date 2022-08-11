import React from 'react';
import {Card ,Container,Row,Col,Button} from "react-bootstrap";
import {FaFacebook,FaTwitter } from 'react-icons/fa';
import './ProductDetails.css';
//import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function ProductDetails() {
  return (
    <Card>
      <Container fluid>
         <Row>
             
                <Col lg={2}>
                </Col>
    
            <Col lg={3}>
            <Card.Img variant="top" src={process.env.PUBLIC_URL +"./Assets/ProductImage/p1.jpg"} className ='img' />
            </Col>
            <Col lg ={6}>

            <Card.Body>
        <Card.Title>Solar Light 100w Led Top Quality Solar Floodlight Lamp</Card.Title>
        <Card.Title>Ksh2500      <span>Stars</span></Card.Title>
    
        <Button className='btn'>Buy Now!</Button>{' '}
        <Button  >Add Item to Cart</Button>{' '}

        <Card.Text>
        The  NEW CL -03  is a reliable solar lighting kit that has 
        3 low consumption LED bulbs and a USB multi adapter snake cable that allows
         you to charge your phones from an internal 6V4ah rechargeable lithium ion battery. 
         It is great for use in houses without electricity or when camping in the great outdoors. You can also use it when there is a power blackout.
      The battery gets its charge from the sun through a small 3-7W solar panel provided with the kit. 
      This panel can be put on a roof, outside a window or anywhere it will receive adequate light. 
       The unit has charge and status indicators to show you how much charge is left and at what rate it is charging.
      The plastic (non breakable) LED Lights can be connected simultaneously providing enough light for up to three rooms. 
       Each light can be individual switched on and off.
        </Card.Text>
          <Card.Text className="fw-bolder">Share this product</Card.Text>
          <Card.Link> <FaFacebook/></Card.Link>{''}
          <Card.Link><FaTwitter/></Card.Link>

        </Card.Body>
            
            </Col>
           
       
  
        </Row>  
      </Container>
       
      </Card>
    
    
        


    
  )
}

export default ProductDetails
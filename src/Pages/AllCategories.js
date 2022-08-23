import React from 'react'
//import ProductDetails from './ProductDetails'

import {Container ,Row, Col,Button} from 'react-bootstrap';

function AllCategories() {
  return (
    <div>
     <Container className='MainContents'>
        <Row>
          <Col lg={6}>
          <h2>Save More with solar lights</h2>
          <Button className='btn btn-outline-dark btn-lg'>Shop Now</Button>
          </Col>
          <Col lg={6}>
          <img  
         src={process.env.PUBLIC_URL +"./Assets/ProductImage/p1.jpg"}
         alt=''
        
         />
          </Col>
        </Row>
     </Container>

    </div>
  )
}

export default AllCategories
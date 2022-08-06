import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Container,Button,Form,Row,InputGroup,Col} from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa';
import './TopNavigation.css';

function TopNavigation() {
 return ( 
   <Navbar >
    <Container className='MainContainer'>
     <Row className='MainRow' >
    <Col lg={2} gap={3}>
     <Navbar.Brand  className='BrandLogo'>
         <img  
         src={process.env.PUBLIC_URL +"./Assets/logo.png"}
         alt=''
         width='100px'
         height='100px'
         />{''}
         Radiant Market
      </Navbar.Brand>
    </Col>

    <Col lg ={6}>
       <InputGroup className='Forms'>
       <Form>
          <Form.Group>
          <Form.Control 
          type="search" 
          placeholder="Search for products" 
          className="me-auto"
          aria-label="Search"
          />
          </Form.Group>
       </Form>
       <Button bg='dark'variant='dark'><FaSearch/></Button>
       </InputGroup>
   </Col>
   
     <Col lg={1}>
     <Button variant="outline-dark">Login</Button>{' '}
     </Col>
     <Col>
     <Button variant="outline-dark">Signup</Button>
     </Col>

  
</Row>
</Container>
   </Navbar>
  )
}

export default TopNavigation
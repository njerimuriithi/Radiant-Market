import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Container,Button,Form,Row,InputGroup,Col} from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa';
import './TopNavigation.css';
import { Link } from 'react-router-dom';

function TopNavigation() {
 return ( 
   <Navbar >
    <Container fluid>
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
          className="px-4"
          
          aria-label="Search"
          />
          </Form.Group>
       </Form>
       <Button bg='dark'variant='dark'><FaSearch/></Button>
       </InputGroup>
   </Col>
       

          <Col lg={2} className="btnItems">
     <Button variant="outline-dark" className="btnLogin">
      <Link to ="Login">Login</Link>
      </Button>{' '}
      <Button variant="outline-dark">Signup</Button>
     </Col>
   

   
    
  
</Row>
</Container>
   </Navbar>
  )
}

export default TopNavigation
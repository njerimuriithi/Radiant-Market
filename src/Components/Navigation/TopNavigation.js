import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Container,Button,Form,Row,InputGroup,Col} from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa';
import './TopNavigation.css';
import { Link ,useNavigate } from 'react-router-dom';

function TopNavigation() {
  const navigate = useNavigate();
 return ( 
   <Navbar >
    <Container fluid>
     <Row   className='MainRow'  >
      <Col lg={1} >
     <Navbar.Brand  className='BrandLogo'>
         <img  
         src={process.env.PUBLIC_URL +"./Assets/logo.png"}
         alt=''
         width='100px'
         height='100px'
         />
    </Navbar.Brand>
    </Col>
  
<Col lg={1}  className ='txt1'>
    <h2 className='brandName'>Radiant</h2>
    <h3 className='Name text-end'>Market</h3>   
   </Col>

    <Col lg ={6} >
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
       <Button bg='dark'variant='dark' ><FaSearch/></Button>
       </InputGroup>
   </Col>
    
     

          <Col lg={2} className="d-grid gap-2 d-md-flex justify-content-md-end ">
     <Button variant="outline-dark " className='myButton' onClick={()=>{navigate("/Login")}}>
      Login
       
      </Button>
      <Button variant="outline-dark" className='myButton' onClick={() => navigate("signup")}>Signup</Button>
      </Col>
   
   
        

   
    
  
</Row>
</Container>
   </Navbar>
  )
}

export default TopNavigation
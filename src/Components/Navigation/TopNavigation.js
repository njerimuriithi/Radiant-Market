import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Container,Button,Form,Row,InputGroup,Offcanvas,NavDropdown,Nav} from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa';
import './TopNavigation.css';
import { Link ,useNavigate } from 'react-router-dom';

function TopNavigation() {
  const navigate = useNavigate();
 return ( 
   <>
      {['sm'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
           <div lg={1} sm={4}  className ='txt1'>
    <h2 className='brandName'>Radiant</h2>
    <h3 className='Name text-end'>Market</h3>   
   </div>

              <InputGroup size='sm' className="mb-3">
            <Form.Control 
         
          type="search" 
          placeholder="Search for products" 
          
          
          aria-label="Search"
          />
             
       <Button bg='dark'variant='dark' ><FaSearch/></Button>
       </InputGroup>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='flex-end'/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Radiant Market
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Button variant="outline-dark " className='myButton' onClick={()=>{navigate("/Login")}}>
              Login    </Button>
    
      <Button variant="outline-dark" className='myButton' onClick={() => navigate("signup")}>Signup</Button>
      
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
 )
   {/*<Navbar >
    <Container fluid>
     <Row   className='MainRow'  >
      <Col lg={1} >
     <Navbar.Brand  className='BrandLogo img-fluid'>
         <img  
         src={process.env.PUBLIC_URL +"./Assets/logo.png"}
         alt=''
         width='100px'
         height='100px'
         />
    </Navbar.Brand>
    </Col>
  
<Col lg={1} sm={1} md={1}  className ='txt1'>
    <h2 className='brandName'>Radiant</h2>
    <h3 className='Name text-end'>Market</h3>   
   </Col>

    <Col lg ={6} sm={3} md={4}  >
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
 */}
  
}

export default TopNavigation
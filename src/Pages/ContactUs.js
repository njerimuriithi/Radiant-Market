import React from 'react'
import {Card, Stack,Container,Table,Form,Button,FloatingLabel} from 'react-bootstrap'
import{FaPhoneAlt,FaEnvelope,FaMapMarker} from 'react-icons/fa'
import Footer from './Footer/Footer';
import Login from './OtherPages/Login';
import './Product/ProductCard.css';
import ProductCarousel from './Product/ProductCarousel';

function ContactUs() {
  return (
    <div>
      <Container className='mt-5 mb-5'>
        <Table className='' borderless='true'>
       <thead className='align-middle  fs-4 fw-semibold' variant='dark'>
        <th>ContactUs</th>
       </thead>
       <tbody className='fs-5 fw-normal'>
        <tr size='sm'>
          <td className='tdata'><FaMapMarker size={25}/></td>
          <td>Mwimbi road  2541237887</td>
        </tr>
        <tr>
          <td className='tdata'><FaPhoneAlt size={25} color=''/></td>
          <td>0714678985</td>
        </tr>
        <tr>
          <td><FaEnvelope size={25}/></td>
          <td>@Radiantmarket.co.ke</td>
        </tr>
       </tbody>

  </Table>

        <div className='parent'>
         
          <Form  className='align-items-center forms'>
          <h2>Contact Us</h2>
            <Form.Group controlId='formBasicPhone'className='mb-3'>
              <Form.Control size="lg" type='Number' placeholder='Enter PhoneNumber'/>
            </Form.Group>

            <Form.Group controlId='formBasicEmail'className='mb-3' >
              <Form.Control  size="lg" type='Email' placeholder='Enter Emailaddress'/>
            </Form.Group>
                     
          <FloatingLabel controlId="floatingTextarea2" >
         <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
          size="lg"
        />
         </FloatingLabel>

         
            <Button className='TinyPurple' type='submit'>SEND </Button>
          </Form>

        </div>

      
      </Container>
     <ProductCarousel/>
     <Footer/>
  

  </div>

    
  )
}

export default ContactUs
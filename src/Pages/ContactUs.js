import React from 'react'
import {Card, Stack,Container,Table,Form,Button} from 'react-bootstrap'
import{FaPhoneAlt,FaEnvelope,FaMapMarker} from 'react-icons/fa'
import './ProductCard.css';

function ContactUs() {
  return (
      <Container className='mt-5'>
        <Table className='' borderless='true'>
       <thead className='align-middle  fs-4 fw-semibold' variant='dark'>
        <th>ContactUs</th>
       </thead>
       <tbody className='fs-5 fw-normal'>
        <tr size='sm'>
          <td className='tdata'><FaMapMarker size={25}/></td>
          <td>Location</td>
        </tr>
        <tr>
          <td><FaPhoneAlt size={25} color=''/></td>
          <td>Phone Number</td>
        </tr>
        <tr>
          <td><FaEnvelope size={25}/></td>
          <td>Email Adress</td>
        </tr>
       </tbody>

        </Table>

        <Card className='d-flex-End'>
          <Card.Title>Get in Touch</Card.Title>
          <Card.Text>Feel free to get in touch with us</Card.Text>
          <Form>
            <Form.Group controlId='formBasicPhone'>
              <Form.Control type='Number' placeholder='Enter PhoneNumber'/>
            </Form.Group>

            <Form.Group controlId='formBasicEmail'>
              <Form.Control type='Email' placeholder='Enter Emailadress'/>
            </Form.Group>

            <Form.Group controlId='formBasicComment'>
              <Form.Control type='Text' placeholder='Enter Comments/Suggestions'/>
            </Form.Group>
            <Button variant='' type='submit'>SEND </Button>
          </Form>

        </Card>
  
      </Container>
     
        

    
  )
}

export default ContactUs
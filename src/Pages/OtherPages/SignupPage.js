import React from 'react'
import {Form,Button,Container} from 'react-bootstrap'
import './OtherPage.css'

function SignupPage() {
  return (
    <Container className='mt-5'>
        <div className='signup'>
       <img  classname ='image' src={process.env.PUBLIC_URL +"./Assets/logo.png"} alt='logo'/>
       <h2>Signup</h2>
       </div>
     <Form>
      <Form.Group className="mb-3 fs-4 fw-semibold" controlId="formBasicEmail">
        <Form.Label >First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter First Name" />
          </Form.Group>

          <Form.Group className="mb-3 fs-4 fw-semibold" controlId="formBasicEmail">
        <Form.Label >Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter last name" />
          </Form.Group>

          <Form.Group className="mb-3 fs-4 fw-semibold" controlId="formBasicEmail">
        <Form.Label >Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" />
          </Form.Group>


      <Form.Group className="mb-3 fs-4 fw-semibold" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3 fs-4 fw-normal" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="I Agree with privacy and policy" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Sign up
      </Button>
    </Form>


    </Container>
  )
}

export default SignupPage
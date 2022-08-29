import React from 'react'
import { Card, Form ,Button,Container} from 'react-bootstrap'
import './OtherPage.css'
function Login() {
  return (
    <Container fluid className=' MainContent '>
        <Card className='MainCard' style={{ width: '10rem'  }}>
            <img  className='card-img' src={process.env.PUBLIC_URL +"./Assets/logo.png"} alt='logo'/>
        <h2 className='title mb-0'>Login</h2>
           
        </Card>
         
        <Form className='FormElement mt-3'>
      <Form.Group className="mb-3" controlId="formBasicPhone">
       <Form.Control type="phone" placeholder="Phone Number" />
          </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember password" />
      </Form.Group>
        <Form.Label>or login</Form.Label>

      
    </Form>

    <Button variant="primary" type="submit">
        Facebook
      </Button>

    </Container>
  )
}

export default Login
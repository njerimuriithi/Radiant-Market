import React from 'react'
import {Form,Button,Container} from 'react-bootstrap'
import './OtherPage.css'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';


function SignupPage() {
  return (
    <MDBContainer fluid className='p-4'>

    <MDBRow>

      <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

        <h1 className="my-5 display-3 fw-bold ls-tight px-3">
          The best Products <br />
          <span className="text-primary">Ever</span>
        </h1>

        <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          veritatis? Dicta facilis sint aliquid ipsum atque?
        </p>

      </MDBCol>

      <MDBCol md='6' style={{ backgroundColor: "#f8f9fa" }}>

        <MDBCard className='my-5'>
          <MDBCardBody className='p-5'>

            <MDBRow>
              <MDBCol col='6'>
                <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
              </MDBCol>

              <MDBCol col='6'>
                <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text'/>
              </MDBCol>
            </MDBRow>

            <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
            <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>

            <div className='d-flex justify-content-center mb-4'>
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
            </div>

            <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn>

            <div className="text-center">

              <p>or sign up with:</p>

              <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>

            </div>

          </MDBCardBody>
        </MDBCard>

      </MDBCol>

    </MDBRow>

  </MDBContainer>
  )
}

export default SignupPage
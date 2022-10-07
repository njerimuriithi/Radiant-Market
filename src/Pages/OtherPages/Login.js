import React from 'react'

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';

import './OtherPage.css'
function Login() {
  return (
    <MDBContainer className="my-5" style={{ backgroundColor: "#f8f9fa" }}>

    <MDBCard>
    <MDBRow className='d-flex justify-content-center align-items-center h-100'>

        

        <MDBCol md='6'>
          <MDBCardBody className='d-flex flex-column'>

            <div className='d-flex flex-row mt-2'>
              <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
              <span className="h1 fw-bold mb-0">Logo</span>
            </div>

            <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

              <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>

            <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Login</MDBBtn>
            <hr className="my-4" />

            <MDBBtn className="mb-2 w-100" size="lg" style={{backgroundColor: '#dd4b39'}}>
                <MDBIcon fab icon="google" className="mx-2"/>
                Sign in with google
              </MDBBtn>

              <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
                <MDBIcon fab icon="facebook-f" className="mx-2"/>
                Sign in with facebook
              </MDBBtn>


            <a className="small text-muted" href="#!">Forgot password?</a>
            <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="#!" style={{color: '#393f81'}}>Register here</a></p>

            <div className='d-flex flex-row justify-content-start'>
              <a href="#!" className="small text-muted me-1">Terms of use.</a>
              <a href="#!" className="small text-muted">Privacy policy</a>
            </div>

          </MDBCardBody>
        </MDBCol>

      </MDBRow>
    </MDBCard>

  </MDBContainer>
 
  )
}

export default Login
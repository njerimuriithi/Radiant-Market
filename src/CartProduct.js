import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem,
  MDBRipple,
  MDBRow,
  MDBTooltip,
  MDBTypography,
  } from "mdb-react-ui-kit";



function CartProduct({ProductImage,ProductName,ProductPrice}) {
   const {ProductsInCart} = useSelector((state)=> state.cart);

  return (

    
    
    <MDBContainer style={{ backgroundColor: "#f8f9fa" }}>
      <MDBRow >
        
        <MDBCol >
          <MDBCard className="mb-4">
            <MDBCardHeader className="py-3">
              <MDBTypography tag="h5" className="mb-0">
                Cart - 2 items
              </MDBTypography>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBRow>
                <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                  <MDBRipple rippleTag="div" rippleColor="light"
                    className="bg-image rounded hover-zoom hover-overlay">
                    <img
                      src={ProductImage}
                      className="w-100" />
                    <a href="#!">
                      <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" , }}>
                      </div>
                    </a>
                  </MDBRipple>
                </MDBCol>
  
                <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
                  <p>
                    <strong>{ProductName}</strong>
                  </p>
                  
  
                  <MDBTooltip wrapperProps={{ size: "sm" }} wrapperClass="me-1 mb-2"
                    title="Remove item">
                    <MDBIcon fas icon="trash" />
                  </MDBTooltip>
  
                  <MDBTooltip wrapperProps={{ size: "sm" , color: "danger" }} wrapperClass="me-1 mb-2"
                    title="Move to the wish list">
                    <MDBIcon fas icon="heart" />
                  </MDBTooltip>
                </MDBCol>
                <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                  <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                    <MDBBtn className="px-3 me-2">
                      <MDBIcon fas icon="minus" />
                    </MDBBtn>
  
                    <MDBInput defaultValue={1} min={0} type="number" label="Quantity" />
  
                    <MDBBtn className="px-3 ms-2">
                      <MDBIcon fas icon="plus" />
                    </MDBBtn>
                  </div>
  
                  <p className="text-start text-md-center">
                    <strong>{ProductPrice}</strong>
                  </p>
                </MDBCol>
              </MDBRow>
             
  
            </MDBCardBody>
          </MDBCard>
          </MDBCol>
        </MDBRow>
    </MDBContainer>

  
  
  )
}

export default CartProduct
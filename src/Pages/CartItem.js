import React from 'react'
import {useSelector} from 'react-redux'
import {Stack,Button} from 'react-bootstrap'
import { BsPlusSquareFill} from "react-icons/bs";
import { FaMinusSquare } from "react-icons/fa";
import SolarProductList from '../ProductsList/LightingData';
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
import CartProduct from '../CartProduct';

function CartItem() {
    const {totalQuantity,SolarProductList} = useSelector((state)=> state.cart);
    if (totalQuantity < 1){
    return(
      <div>
      <h1>Cart is Empty</h1>
      </div>
      
    )
  }
  
  return (

    <section className="h-100 gradient-custom" style={{ backgroundColor: "#f8f9fa" }}>
       
    <MDBContainer className="py-5 h-100" style={{ backgroundColor: "#f8f9fa" }}>
      <MDBRow className="justify-content-center my-4">
        <MDBCol md="8">
          <MDBCard className="mb-4">
            
            <MDBCardBody>
             
               {
                SolarProductList.map((product) =>{
                  return  <CartProduct
                  
                  key={product.id} 
                  id={product.id}
                  
                  
                  />
                      
                  
                })
               }
                  
                
             
  
              <hr className="my-4" />
  
             
            </MDBCardBody>
          </MDBCard>
  
          <MDBCard className="mb-4">
            <MDBCardBody>
              <p>
                <strong>Expected shipping delivery</strong>
              </p>
              <p className="mb-0">12.10.2020 - 14.10.2020</p>
            </MDBCardBody>
          </MDBCard>
  
          <MDBCard className="mb-4 mb-lg-0">
            <MDBCardBody>
              <p>
                <strong>We accept</strong>
              </p>
              <MDBCardImage className="me-2" width="45px"
                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                alt="Visa" />
              <MDBCardImage className="me-2" width="45px"
                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                alt="American Express" />
              <MDBCardImage className="me-2" width="45px"
                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                alt="Mastercard" />
              <MDBCardImage className="me-2" width="45px"
                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                alt="PayPal acceptance mark" />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4">
          <MDBCard className="mb-4">
            <MDBCardHeader>
              <MDBTypography tag="h5" className="mb-0">
                Summary
              </MDBTypography>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBListGroup flush>
                <MDBListGroupItem
                  className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Products
                  <span>$53.98</span>
                </MDBListGroupItem>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0">
                  Shipping
                  <span>Gratis</span>
                </MDBListGroupItem>
                <MDBListGroupItem
                  className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>Total amount</strong>
                    <strong>
                      <p className="mb-0">(including VAT)</p>
                    </strong>
                  </div>
                  <span>
                    <strong>$53.98</strong>
                  </span>
                </MDBListGroupItem>
              </MDBListGroup>
  
              <MDBBtn block size="lg">
                Go to checkout
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </section>
  




  )
}

export default CartItem
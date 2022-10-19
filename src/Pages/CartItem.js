import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Stack,Button} from 'react-bootstrap'
import { BsPlusSquareFill} from "react-icons/bs";
import { FaMinusSquare } from "react-icons/fa";
//import{RemoveFromCart} from '../store/addtocartSlice'
import{AddCart, ShowItemQuantity,RemoveFromCart,IncreaseQuantityItem,DecreaseQuantitityItem}  from'../store/addtocartSlice'
//import SolarProductList from '../ProductsList/LightingData';
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
    //const {totalQuantity} = useSelector((state)=> state.cart);
    const dispatch = useDispatch();
    const totalQuantity = useSelector((state)=> state.cart.totalQuantity);
    const ProductList = useSelector((item)=> item.cart.ProductList);

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
            <MDBCardHeader className="py-3">
              <MDBTypography tag="h5" className="mb-0">
              {totalQuantity} Cart  items
              </MDBTypography>
            </MDBCardHeader>
      
             
 
            {
                ProductList.map((item) =>(
                  <MDBCardBody key={item.id} >
                  <MDBRow>
                    <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                      <MDBRipple rippleTag="div" rippleColor="light"
                        className="bg-image rounded hover-zoom hover-overlay">
                        <img
                          src={item.ProductImage}
                          className="w-100" />
                        <a href="#!">
                          <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" , }}>
                          </div>
                        </a>
                      </MDBRipple>
                    </MDBCol>
      
                    <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
                      <p>
                        <strong>{item.ProductName}</strong>
                      </p>
                      
      
                      <MDBTooltip wrapperProps={{ size: "sm" }} wrapperClass="me-1 mb-2"
                       
                        title="Remove item">
                        <MDBIcon  onClick={()=>{
                          dispatch(RemoveFromCart(item.id));                                              
                       }}
                     fas icon="trash" />
                      </MDBTooltip>
      
                      <MDBTooltip wrapperProps={{ size: "sm" , color: "danger" }} wrapperClass="me-1 mb-2"
                        title="Move to the wish list">
                        <MDBIcon fas icon="heart" />
                      </MDBTooltip>
                    </MDBCol>
                    <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                      <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                        <MDBBtn className="px-3 me-2">
                          <MDBIcon fas icon="minus" 
                          onClick={()=>{
                            dispatch(DecreaseQuantitityItem(item.id));                                              
                         }}
                          />
                        </MDBBtn>
                        
                        <MDBInput defaultValue={item.totalQuantity} min={0} type="text" label="Quantity" />
      
                        <MDBBtn className="px-3 ms-2">
                          <MDBIcon fas icon="plus"
                          onClick={()=>{
                            dispatch(IncreaseQuantityItem(item.id));                                              
                         }}
                          />
                        </MDBBtn>
                      </div>
      
                      <p className="text-start text-md-center">
                        <strong>{item.ProductPrice}</strong>
                      </p>
                    </MDBCol>
                  </MDBRow>
                   
                </MDBCardBody>

                ))
            }
                      
                <hr className="my-4" />
                          
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
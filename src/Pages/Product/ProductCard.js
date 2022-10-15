import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import{AddCart, ShowItemQuantity}  from'../../store/addtocartSlice'
import SolarProductList from '../../ProductsList/LightingData';
import {Card,Button, Container,Row,Col} from 'react-bootstrap';
//import './ProductCard.css';
import { Link  } from 'react-router-dom';
import StarRating from '../StarRating';
import CartItem from '../CartItem';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBBtn,
  MDBRipple
} from "mdb-react-ui-kit";


function ProductCard() 
{
  const dispatch = useDispatch()
  //click function that handles the dispatch


  //state when you click add to

  {/* Show Products */ }
  return (
   
  <MDBContainer fluid className="my-5 text-center" style={{ backgroundColor: "#f8f9fa" }}>
  
  <MDBRow>
     {
      SolarProductList.map((item)=>(
        <MDBCol md="3" lg="2" sm="6" className="mb-4" key={item.id}>
        <MDBCard>
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image rounded hover-zoom"
          >
            <MDBCardImage
              src={item.ProductImage}
              fluid
              className="w-100"
            />
            <a href="#!">
              <div className="mask">
                <div className="d-flex justify-content-start align-items-end h-100">
                  <h5>
                
                  </h5>
                </div>
              </div>
              <div className="hover-overlay">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </div>
            </a>
          </MDBRipple>
          <MDBCardBody >
            <a href="#!" className="text-reset">
              <h5 className="card-title mb-3">
                {item.ProductName}
              </h5>
            </a>
            <a href="#!" className="text-reset">
             
            </a>
            <h6 className="mb-3">{item.ProductPrice}</h6>
            <div className="d-flex flex-row">
              <MDBBtn
                color="primary"
                rippleColor="dark"
                className="flex-fill ms-1"
               >
                Add To Cart
              </MDBBtn>
              <MDBBtn color="danger" className="flex-fill ms-2">
                Buy now
              </MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      ))
     }
   
    </MDBRow>
    </MDBContainer>
  
)}

export default ProductCard


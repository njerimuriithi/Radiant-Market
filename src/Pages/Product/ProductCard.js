import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import{increment}  from'../../store/addtocartSlice'
import SolarProductList from '../../ProductsList/LightingData';
import {Card,Button, Container,Row,Col} from 'react-bootstrap';
import './ProductCard.css';
import { Link  } from 'react-router-dom';
import { useState } from 'react';
import StarRating from '../StarRating';
import CartItem from '../CartItem';

function ProductCard() 
{
const dispatch = useDispatch()
  return (
    <Container fluid className='maincontainer p-0'>
      <Row sm={2} xs={2} md={5} className="g-2">
        
{
          SolarProductList.map((item)=>(
              <Col
                 style ={{
     }}
              >
      <Card className='MainCard '
      style ={{

        marginLeft:'5px',
          width:'250px',
             marginBottom:'14rem',
          
      }}
      
      key={item.id}>
    <Link to={`/seemore/${item.id}`}>
     
      <Card.Img variant="top"  src={item.ProductImage}
      className='img-fluid'
      style={{ width: '200px' }}
      
      />

      
      
      <Card.Body>
      <Card.Text className='MainText'>
       {item.ProductName}
      </Card.Text>
      <Card.Title className ='PriceText'>{item.ProductPrice}</Card.Title>
      <Card.Text className='PriceReduction'><s>{item.SubdizedPrice}</s></Card.Text>
      
   
      </Card.Body>
      
      </Link>
      <span className='StarRating'><StarRating/></span>

      
    </Card>
       </Col>
          ))
   }
   
      </Row>
    </Container>
  )
}

export default ProductCard
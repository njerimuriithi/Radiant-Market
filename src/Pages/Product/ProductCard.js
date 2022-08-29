import React from 'react'
import SolarProductList from '../../ProductsList/LightingData';
import {Card,Button, Container} from 'react-bootstrap';
import './ProductCard.css';
import { Link  } from 'react-router-dom';
import { useState } from 'react';
import StarRating from '../StarRating';
import CartItem from '../CartItem';
function ProductCard() 
{

  return (
    <Container className=''>
        

        {
          SolarProductList.map((item)=>(

      <Card className='MainCard 'key={item.id}>
    <Link to={`/seemore/${item.id}`}>
      <Card.Img variant="top" src={item.ProductImage} />
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

          ))
        }
      
    </Container>
  )
}

export default ProductCard
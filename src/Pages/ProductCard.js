import React from 'react'
import SolarProductList from '../ProductsList/LightingData';
import {Card,Button} from 'react-bootstrap';
import './ProductCard.css';
import { Link  } from 'react-router-dom';
//import SolarLights from './SolarLights';
import { useState } from 'react';
function ProductCard() 
{


const listItems = SolarProductList.map((item) =>
 
   <Card className='MainCard'key={item.id}>
      <Card.Img variant="top" src={item.ProductImage} />
      <Card.Body>
      <Card.Text className='MainText'>
       {item.ProductName}
      </Card.Text>
      <Card.Title className ='PriceText'>{item.ProductPrice}</Card.Title>
      <Card.Text className='PriceReduction'><s>{item.SubdizedPrice}</s></Card.Text>
      <span className='StarRating'>{item.StarRating}</span>
      <Link to={`/seemore/${item.id}`}> more product detais</Link>
   
      </Card.Body>
    </Card>
)

  return (
    <div className='mainContents'>
  {listItems}
 
    </div>
  )
}

export default ProductCard
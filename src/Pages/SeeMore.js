import React from 'react'
import { Link ,useParams  } from 'react-router-dom';
import {Card,Button} from 'react-bootstrap';
import './ProductCard.css';
import SolarProductList from '../ProductsList/LightingData';

function SeeMore() {
    //const { Itemid } = useParams()
//const product = SolarProductList.find((p) => p._id === Number(Itemid))


  //  const {Itemid} = useParams()
  //const items = SolarProductList.findIndex((product) => product.id ===
//(Itemid) );

const params = useParams()
console.log (params.Itemid)
console.log (typeof params.Itemid)

const listItems = SolarProductList.map((item) =>
 ( item.id ===Number(params.Itemid) &&
 <Card className='MainCard'key={item.id}>
      <Card.Img variant="top" src={item.ProductImage} />
      <p>{item.id}</p>
      <Card.Body>
      <Card.Text className='MainText'>
       {item.ProductName}
      </Card.Text>
      <Card.Title className ='PriceText'>{item.ProductPrice}</Card.Title>
      <Card.Text className='PriceReduction'>{item.SubdizedPrice}</Card.Text>
      <Card.Text>{item.Description}</Card.Text>
      <span className='StarRating'>{item.StarRating}</span>
     
   
      </Card.Body>
    </Card>
 
 )


)

const render = params.Itemid

  


  return (
    <div>
   <h1>{listItems}</h1>



    </div>
  )
}

export default SeeMore
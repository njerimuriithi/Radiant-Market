import React, { useState } from 'react';
import {Card ,Container,Row,Col,Button} from "react-bootstrap";
import {FaFacebook,FaTwitter } from 'react-icons/fa';
import './ProductDetails.css';
import { Link ,useParams  } from 'react-router-dom';
//import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import SolarProductList from '../ProductsList/LightingData';




function ProductDetails() {
  const params = useParams()
  //const [thumbnailSlider,setthumnailSlider] = useState(SolarProductList[0]);

  
  //console.log (params.Itemid)
  //console.log (typeof params.Itemid)
  
  const listItems = SolarProductList.map((item) =>
   ( item.id ===Number(params.Itemid) &&
   <Card  key={item.id}>
   <Container fluid>

    
      <Row>
           <Col lg={2}>
             </Col>
             <Col lg={3}>
         <Card.Img variant="top" src={`/${item.ProductImage}`} className ='Pimg' />
         <div>

          {
            SolarProductList.map((image,i) =>

              <Card.Img 
         src={`/${image.Thumbnail1}`}
         className='thumbanailImg'/>

          )}
       
         </div>
         
         </Col>
         <Col lg ={6}>
         <Card.Body>
     <Card.Title>{item.ProductName}</Card.Title>
     <Card.Title>{item.ProductPrice}      <span>Stars</span></Card.Title>
         <Button className='btn'>Buy Now!</Button>{' '}
     <Button  >Add Item to Cart</Button>{' '}
     <Card.Text>
        {item.Description}
     </Card.Text>
       <Card.Text className="fw-semibold">Share this product</Card.Text>
       <Card.Link> <FaFacebook/></Card.Link>{''}
       <Card.Link><FaTwitter/></Card.Link>
     </Card.Body>
        </Col>
            
       </Row>  
   </Container>
    
   </Card>
   
   )
  
  
  )
  
console.log(listItems)

  return (
    <div>
      
   <h1>{listItems}</h1>



    </div>
    
        


    
  )
}

export default ProductDetails
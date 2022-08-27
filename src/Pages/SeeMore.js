import React from 'react'
import { Link ,useParams  } from 'react-router-dom';
//import {Card,Button} from 'react-bootstrap';
import './Product/ProductCard.css';
import {Card ,Container,Row,Col,Button} from "react-bootstrap";
import {FaFacebook,FaTwitter } from 'react-icons/fa';
import './Product/ProductDetails.css';
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
 <Card>
 <Container fluid>
    <Row>
         <Col lg={2}>
           </Col>
           <Col lg={3}>
       <Card.Img variant="top" src={item.ProductImage} className ='img' />
       </Col>
       <Col lg ={6}>
       <Card.Body>
   <Card.Title>{item.ProductImage}</Card.Title>
   <Card.Title>{item.ProductPrice}      <span>Stars</span></Card.Title>
       <Button className='btn'>Buy Now!</Button>{' '}
   <Button  >Add Item to Cart</Button>{' '}
   <Card.Text>
      {item.Description}
   </Card.Text>
     <Card.Text className="fw-bolder">Share this product</Card.Text>
     <Card.Link> <FaFacebook/></Card.Link>{''}
     <Card.Link><FaTwitter/></Card.Link>
   </Card.Body>
      </Col>
          
     </Row>  
 </Container>
  
 </Card>
 
 )


)

//const render = params.Itemid

  


  return (
    <div>
   <h1>{listItems}</h1>



    </div>
  )
}

export default SeeMore
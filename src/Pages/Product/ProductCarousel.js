import React from 'react'
import Slider from 'react-slick'
import SolarProductList from '../../ProductsList/LightingData';
import {Button, Card, Container} from "react-bootstrap"
import './ProductCarousel.css';

function ProductCarousel() {
    const settings = {
        dots: true,
        infinite: false,
        autoplay:true,
        autoplayspeed:200,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              autoplay:true,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <Container >
             <Slider {...settings} className='Main' >
     {SolarProductList.map((Product) =>(

        <Card className='CardMain' key={Product.id}>
            
            <Card.Img src={Product.ProductImage} alt=''/>
            <Card.Title>{Product.ProductName}</Card.Title>
            <Card.Body>
            <Card.Text>{Product.ProductPrice}</Card.Text>
            </Card.Body>
          
         
        </Card>
       
        )) }


        </Slider>
  
     </Container>

       

   
  )
}

export default ProductCarousel
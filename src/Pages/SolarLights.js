import React from 'react'
//import ProductCard from './ProductCard'
import {Card,Button} from 'react-bootstrap';
import ProductCard from './ProductCard';
import './ProductCard.css';
import {useDispatch} from "react-redux";


function SolarLights() {
const dispatch = useDispatch(); 

const loadItem = () =>{
  dispatch(
    detailActions.loadItem({
        
    })
  )

}

  return (
<div onClick={loadItem}>
  <ProductCard/>
</div>
  )
}

export default SolarLights
import React from 'react'
import {Stack,Button} from 'react-bootstrap'
import { BsPlusSquareFill} from "react-icons/bs";
import { FaMinusSquare } from "react-icons/fa";

function CartItem() {
  return (
    <div>
    <Stack direction="horizontal" gap={3} className='justify-content-center'>
    <div className="">
        <img src={process.env.PUBLIC_URL +"./Assets/ProductImage/p1.jpg"}alt='image'/>
    </div>
    <div className="">
        <p className='fw-semibold fs-5'>Solar Light 100w Led Top Quality Solar Floodlight Lamp</p>
        <p className='fw-bold text-start fs-4 '>Ksh2600</p>
    </div>
    <div className='mx-1'>
        <BsPlusSquareFill size={40} color={'Red'}/>
    </div>
    <span className='fw-semibold fs-5'>3</span>
    <div>
        <FaMinusSquare size={40} color={'Red'}/>
    </div>
   
  </Stack>
  <Stack  className="col-md-3 mx-auto">
      <Button variant="secondary"className='fs-5 fw-semibold'>CheckOut</Button>
     
    </Stack>

</div>
  )
}

export default CartItem
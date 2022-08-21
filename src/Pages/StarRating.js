import React, { useState } from 'react'
import {FaStar } from 'react-icons/fa';


function StarRating() {

    const [rating, setRating]  = useState(null);
    const [hover , setHover] = useState(null);


  return (
    <div>
        
        { [...Array(5)].map((star , i) =>{
            const ratingValue =i +1;
            return ( 
            <label>
                    <input 
                    style={{display:'none'}} 
                    type='radio'
                     name ='rating' 
                     value={ratingValue}
                      onClick={()=> setRating(ratingValue)}/>
                    
                    <FaStar
                    color={(hover || ratingValue) <= rating ? "orange":"#efebf4"}
                    onMouseEnter ={()=> setRating(ratingValue)}
                     onMouseLeave ={()=> setRating(ratingValue)}
                    />

            </label>
            
        )})}
           

        
       </div>
  )
}

export default StarRating
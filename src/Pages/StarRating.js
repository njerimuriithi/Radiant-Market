import React, { useState } from 'react'
import {FaStar } from 'react-icons/fa';


function StarRating() {

    const [rating, setRating]  = useState(null);
    //const [hover , setHover] = useState(null);
     {/*onMouseEnter ={()=> setRating(ratingValue)}
                    onMouseLeave ={()=> setRating(ratingValue)}*/}

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
                    color={ ratingValue <= rating ? "orange":"#efebf4"}
                   

                    />

            </label>
            
        )})}
           

        
       </div>
  )
}

export default StarRating
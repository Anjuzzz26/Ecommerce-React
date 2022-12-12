import React from 'react'
import { Rating } from 'react-simple-star-rating'


export default function RatingSection(props) {
    
    const handleRating = (rate) => {}
    
  return (
    <div>
       <Rating onClick={handleRating} initialValue={props.rating} size={15}/>
    </div>
  )
}
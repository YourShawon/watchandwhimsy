"use client"
import React from 'react'

import ReactStars from "react-rating-stars-component"

const ratingChanged = (newRating: number) => {
  console.log(newRating);
}

const Rating = ({
  count, size, value, actionColor
}: {
  count: number;
  size: number;
  value: number;
  actionColor: string;
}) => {
  return (
    <div>
      <ReactStars
        count={count}
        onChange={ratingChanged} 
        size={size}
        value={value}
        actionColor={actionColor}
      />
    </div>
  )
}

export default Rating
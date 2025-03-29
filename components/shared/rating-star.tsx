'use client'
import React, { useState } from 'react'

const RatingStar = ({
  value = 0,
  editable = false,
  onChange
}: {
  value?: number
  editable?: boolean
  onChange?: () => void
}) => {
  const [rating, setRating] = useState(value)
  const handleClick = (ratingValue: number) => {
    setRating(ratingValue)
  }

  return (
    <div className='flex justify-start space-x-[2px]'>
      {Array.from({ length: 5 }, (_, idx) => (
        <svg
          className={`${rating <= idx ? 'fill-[#CED5D8]' : 'fill-[#facc15]'} ${editable ? 'hover:fill-[#facc15]' : ''} w-4 cursor-pointer`}
          viewBox='0 0 14 13'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          key={idx}
          {...(editable && { onClick: () => handleClick(idx + 1) })}
        >
          <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
        </svg>
      ))}
    </div>
  )
}

export default RatingStar

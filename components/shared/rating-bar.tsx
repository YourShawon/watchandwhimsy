import React from 'react'

const RatingBar = () => {
  return (
    <div className="space-y-4 max-w-md">
      <div className="flex items-center">
        <p className="text-base text-black-solid font-bold">5.0</p>
        <svg className="w-5 fill-black-solid ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
        </svg>
        <div className="bg-gray-300 rounded w-full h-4 ml-3">
          <div className="w-[66%] h-full rounded bg-[#facc15]"></div>
        </div>
        <p className="text-base text-black-solid font-bold ml-3">66%</p>
      </div>
      <div className="flex items-center">
        <p className="text-base text-black-solid font-bold">4.0</p>
        <svg className="w-5 fill-black-solid ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
        </svg>
        <div className="bg-gray-300 rounded w-full h-4 ml-3">
          <div className="w-[33%] h-full rounded bg-[#facc15]"></div>
        </div>
        <p className="text-base text-black-solid font-bold ml-3">33%</p>
      </div>
      <div className="flex items-center">
        <p className="text-base text-black-solid font-bold">3.0</p>
        <svg className="w-5 fill-black-solid ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
        </svg>
        <div className="bg-gray-300 rounded w-full h-4 ml-3">
          <div className="w-[16%] h-full rounded bg-[#facc15]"></div>
        </div>
        <p className="text-base text-black-solid font-bold ml-3">16%</p>
      </div>
      <div className="flex items-center">
        <p className="text-base text-black-solid font-bold">2.0</p>
        <svg className="w-5 fill-black-solid ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
        </svg>
        <div className="bg-gray-300 rounded w-full h-4 ml-3">
          <div className="w-[8%] h-full rounded bg-[#facc15]"></div>
        </div>
        <p className="text-base text-black-solid font-bold ml-3">8%</p>
      </div>
      <div className="flex items-center">
        <p className="text-base text-black-solid font-bold">1.0</p>
        <svg className="w-5 fill-black-solid ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
        </svg>
        <div className="bg-gray-300 rounded w-full h-4 ml-3">
          <div className="w-[6%] h-full rounded bg-[#facc15]"></div>
        </div>
        <p className="text-base text-black-solid font-bold ml-3">6%</p>
      </div>
    </div>
  )
}

export default RatingBar
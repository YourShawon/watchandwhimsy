import React from 'react'
import { Checkbox } from '../ui/checkbox'

const FilterCheckboxItem = () => {
  return (
    <div className='flex items-center space-x-2'>
      <Checkbox id='color' className='border border-[#ced4da]'/>
      <label htmlFor="color" className='text-[14px] leading-6 text-[#687188]'>
        Red
      </label>
    </div>
  )
}

export default FilterCheckboxItem
import React from 'react'
import { Checkbox } from '../ui/checkbox'

const FilterCheckboxItem = () => {
  return (
    <div className='flex items-center space-x-2'>
      <Checkbox id='color' className='border border-black-1/4 data-[state=checked]:bg-green-0x data-[state=checked]:text-white'/>
      <label htmlFor="color" className='text-[14px] leading-6 text-slate-6x'>
        Red
      </label>
    </div>
  )
}

export default FilterCheckboxItem
import React from 'react'
import FilterCheckboxItem from './filter-checkbox-item'

const FilterCheckbox = ({ title }: {
  title: string;
}) => {
  return (
    <div className='my-3'>
      <h5 className='mb-1 font-bold leading-6'>{title}</h5>
      <FilterCheckboxItem />
      <FilterCheckboxItem />
    </div>
  )
}

export default FilterCheckbox
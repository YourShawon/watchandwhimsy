import React from 'react'
import SidebarWidgetFrame from './sidebar-widget-frame'
import FilterCheckbox from './filter-checkbox'
import { Button } from '../ui/button'
import { Filter } from 'lucide-react'

const FillByPriceWidget = () => {
  return (
    <>
      <SidebarWidgetFrame title='Fill By Price'>
        {/* price range */}
        <p>Range:</p>
        <p></p>

        <FilterCheckbox title='Color'/>
        <FilterCheckbox title='Color'/>

        <Button variant="bgGreen" className='flex items-center space-x-2'>
          <Filter className='text-whtie w-6 h-6'/>
          Filter
        </Button>
      </SidebarWidgetFrame>
    </>
  )
}

export default FillByPriceWidget
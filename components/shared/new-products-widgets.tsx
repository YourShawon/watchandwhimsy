import React from 'react'
import SidebarWidgetFrame from './sidebar-widget-frame'
import HorizontalProductCard from './products/horizontal-product-card'


const NewProductWidget = () => {
  return (
    <>
      <SidebarWidgetFrame title='New Products'>
        <div className='flex flex-wrap'>
          <HorizontalProductCard />
        </div>
      </SidebarWidgetFrame>
    </>
  )
}

export default NewProductWidget
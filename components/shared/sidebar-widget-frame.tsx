import React from 'react'

const SidebarWidgetFrame = ({ children, title }: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className='mb-8 p-8 relative border border-white-5x'>
      <h5 className='relative border-b border-green-1x pb-3 text-base after:contents-[""] after:w-[50px] after:h-[2px] after:absolute after:bottom-0 after:left-0 after:bg-green-0x mb-6'>{title}</h5>

      {children}
      
    </div>
  )
}

export default SidebarWidgetFrame
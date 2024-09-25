import React from 'react'

const SidebarWidgetFrame = ({ children, title }: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className='mb-8 p-8 relative border border-[#e8e8e8]'>
      <h5 className='relative border-b border-[#e2e9e1] pb-3 text-base after:contents-[""] after:w-[50px] after:h-[2px] after:absolute after:bottom-0 after:left-0 after:bg-[#088178] mb-6'>{title}</h5>

      {children}
      
    </div>
  )
}

export default SidebarWidgetFrame
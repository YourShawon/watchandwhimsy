import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { FC } from 'react'
import { HeaderBottomProps } from '@/interface/header-interface'
import { headerCategoryList, NavbarList } from '@/constants/header'
import Link from 'next/link'
import Category from '@/public/icons/browsCategory'

const HeaderBottom: FC<HeaderBottomProps> = ({
  isOpen,
  handleOpenChange,
  handleToggle
}) => {
   
  return (
    <>
      <div className='container mb-5 hidden lg:block'>
        <div className='flex justify-between'>
          <div>
            <Popover open={isOpen} onOpenChange={handleOpenChange}>
              <PopoverTrigger
                onClick={handleToggle}
                className='flex cursor-pointer items-center gap-2 text-xl font-bold text-green'
              >
                <Category />
                Browse Categories
              </PopoverTrigger>
              <PopoverContent
                align='start'
                sideOffset={20}
                className={`popover-content-scroll left-[46px] top-4 hidden max-h-[554px] overflow-y-scroll scroll-smooth bg-white px-0 lg:block`}
              >
                <ul className='flex flex-col'>
                  {headerCategoryList.map(category => (
                    <li
                      key={category.id}
                      className='cursor-pointer border-b border-white-3x px-5 py-2 text-base capitalize transition duration-200 hover:bg-green-5x hover:text-green'
                    >
                      {category.title}
                    </li>
                  ))}
                </ul>
              </PopoverContent>
            </Popover>
          </div>
          <div className='flex gap-4'>
            {NavbarList.map(item => (
              <Link
                key={item.id}
                href={item.path}
                className='cursor-pointer text-base font-bold transition ease-in-out duration-200 hover:text-green'
              >
                {item.title}
                </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderBottom

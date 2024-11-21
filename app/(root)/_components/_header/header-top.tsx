import LocationIcon from '@/public/icons/locationIcon'
import MobileIcon from '@/public/icons/mobileIcon'
import UserIcon from '@/public/icons/userIcon'
import Link from 'next/link'

const HeaderTop = () => {
  return (
    <div className='hidden border-b-[3px] border-solid border-green-0x bg-green-3x lg:block'>
      <div className='container'>
        {/* header top */}
        <div className='flex items-center justify-between py-[10px]'>
          {/* left side */}
          <ul className='flex items-center gap-1'>
            <li className='flex items-center gap-1'>
              <MobileIcon />
              <Link href='tel:01234546789' className='cursor-pointer text-sm'>
                (+8801) - 23454 - 6789
              </Link>
            </li>
            <span className='text-white-4x'>|</span>

            <li className='flex items-center gap-1 text-sm'>
              <LocationIcon />
              <Link href={'/contact'} className='cursor-pointer text-sm'>
                Our Location
              </Link>
            </li>
          </ul>
          <ul>
            <li className='flex items-center gap-1 text-sm'>
              <UserIcon />
              <Link
                href={'/log-in'}
                className='cursor-pointer text-sm hover:underline'
              >
                Log In
              </Link>
              <span>/</span>
              <Link
                href={'/sign-up'}
                className='cursor-pointer text-sm hover:underline'
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop

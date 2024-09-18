import { FC } from 'react'

interface FavoriteIconProps {
  size?: number
  color?: string
  className?: string
}

const FavoriteIcon: FC<FavoriteIconProps> = ({ size = 24, className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path d='M12 21C12 21 4 14.5 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 4.1 13.5 5.57C14.09 4.1 15.76 3 17.5 3C20.58 3 23 5.42 23 8.5C23 14.5 15 21 15 21H12Z' />
    </svg>
  )
}

export default FavoriteIcon

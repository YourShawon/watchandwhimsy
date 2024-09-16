import { FC } from 'react'

interface EyeIconProps {
  size?: number // Optional prop to set the size of the icon
  color?: string // Optional prop to set the color of the icon
  isOpen?: boolean // Optional prop to toggle between open and closed eye
  onClick?: () => void // Optional click handler for the icon
  className?: string // Optional className for custom styling
}

const EyeIcon: FC<EyeIconProps> = ({
  size = 24,
  onClick,
  className
}) => {
  return (
    <svg
      onClick={onClick}
      width={size}
      height={size}
      viewBox='0 0 24 24'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' />
      <circle cx='12' cy='12' r='3' />
    </svg>
  )
}

export default EyeIcon

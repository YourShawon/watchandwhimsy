import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useTypewriter } from 'react-simple-typewriter'

const useHeader = () => {
  const path = usePathname()
  const [text] = useTypewriter({
    words: [
      'Man',
      'Woman',
      'kids',
      'Couples',
      'Minimalist Watch',
      'Leather',
      'Metal',
      'Smart Watch',
      'Digital Watch'
    ],
    loop: 0,
    typeSpeed: 50,
    deleteSpeed: 40,
    delaySpeed: 1000
  })

  const [isOpen, setIsOpen] = useState(true)
  const [open, setOpen] = useState(false)

  const handleSearch = () => {
    setOpen(!open)
  }
  const handleToggle = () => {
    setIsOpen(prev => !prev) // Toggle popover open state
  }

  const handleOpenChange = (open: boolean) => {
    if (open) {
      setIsOpen(true) // Allow opening
    } else if (!open && !isOpen) {
      setIsOpen(false) // Allow closing
    }
  }

  useEffect(() => {
    if (path !== '/') {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }, [path])

  return {
    text,
    isOpen,
    open,
    handleSearch,
    handleToggle,
    handleOpenChange,
    setOpen
  }
}

export default useHeader

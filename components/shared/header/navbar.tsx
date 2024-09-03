'use client'
import HeaderTop from './header-top'
import HeaderMiddle from './header-middle'
import HeaderBottom from './header-navlink'
import useHeader from './hook/useHeader'

const Navbar = () => {
  const {
    handleOpenChange,
    handleSearch,
    handleToggle,
    isOpen,
    open,
    setOpen,
    text
  } = useHeader()

  return (
    <header>
      <HeaderTop />

      <HeaderMiddle
        handleSearch={handleSearch}
        text={text}
        open={open}
        setOpen={setOpen}
      />

      {/* Card Nav */}
      <HeaderBottom
        isOpen={isOpen}
        handleOpenChange={handleOpenChange}
        handleToggle={handleToggle}
      />
      <hr />
    </header>
  )
}

export default Navbar

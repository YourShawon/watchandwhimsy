import Footer from '@/components/shared/footer/footer'
import Provider from './storeProvider'

import Navbar from "../_header/navbar";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Provider>
        <Navbar/>
        {children}
        <Footer />
      </Provider>
    </div>
  )
}

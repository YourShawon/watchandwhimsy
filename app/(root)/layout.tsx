
import Provider from './storeProvider'

import Navbar from "./_components/_header/navbar";
import Footer from './_components/footer';

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

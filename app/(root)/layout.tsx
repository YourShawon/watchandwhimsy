import Footer from '@/components/shared/footer/footer'
import Provider from './storeProvider'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Provider>
        {children}
        {/* <Footer /> */}
      </Provider>
    </div>
  )
}

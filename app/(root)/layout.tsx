import Footer from '@/components/shared/footer'
import Navbar from '@/components/shared/navbar'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Navbar /> {children}
      <Footer />
    </div>
  )
}

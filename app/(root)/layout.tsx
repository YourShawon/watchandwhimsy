
import Navbar from "../_header/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar/>
      {children}
    </div>
  );
}
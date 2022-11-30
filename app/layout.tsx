import "../styles/globals.css"
import NavBar from './NavBar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className="dark:bg-bg-black bg-white">
        <NavBar />
        {children}
        </body>
    </html>
  )
}

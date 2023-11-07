import './globals.css'
import Link from 'next/link'
import HireMeNow from './(components)/HireMeNow'
import NavBar from './(components)/NavBar'
import Footer from './(components)/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      
      <body className='flex flex-col justify-between font-mono h-screen bg-slate-200'>
        <HireMeNow />
        
        <div className='w-full sm:w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto'>
          <NavBar />
          {children}
        </div>

        <Footer />
      </body>
    </html>
  )
}

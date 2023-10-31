import './globals.css'
import Link from 'next/link'
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
        <nav>
          <ul className='flex'>
            <li className='p-2'><Link href="/">home</Link></li>
            {/* <li className='p-2'><Link href="/">about</Link></li> */}
            <li className='p-2'><Link href="/projects">portfolio</Link></li>
            <li className='p-2'><Link href="/blog">blog</Link></li>

            <li className='p-2'><Link href="/">contact</Link></li>
          </ul>
        </nav>
        <div className='mb-auto'>
          {children}
        </div>

        <footer className='flex items-center justify-center text-sm'>
          <div>
          {`© ${new Date().getFullYear()} Masroor K`}
          </div>
          <ul className='flex '>
            <li className='p-2'><Link href="/">home</Link></li>
            <li className='p-2'><Link href="/">contact</Link></li>
          </ul>
        </footer>
      </body>
    </html>
  )
}

import Image from 'next/image'
import { Inter } from '@next/font/google'


import AboutSection from './(components)/AboutSection'
import PortfolioSection from './(components)/PortfolioSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className=''>

        <div className='p-4 my-2'>
          <h1 className='text-2xl'>Welcome to my website!</h1>
          <p>I will post updates and relevant information on here. Thanks.</p>
        </div>

        <AboutSection />

        <PortfolioSection />
      </div>
    </main>
  )
}

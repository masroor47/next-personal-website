import Image from 'next/image'
import { Inter } from '@next/font/google'


import AboutSection from './(components)/AboutSection'
import PortfolioSection from './(components)/PortfolioSection'
import ResearchSection from './(components)/ResearchSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className=''>

        <AboutSection />

        <PortfolioSection />
      
        {/* <ResearchSection /> */}
      </div>
    </main>
  )
}

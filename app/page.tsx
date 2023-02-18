import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className='p-4'>
        <h1 className='text-xl font-semibold'>Welcome to my website!</h1>
        <p>I will post updates and relevant information on here. Thanks.</p>
      </div>
    </main>
  )
}

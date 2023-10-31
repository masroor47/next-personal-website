import Link from "next/link"

export default function Footer() {
  return(
    <footer className='flex items-center justify-center text-sm'>
      <div>
      {`© ${new Date().getFullYear()} Masroor K`}
      </div>
      <ul className='flex '>
        <li className='p-2 hover:underline hover:cursor-pointer'><Link href="/">home</Link></li>
        <li className='p-2 hover:underline hover:cursor-pointer'><Link href="/">contact</Link></li>
      </ul>
    </footer>
  )
}
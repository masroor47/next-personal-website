import Link from "next/link"

export default function Footer() {
  return(
    <footer className='flex items-center justify-center text-sm'>
      <div>
      {`© ${new Date().getFullYear()} Masroor K`}
      </div>
      <ul className='flex '>
        <li className='p-2'><Link href="/">home</Link></li>
        <li className='p-2'><Link href="/">contact</Link></li>
      </ul>
    </footer>
  )
}
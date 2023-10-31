import Link from "next/link"
import navLinks from "../data/navLinks"

export default function NavBar() {
  return (
    <nav>
      <ul className='flex ml-4'>
        {navLinks.map((item, id) => (
          <li 
            key={id}
            className='p-2 text-slate-600 transition ease-in-out delay-100 hover:text-slate-900'
          >
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
        
      </ul>
    </nav>
  )
}
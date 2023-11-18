import Link from "next/link"
import navLinks from "../data/navLinks"

export default function NavBar() {
  return (
    <nav>
      <ul className='flex ml-4'>
        {navLinks.map((item, id) => (
          <li 
            key={id}
            className='mx-2'
          >
            <Link 
              className='nav-link text-slate-500 transition ease-in-out duration-200 hover:text-slate-900'
              href={item.href}
            >
              {item.title}
            </Link>
          </li>
        ))}
        
      </ul>
    </nav>
  )
}
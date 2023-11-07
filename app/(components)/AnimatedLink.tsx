import Link from "next/link";

type AnimatedLinkProps = {
  text: string,
  href: string,
}

export default function AnimatedLink({text, href}: AnimatedLinkProps) {

  return (
    <div className="border-2 border-black p-1 transition ease-in-out delay-50 hover:bg-slate-800 hover:text-slate-200">
      <Link 
        className=""
        href={href}
      >
        {text}
      </Link>
    </div>
  )
}
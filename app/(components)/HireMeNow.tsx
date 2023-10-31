import Link from "next/link"

export default function HireMeNow() {
  return (
    <div className="mb-4">
      <div className="h-12 flex items-center justify-center bg-slate-600 text-slate-100">
        <h1>
          Hire me today!
        </h1>

        <Link href="#"
          className="ml-4 px-2 border-2 border-black bg-slate-800 transition ease-in-out delay-100 hover:text-slate-500 "
        >
          schedule a call -&gt;
        </Link>
      </div>
    </div>
  )
}
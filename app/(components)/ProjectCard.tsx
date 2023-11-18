import Link from "next/link"
import Image from "next/image"

type project = {
  title: string,
  img: string,
  link: string,
  description: string,
}

export default function ProjectCard({
  title,
  img,
  link,
  description,
}: project) {

  return (
    <Link
      className="w-72 mx-2 mb-12 border-2 border-blac"
      href={`/projects/${link}`}
    >
      <div className="w-full">
        <div className="mb-4 relative pt-[100%]">
          <Image
            className="w-full h-full top-0 left-0 object-cover"
            src={img}
            fill
            alt={title}
          />
        </div>

        <div className="p-2">
          <h1 className="text-lg mb-4">{title}</h1>
          <p className="text-sm">{description}</p>
        </div>

      </div>
    </Link>
  )
}
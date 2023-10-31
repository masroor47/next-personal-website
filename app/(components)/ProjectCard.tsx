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
      className="w-64 mx-2 mb-12"
      href={`/projects/${link}`}
    >
      <div className="w-full">
        <div className="mb-2">
          <Image 
            src={img}
            width={200}
            height={200}
            alt={title}
          />
        </div>

        <div>
          <h1 className="text-lg mb-4">{title}</h1>
          <p className="text-sm">{description}</p>
        </div>

      </div>
    </Link>
  )
}
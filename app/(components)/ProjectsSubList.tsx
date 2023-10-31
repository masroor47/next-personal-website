import Link from "next/link"
import ProjectCard from "./ProjectCard"
import programmingProjects from "../data/programmingProjects"
import AnimatedLink from "./AnimatedLink"

export default function ProjectsSubList() {



  return (
    <div>
      <ul className="flex justify-center mb-8">
        {programmingProjects.slice(0, 3).map((project, id) => (
          <ProjectCard
            key={id}
            title={project.title}
            img={project.img}
            link={project.link}
            description={project.description}
          />
        ))}
      </ul>
      <div className="flex justify-end mr-4">
        <AnimatedLink text="See all ->" href="/projects/"/>
      </div>
    </div>
  )
}
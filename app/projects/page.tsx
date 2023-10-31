import ProjectCard from "../(components)/ProjectCard"
import programmingProjects from "../data/programmingProjects"


export default function ProjectsPage() {


  return (
    <div>

      <h1>List of all of my projects:</h1>

      {programmingProjects.map((project, id) => (
        <ProjectCard
            key={id}
            title={project.title}
            img={project.img}
            link={project.link}
            description={project.description}
        />
      ))}
    </div>
  )
}
import ProjectCard from "../(components)/ProjectCard"
import programmingProjects from "../data/programmingProjects"

export default function ProjectsPage() {
  return (
    <div className="w-full min-h-screen flex justify-center">
      <div className="w-full max-w-6xl px-4 sm:px-6 py-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          My Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-items-center">
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
      </div>
    </div>
  )
}
import { featuredProjects } from '../pages/projects-data'
import Project from './Project'

export default function Projects() {
  return (
    <section id="projects" className="mb-32">
      <h2 className="text-2xl">02. Some Things I’ve Built</h2>
      <div>
        {featuredProjects.map((p) => (
          <Project project={p} key={p.id} />
        ))}
      </div>
    </section>
  )
}

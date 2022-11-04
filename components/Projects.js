import { featuredProjects } from '../pages/projects-data'
import Project from './Project'

export default function Projects() {
  console.log(featuredProjects)
  return (
    <section className="container ml-32">
      <h2 className="text-2xl">02. Some Things I’ve Built</h2>
      <div>
        {featuredProjects.map((p) => (
          <Project project={p} key={p.id} />
        ))}
      </div>
    </section>
  )
}

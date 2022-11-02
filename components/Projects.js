import { projects } from '../pages/projects-data'
import Project from './Project'

export default function Projects() {
  console.log(projects)
  return (
    <section className="container ml-32">
      <h2 className="text-2xl">02. Some Things I’ve Built</h2>
      <div>
        {projects.map((p) => (
          <Project project={p} key={p.id} />
        ))}
      </div>
    </section>
  )
}

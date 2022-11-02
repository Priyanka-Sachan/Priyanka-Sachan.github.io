import Image from 'next/image'
import Link from 'next/link'

export default function Project(props) {
  const project = props.project
  return (
    <section className="container my-8">
      <h6 className="text-sm uppercase text-slate-600">Featured Project</h6>
      <h3 className="text-xl">{project.name}</h3>
      {/* hover:grid-cols-1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 hover:grid-cols-1">
        <div>
          <img src="/blob-haikei.svg"/>
        </div>
        <div>
          <p>{project.description}</p>
          <div>
            {project.technologies.map((tag) => (
              <span
                className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
          <div>
            <Link href={project.demoUrl}>
              <Image
                className="inline m-1"
                src="/svg/external-link.svg"
                width="24"
                height="24"
              />
            </Link>
            <Link href={project.githubUrl}>
              <Image
                className="inline m-1"
                src="/svg/github.svg"
                width="24"
                height="24"
              />{' '}
            </Link>
            <Link href={project.blogUrl}>
              <Image
                className="inline m-1"
                src="/svg/info.svg"
                width="24"
                height="24"
              />{' '}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

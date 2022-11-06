import Image from 'next/image'
import Link from 'next/link'

export default function Project(props) {
  const project = props.project
  return (
    <section className="container m-4 p-4">
      <h6 className="text-sm uppercase text-slate-600">Featured Project</h6>
      <div className="flex flex-row gap-2 items-center">
        <h3 className="text-xl">{project.name}</h3>
        <Link href={project.blogUrl}>
          <Image
            className="inline m-1"
            src="/svg/info.svg"
            width="24"
            height="24"
          />
        </Link>
      </div>
      {/* hover:grid-cols-1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-end gap-2">
        <div>
          <img src={project.imageUrl} />
        </div>
        <div>
          <p className="drop-shadow-sm hover:drop-shadow-md bg-[#dfd3c3] p-2 rounded-r-lg rounded-bl-lg rounded-tl-none md:rounded-tl-lg md:rounded-bl-none">
            {project.description}
          </p>
          <div className='my-2'>
            {project.technologies.map((tag) => (
              <span
                className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 my-1 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
          <div>
            <Link href={project.githubUrl}>
              <Image
                className="inline m-1"
                src="/svg/github.svg"
                width="24"
                height="24"
              />
            </Link>
            <Link href={project.demoUrl}>
              <Image
                className="inline m-1"
                src="/svg/external-link.svg"
                width="24"
                height="24"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from 'next/image'
import Link from 'next/link'

export default function OtherProject(props) {
  const project = props.project
  return (
    <section className="m-2 p-4">
      <div>
        <div>
          <div className="flex flex-row justify-between items-center">
            <Image
              className="inline m-1 "
              src="/svg/folder.svg"
              width="48"
              height="48"
            />
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
          <div className="flex flex-row gap-2 items-center">
            <h3 className="text-xl">{project.name}</h3>
            <Link href={project.blogUrl}>
              <Image src="/svg/info.svg" width="24" height="24" />
            </Link>
          </div>
          <p>{project.description}</p>
        </div>
        <div className="flex flex-wrap">
          {project.technologies.map((tag) => (
            <span
              className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

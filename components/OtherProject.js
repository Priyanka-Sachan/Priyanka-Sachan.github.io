import Image from 'next/image'
import Link from 'next/link'

export default function OtherProject(props) {
  const project = props.project
  return (
    <section className="m-2 p-4 drop-shadow-sm rounded hover:mb-3 hover:mt-1 bg-[#dfd3c3] hover:drop-shadow-md">
      <div>
        <div>
          <div className="flex flex-row justify-between items-center mb-4">
            <Image
              className="inline m-1 "
              src="/svg/folder.svg"
              width="48"
              height="48"
            />
            <div>
              <a href={project.githubUrl}>
                <Image
                  className="inline m-1"
                  src="/svg/github.svg"
                  width="24"
                  height="24"
                />
              </a>
              <a href={project.demoUrl}>
                <Image
                  className="inline m-1"
                  src="/svg/external-link.svg"
                  width="24"
                  height="24"
                />
              </a>
            </div>
          </div>
          <h3 className="text-xl inline pr-2">{project.name}</h3>
          <Link href={project.blogUrl}>
            <img src="/svg/info.svg" className="inline w-5 align-sub" />
          </Link>

          <p className="text-md py-2">{project.description}</p>
        </div>
        <div className="flex flex-wrap">
          {project.technologies.map((tag) => (
            <span
              className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 my-1 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
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

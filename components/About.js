import { socialLinks } from '../public/data.json'

export default function About() {
  return (
    <section id="about-me" className="mb-32">
      <h2 className="text-2xl mb-4">01. About Me</h2>
      <div className="m-4 p-4">
        <p>
          My name is Priyanka Sachan and I enjoy creating things that live on
          the internet.
        </p>
        <p>
          My interest in development started back in 2014 with Turbo C++
          programs as part of my school curriculum.
        </p>
        <p>
          -- and felt at top of my world when I wrote 3000+ lines code for a
          train reservation app.
        </p>
        <p>
          Currently, I&apos;m an senior BTech student majoring in Computer Science at
          Indian Institute of Technology Patna (IITP) and have worked across
          multiple domains including mobile, web and decentralized app
          development.
        </p>
        <p className="inline">For more details, checkout my</p>
        <p className="relative group inline pl-2">
          <a
            href={socialLinks.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-white"
          >
            Resume
          </a>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-stone-500 transition-all group-hover:w-20"></span>
        </p>
        <p className="mt-2">
          Here are a few technologies I&apos;ve been working with recently:
        </p>
        <div className="grid grid-cols-2">
          <ul className="list-disc list-inside">
            <li>Solidity</li>
            <li>React</li>
            <li>Next</li>
          </ul>
          <ul className="list-disc list-inside">
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>Flutter</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

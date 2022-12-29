import { socialLinks } from '../public/data.json'

export default function Hero() {
  return (
    <section className="mt-28 mb-40">
      <h6 className="text-sm">Hi, my name is</h6>
      <h1 className="text-6xl">Priyanka Sachan.</h1>
      <h1 className="text-6xl text-slate-500 py-4">I build things for web. </h1>
      <h3 className="text-md text-slate-900 pt-4 pb-16">
        From mobile to desktop and decentralized systems
      <br></br>
        And then log it in my
        <p className="relative group inline pl-2">
          <a
            href={socialLinks.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-white"
          >
            second 🧠 
          </a>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-stone-500 transition-all group-hover:w-20"></span>
        </p>
      </h3>
    </section>
  )
}

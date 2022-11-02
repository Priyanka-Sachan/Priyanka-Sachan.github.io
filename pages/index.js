import Head from 'next/head'
import About from '../components/About'
import Hero from '../components/Hero'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Priyanka Sachan</title>
        <meta
          name="description"
          content="Hi, I am Priyanka Sachan. I build things for web (From mobile to desktop and decentralized systems)."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <Hero />
        <div className="w-screen h-40 bg-emerald-500"></div>
        <About />
        <div className="w-screen h-40 bg-emerald-500"></div>
        <Projects/>
        <div className="w-screen h-40 bg-emerald-500"></div>
      </div>
    </div>
  )
}

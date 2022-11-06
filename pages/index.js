import Head from 'next/head'
import About from '../components/About'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import OtherProjects from '../components/OtherProjects'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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
      <Navbar/>
      <div id="hello" className="container mx-auto p-8">
        <Hero />
        <About />
        <Projects />
        <OtherProjects />
        <Contact />
        <Footer/>
      </div>
    </div>
  )
}

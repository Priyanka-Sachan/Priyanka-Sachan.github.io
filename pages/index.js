import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Priyanka Sachan</title>
        <meta
          name="description"
          content="Hi, I am Priyanka Sachan. I build things for web (From mobile to desktop and dicentralized systems)."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <h1>Hello!</h1>
      </div>
    </div>
  )
}

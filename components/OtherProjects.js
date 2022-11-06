import Link from 'next/link'
import { otherProjects } from '../public/data.json'
import OtherProject from './OtherProject'

export default function OtherProjects() {
  console.log(otherProjects)
  return (
    <section className='mb-32'>
      <h2 className="text-2xl">03. Other Noteworthy Projects</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 m-2'>
        {otherProjects.map((p) => (
          <OtherProject project={p} key={p.id} />
        ))}
      </div>
    </section>
  )
}

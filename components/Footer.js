import Link from 'next/link'
import { socialLinks } from '../public/data.json'

export default function Footer() {
  return (
    <section id="contact" className="text-center">
      <h2 className="text-sm">
        Built by{' '}
        <a href={socialLinks.github} className="text-gray-700">
          Priyanka Sachan{' '}
        </a>
        with ☕
      </h2>
    </section>
  )
}

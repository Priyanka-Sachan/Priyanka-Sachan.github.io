import Link from "next/link"

export default function Contact() {
  return (
    <section id="contact" className="text-center mb-48">
      <h2 className="text-2xl">04. What's Next?</h2>
      <h1 className="text-4xl">Get in Touch</h1>
      <p>
        On the off chance that you might want to connect with me, be it for some
        business or innovation, or to simply say hello, don't hesitate to
        contact me.
      </p>
      <Link href="mailto:priyankasachanb9@gmail.com">
        <button
          type="button"
          class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-sm text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Say Hello
        </button>
      </Link>
    </section>
  )
}

import { useRef } from 'react'
import Link from './Link'

export default function Navbar() {
  const navBarMenu = useRef(null)
  function toggleNavbar(e) {
    navBarMenu.current.classList.toggle('hidden')
  }

  return (
    <nav className=" px-2 sm:px-4 py-2.5">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="#hello" className="flex items-center">
          <img src="/logo.png" className="h-8 mr-3 sm:h-9" />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none  dark:text-gray-400 "
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={toggleNavbar}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className=" hidden w-full md:block md:w-auto" ref={navBarMenu}>
          <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <li>
              <Link>
                <a
                  href="#about-me"
                  className="block py-2 px-3 text-gray-700 dark:text-white"
                  aria-current="page"
                >
                  About me
                </a>
              </Link>
            </li>
            <li>
              <Link>
                <a
                  href="#projects"
                  className="block py-2 px-3 text-gray-700 dark:text-white"
                >
                  Projects
                </a>
              </Link>
            </li>
            <li>
              <Link>
                <a
                  href="#contact"
                  className="block py-2 px-3 text-gray-700 dark:text-white"
                >
                  Contact
                </a>
              </Link>
            </li>
            <li>
              <Link>
                <a
                  href=""
                  className="block py-2 px-3 text-gray-700 dark:text-white"
                >
                  Resume
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

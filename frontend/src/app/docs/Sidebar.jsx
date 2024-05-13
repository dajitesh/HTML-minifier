import Link from 'next/link'
import React from 'react'

const componentList = [
  {
    name: 'Image Compression',
    link: '/docs/components/image-compression'
  },
  {
    name: 'Image Lazy Loader',
    link: '/docs/components/image-lazy-loading'
  },
  {
    name: 'Video Lazy Loader',
    link: '/docs/components/video-lazy-loading'
  },
  {
    name: 'Video Compression',
    link: '/docs/components/video-compression'
  },
  {
    name: 'File Minifier',
    link: '/docs/components/file-minifier'
  },

]

const Sidebar = () => {
  return (



    <>
      {/* Navigation Toggle */}
      <button
        type="button"
        className=" mt-24 ml-10 text-gray-500 hover:text-gray-600"
        data-hs-overlay="#docs-sidebar"
        aria-controls="docs-sidebar"
        aria-label="Toggle navigation"
      >
        <span className="sr-only">Toggle Navigation</span>
        <svg
          className="flex-shrink-0 size-8 sm-size-6"
          width={16}
          height={16}
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>
      {/* End Navigation Toggle */}
      {/* Sidebar */}
      <div
        id="docs-sidebar"
        className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-800 dark:border-neutral-700 mt-20"
      >
        <div className="px-6">
          <a
            className="flex-none text-xl font-semibold dark:text-white"
            href="#"
            aria-label="Brand"
          >
            Brand
          </a>
        </div>
        <nav
          className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open=""
        >
          <ul className="space-y-1.5">
            <li>
              <Link
                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
                href="/docs/getting-started"
              >
                Introduction
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
                href="/docs/components/image-compression"
              >
                Image compression
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
                href="/docs/components/video-compression"
              >
                Video compression
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
                href="/docs/components/lazy-loading"
              >
                Lazy Loading
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
                href="/docs/components/file-minifier"
              >
                File Minifier
              </Link>
            </li>

          </ul>
        </nav>
      </div>
      {/* End Sidebar */}
    </>








  )
}

export default Sidebar

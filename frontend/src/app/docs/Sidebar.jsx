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
    <div className="flex flex-col h-full p-3 w-60 dark:bg-gray-50 dark:text-gray-800 mt-16">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2>Dashboard</h2>
        </div>
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className="rounded-sm">
              <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">

                <span>Introduction</span>
              </a>
            </li>
            <li className="rounded-sm">
              <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">

                <span>Installation</span>
              </a>
            </li>
            <li className="rounded-sm">
              <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">

                <span>Chat</span>
              </a>
            </li>
            <li className="rounded-sm">
              <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">

                <span>Orders</span>
              </a>
            </li>
            <li className="rounded-sm dark:bg-gray-100 dark:text-gray-900">
              <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">

                <span>Wishlist</span>
              </a>
            </li>
            <li className="rounded-sm">
              <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">

                <span>Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default Sidebar

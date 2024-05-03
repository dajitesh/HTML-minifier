'use client'
import Link from "next/link";
import React, { useState } from "react";
import useUserContext from "../context/userContext";

const Navbar = () => {

  const { loggedIn, logout } = useUserContext();
  console.log(loggedIn);
  const showLoggedIn = () => {
    if (loggedIn) {
      return (
        <div className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2">
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">

            <button
              className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 flex sm:hidden"
               onClick={logout}
            >
              Logout
            </button>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <Link
            className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 flex sm:hidden"
            href="/login"
          >
            Login
          </Link>
          <Link
            className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 flex sm:hidden"
            href="/signup"
          >
            Signup
          </Link>
        </div>
      )
    }
  }

  return (
    <div>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-blue-100 border-b-2 border-cyan-700 text-sm py-4 dark:bg-neutral-800">
        <nav
          className="   max-w-[85rem] w-full mx-auto px-4 py-1 flex flex-wrap basis-full items-center justify-between z-50"
          aria-label="Global"
        >
          <Link
            className="sm:order-1 flex-none text-xl font-semibold dark:text-white"
            href="/"
          >
            Resource Minifier
          </Link>
          <div className="sm:order-3 flex items-center gap-x-2">
            <button
              type="button"
              className="sm:hidden hs-collapse-toggle p-2.5 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10"
              data-hs-collapse="#navbar-alignment"
              aria-controls="navbar-alignment"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1={3} x2={21} y1={6} y2={6} />
                <line x1={3} x2={21} y1={12} y2={12} />
                <line x1={3} x2={21} y1={18} y2={18} />
              </svg>
              <svg
                className="hs-collapse-open:block hidden flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
            <button type="button" className="hidden sm:flex ">
              <Link href='/login' className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-dark font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse"> Login
              </Link>
            </button>
            <button type="button" className="hidden sm:flex">
              <Link href='/signup' className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-dark font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse"> Signup
              </Link>
            </button>
          </div>
          <div
            id="navbar-alignment"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2"
          >
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
              <Link
                className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
                href="/docs/getting-started"
              >
                Docs
              </Link>
              <Link
                className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
                href="/about"
              >
                About
              </Link>
              <Link
                className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
                href="/contact"
              >
                ContactUs
              </Link>
               {
                showLoggedIn()
               }
            </div>
          </div>
        </nav>
      </header>

    </div>
  )
}

export default Navbar;

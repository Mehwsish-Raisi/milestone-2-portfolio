import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link"
import Image from "next/image"
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-200 border-t border-gray-400 body-font h-20 bg-gray-100  w-full bottom-0">
  <div className="container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image src="/m-logo-png-transparent.png" alt="m logo" width={100} height={100} className='w-20'/>
      <span className="text-xl font-semibold text-amber-600">Designs</span>
    </a>
    
    <p className="text-sm  text-amber-600 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-emerald-900 sm:py-2 sm:mt-0 mt-4">
      © 2024 Next.js
      
    </p>
    
    <span className="inline-flex  sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link target='_blank' href="https://www.linkedin.com/feed/" className="text-amber-600 mr-4">
      <FaLinkedin className='text-3xl hover:text-orange-900' />
      </Link>
      <Link target='_blank' href="https://www.linkedin.com/feed/" className="text-amber-600">
      <FaGithub className='text-3xl hover:text-orange-900' />
      </Link>
      
    </span>
    
  </div>
</footer>

    </div>
  )
}

export default Footer

import React from "react";
import Link from "next/link";
import Image from "next/image";



const Navbar = () => {
  return (
    <div className="relative z-50 sm:sticky top-0">
      
      <header className="body-font  lg:h-20 text-amber-600 border-b h-auto bg-gray-100 border-gray-400 ">
      
  <div className="container mx-auto flex flex-wrap p-5 flex-col sm:flex-row md:flex-row items-center  py-1">
    <a className="flex title-font font-medium items-center text-gray-900 mb-auto md:mb-0" href="/">
      <Image src="/m-logo-png-transparent.png" alt="m logo" width={100} height={100} className='w-20'/>
      <span className=" text-xl font-semibold text-amber-600">Designs</span>
    </a>
    
    <nav className="ml-auto flex flex-wrap items-center h-14 justify-center w-full sm:w-auto ">
    <ul className='flex space-x-6'>
            <li className='hover:text-orange-900 menuLink'><Link href="/">Home</Link></li>
            <li className='hover:text-orange-900 menuLink'><Link href="#about">About</Link></li>
            <li className='hover:text-orange-900 menuLink'><Link href="#contact">Contact</Link></li>
           <li className='hover:text-orange-900 menuLink'><Link href="#projects">Projects</Link></li>
         </ul>
         
    </nav>
    
  </div>
</header>
    </div>
    
  );
};

export default Navbar;

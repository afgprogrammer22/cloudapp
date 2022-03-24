import React, { useState } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link, animateScroll as scroll } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const handleClose = () => {
        setNav(!nav);
    }
  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
        <div className="flex justify-between items-center px-2 w-full h-full">
            <div className='flex items-center'>
                <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>CLOUD.</h1>
                <ul className="hidden md:flex">
                    <li>
                        <Link to="home" smooth={true} duration={500} style={{textDecoration: 'none', cursor: 'pointer'}}>
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={500} style={{textDecoration: 'none', cursor: 'pointer'}}>
                        About
                        </Link>
                    </li>
                    <li>
                        <Link to="support" smooth={true} duration={500} style={{textDecoration: 'none', cursor: 'pointer'}}>
                        Support
                        </Link>
                    </li>
                    <li>
                        <Link to="platforms" smooth={true} duration={500} style={{textDecoration: 'none', cursor: 'pointer'}}>
                        Platforms
                        </Link>
                    </li>
                    <li>
                        <Link to="pricing" smooth={true} duration={500} style={{textDecoration: 'none', cursor: 'pointer'}}>
                        Pricing
                        </Link>
                    </li>
                    
                </ul>
            </div>
            <div className='hidden md:flex pr-4'>
                <button className='border-none bg-transparent text-white mr-4'>Sign In</button>
                <button className='px-8 py-3'>Sign Up</button>
            </div>
            <div className='md:hidden' onClick={handleClick}>
                {!nav ? (<MenuIcon className='w-5' />) 
                    : (<XIcon className='w-5' />)
                }
                
            </div>
        </div>

        <ul className={!nav ? 'hidden' : 'absolute px-8 w-full bg-zinc-200'}>
        <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="home" smooth={true} duration={500}>Home</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'>
            <Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>
                About
            </Link>
          </li>

          <li className='border-b-2 border-zinc-300 w-full'>
            <Link onClick={handleClose} to="support" smooth={true} offset={-50} duration={500}style={{textDecoration: 'none', cursor: 'pointer'}}>
                Support
            </Link>
           </li>

          <li className='border-b-2 border-zinc-300 w-full'>
            <Link onClick={handleClose} to="platforms" smooth={true} offset={-100} duration={500}>
                Platforms
            </Link>
          </li>

          <li className='border-b-2 border-zinc-300 w-full'>
            <Link onClick={handleClose} to="pricing" smooth={true} offset={-50} duration={500}>
                Pricing
            </Link>
          </li>

            <div className='flex flex-col my-4'>
                <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
                <button className='px-8 py-3'>Sign Up</button>
            </div>
        </ul>

    </div>
  )
}

export default Navbar

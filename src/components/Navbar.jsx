import { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export const Navbar = () => {
  const [ nav, setNav ] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  return (
    <nav className='w-full h-[80px] bg-zinc-200 drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='w-full flex justify-between items-center'>
          <div>
            <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>BRAND.</h1>
          </div>
          <ul className='hidden md:flex'>
            <li>
              <Link to="home" spy={true} smooth={true} duration={500}>Home</Link>
            </li>
            <li>
              <Link to="about" spy={true} smooth={true} offset={-200} duration={500}>About</Link>
            </li>
            <li>
              <Link to="support" spy={true} smooth={true} offset={-80} duration={500}>Support</Link>
            </li>
            <li>
              <Link to="platforms" spy={true} smooth={true} offset={-100} duration={500}>Platforms</Link>
            </li>
            <li>
              <Link to="pricing" spy={true} smooth={true} offset={-80} duration={500}>Pricing</Link>
            </li>
          </ul>
        </div>
        <div className='md:hidden' onClick={handleClick}>
          {!nav ? <Bars3Icon className='w-5'/> : <XMarkIcon className='w-5'/>}

        </div>
      </div>{/* Brand Info */}
      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8 pb-4' }>
        <li className='border-b-2 border-zinc-300 w-full'>
          <Link onClick={handleClose} to="home" spy={true} smooth={true} duration={500}>Home</Link>
        </li>
        <li className='border-b-2 border-zinc-300 w-full'>
          <Link onClick={handleClose} to="about" spy={true} smooth={true} offset={-200} duration={500}>About</Link>
        </li>
        <li className='border-b-2 border-zinc-300 w-full'>
          <Link onClick={handleClose} to="support" spy={true} smooth={true} offset={-80} duration={500}>Support</Link>
        </li>
        <li className='border-b-2 border-zinc-300 w-full'>
          <Link onClick={handleClose} to="platforms" spy={true} smooth={true} offset={-100} duration={500}>Platforms</Link>
        </li>
        <li className='border-b-2 border-zinc-300 w-full'>
          <Link onClick={handleClose} to="pricing" spy={true} smooth={true} offset={-80} duration={500}>Pricing</Link>
        </li>
      </ul>
    </nav>
  )
}

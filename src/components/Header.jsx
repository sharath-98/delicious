import React from 'react'
import Logo from "../components/img/logo.png"

const Header = () => {
  return (
    <header className='fixed z-50 w-screen p-6 px-14'>
        <div className='hidden md:flex w-full h-full'>
            <div className='flex items-center gap-3'>
                <img src={Logo} className='w-11 object-cover'/>
                <p className='text-headingColor text-xl font-bold'>City</p>
            </div>
            <ul className='flex items-center gap-10 ml-auto'>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all cursor-pointer ease-in-out'>Menu</li>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all cursor-pointer ease-in-out'>Home</li>
                <li  className='text-base text-textColor hover:text-headingColor duration-100 transition-all cursor-pointer ease-in-out'>Location</li>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all cursor-pointer ease-in-out'>About Us</li>
            </ul>
            <div className='relative'>
                
            </div>
        </div>
        {/* For mobile view */}
        <div className='flex md:hidden w-full h-full'>

        </div>
    </header>
  )
}

export default Header
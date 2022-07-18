import React from 'react'
import Logo from "../img/logo.png"
import Avatar from "../img/avatar.png"
import {MdShoppingBasket} from "react-icons/md"
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from "../firebase"
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/Reducer'

const Header = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const [{user}, dispatch] = useStateValue();

    const handleLogin = async () => {
        await signInWithPopup(auth, provider).then((result) => {
            dispatch({
                type: actionType.SET_USER,
                user:result.user.providerData[0]
            })
        })
    };

  return (
    <header className='fixed z-50 w-screen p-6 px-14  bg-green-300'>
        <div className='hidden md:flex w-full h-full justify-between item-center'>
            <Link to='/' className='flex items-center gap-3'>
                <img src={Logo} className='w-12 object-cover'/>
                <p className='text-headingColor text-xl font-bold'>City</p>
            </Link>
            <div className="flex items-center gap-10">
                <ul className='flex items-center gap-10'>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all cursor-pointer ease-in-out'>Menu</li>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all cursor-pointer ease-in-out'>Home</li>
                    <li  className='text-base text-textColor hover:text-headingColor duration-100 transition-all cursor-pointer ease-in-out'>Location</li>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all cursor-pointer ease-in-out'>About Us</li>
                </ul>
                <div className='relative flex items-center justify-center '>
                    <MdShoppingBasket className=' text-textColor cursor-pointer text-2xl'/>    
                    <div className='w-6 h-6 rounded-full bg-cartNumBg flex items-center justify-center absolute -top-3.5 -right-2'>
                        <p className='text-xs text-white font-bold'>1</p>
                    </div>
                </div>
                <div className='relative'>
                    <motion.img whileTap={{scale:0.4}} onClick ={handleLogin} className='w-10 h-10 min-w-[40px] min-h-[40px] cursor-pointer' 
                    src={Avatar} alt="user_image"/>
                </div>
            </div>
        </div>
        {/* For mobile view */}
        <div className='flex md:hidden w-full h-full'>
        </div>
    </header>
  )
}

export default Header
import React from 'react'
import Logo from "../img/chef1.png"
import Avatar from "../img/avatar.png"
import {MdAdd, MdApartment, MdHome, MdInfo, MdLogout, MdMenu, MdShoppingBasket} from "react-icons/md"
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from "../firebase"
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/Reducer'
import { useState } from 'react'

const Header = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const [{user, showCheckout, cartItems}, dispatch] = useStateValue();
    const [menu, setMenu] = useState(false)

    const handleLogin = async () => {
        if(!user)
        {
            await signInWithPopup(auth, provider).then((result) => {
            dispatch({
                type: actionType.SET_USER,
                user:result.user.providerData[0]
            })
            localStorage.setItem('user', JSON.stringify(result.user.providerData[0]));
            })
        }
        else
        {
            setMenu(!menu);
        }
    };

    const handleNewItem= () =>{
        setMenu(!menu);
    }

    const handleBasket =() =>{
        dispatch({
            type:actionType.SET_CHECKOUT_SHOW,
            showCheckout: !showCheckout
        })
    }

    const handleLogout = () =>{
        localStorage.clear();
        dispatch({
            type:actionType.SET_USER,
            user:null
        })
        setMenu(!menu);

    }

  return (
    <header className='fixed z-50 w-screen p-3 px-4 md:px-16 md:p:6 bg-white'>
        <div className='hidden md:flex w-full h-full justify-between item-center'>
            <Link to='/' className='flex items-center gap-3'>
                <img src={Logo} className='w-20 object-cover'/>
                <p className='text-headingColor text-xl font-bold'>Delicious</p>
            </Link>
            <div className="flex items-center gap-10">
                <motion.ul 
                initial={{opacity:0, x:200}}
                animate={{opacity:1, x:0}}
                exit={{opacity:0, x:200}}
                className='flex items-center gap-10'>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all cursor-pointer ease-in-out'>Menu</li>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all cursor-pointer ease-in-out'>Home</li>
                    <li  className='text-base text-textColor hover:text-headingColor duration-100 transition-all cursor-pointer ease-in-out'>Location</li>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all cursor-pointer ease-in-out'>About Us</li>
                </motion.ul>
                <div className='relative flex items-center justify-center '>
                    <MdShoppingBasket onClick={handleBasket} className=' text-textColor cursor-pointer text-2xl'/>    
                    {
                        cartItems && cartItems.length > 0 &&
                        (
                            <div className='w-6 h-6 rounded-full bg-cartNumBg flex items-center justify-center absolute -top-3.5 -right-2'>
                                <p className='text-xs text-white font-bold'>{cartItems.length}</p>
                            </div>
                        )
                    }
                </div>
                <motion.div
                initial={{opacity:0, scale:0.6}}
                animate={{opacity:1, scale:1}}
                exit={{opacity:0, scale:0.6}}
                className='relative'>
                    <motion.img whileTap={{scale:0.4}} onClick ={handleLogin} className='w-10 h-10 min-w-[40px] min-h-[40px] rounded-full cursor-pointer' 
                    src={user ? user.photoURL : Avatar} alt="user_image"/>
                    {
                        menu && (
                            <div 
                            className='flex flex-col gap-3 w-60 px-2 py-2 right-0.5 bg-white shadow-xl rounded-lg absolute'>
                            {
                                user && user.email === "sharathchander.p@gmail.com" && (
                                    <Link to = '/newItem'>
                                        <p className='px-4 py-1 flex items-center gap-3 cursor-pointer hover:bg-white' onClick={handleNewItem}><MdAdd/>Add New Item</p>
                                    </Link>
                                )
                            }
                            <p className='px-4 py-1 flex items-center gap-3 cursor-pointer hover:bg-white' onClick={handleLogout}><MdLogout/>Logout</p>
                        </div>
                        )
                    }
                </motion.div>
            </div>
        </div>
        {/* For mobile view */}
        <div onClick={handleBasket} className='flex md:hidden w-full h-full items-start justify-between'>
            <div  className='relative w-10 h-10 flex items-center justify-center '>
                <MdShoppingBasket className=' text-textColor cursor-pointer text-2xl'/>    
                {
                    cartItems && cartItems.length > 0 &&
                    (
                        <div className='w-6 h-6 rounded-full bg-cartNumBg flex items-center justify-center absolute -top-3.5 -right-2'>
                            <p className='text-xs text-white font-bold'>{cartItems.length}</p>
                        </div>
                    )
                }
            </div>
            <Link to='/' className='flex items-center gap-3'>
                <img src={Logo} className='w-12 object-cover'/>
                <p className='text-headingColor text-xl font-bold'>Delicious</p>
            </Link>
            
            <motion.div
                initial={{opacity:0, scale:0.6}}
                animate={{opacity:1, scale:1}}
                exit={{opacity:0, scale:0.6}}
                className='relative'>
                    <motion.img whileTap={{scale:0.4}} onClick ={handleLogin} className='w-10 h-10 min-w-[40px] min-h-[40px] rounded-full cursor-pointer' 
                    src={user ? user.photoURL : Avatar} alt="user_image"/>
                    {
                        menu && (
                            <div 
                            className='flex flex-col gap-3 w-60 px-2 py-2 right-0.5 bg-white shadow-xl rounded-lg absolute'>
                            <ul className='px-4 py-1 flex flex-col gap-3'>
                                <li className='py-1 flex items-center gap-3 cursor-pointer hover:bg-white'><MdMenu/>Menu</li>
                                <li className='py-1 flex items-center gap-3 cursor-pointer hover:bg-white'><MdHome/>Home</li>
                                <li  className='py-1 flex items-center gap-3 cursor-pointer hover:bg-white'><MdApartment/>Location</li>
                                <li className='py-1 flex items-center gap-3 cursor-pointer hover:bg-white'><MdInfo/>About Us</li>
                            </ul>
                            {
                                
                                user && user.email === "sharathchander.p@gmail.com" && (
                                    <Link to = '/newItem'>
                                        <p className='px-4 py-1 flex items-center gap-3 cursor-pointer hover:bg-white' onClick={handleNewItem}><MdAdd/>Add New Item</p>
                                    </Link>
                                )
                            }
                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer shadow-md bg-slate-200 hover:bg-slate-300' onClick={handleLogout}><MdLogout/>Logout</p>
                        </div>
                        )
                    }
                </motion.div>
        </div>
    </header>
  )
}

export default Header
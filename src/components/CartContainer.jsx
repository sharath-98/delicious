import React, { useEffect, useState } from 'react'
import { MdBackspace, MdDeleteOutline, MdOutlineKeyboardBackspace } from 'react-icons/md'
import {motion} from 'framer-motion'
import {RiAddLine, RiRefreshFill, RiSubtractLine} from 'react-icons/ri'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/Reducer'
import EmptyCart from '../img/emptyCart.svg'
import CartItem from './CartItem'

const CartContainer = () => {
   const [{showCheckout, total, user, cartItems}, dispatch] = useStateValue();

    const handleBasket =() =>{
        dispatch({
            type : actionType.SET_CHECKOUT_SHOW,
            showCheckout: !showCheckout
        })
    }

    const handleRemoveAll= ()=>{
        dispatch({
            type:actionType.REMOVE_ALL,
            cartItems:[]
        })
        localStorage.setItem('cartItems', JSON.stringify([]))
    }

  return (
    <motion.div 
    initial={{opacity:0, x:200}}
    animate={{opacity:1, x:0}}
    exit={{opacity:0, x:200}}
     className='top-0 fixed right-0 w-full md:w-[455px] h-[100vh] bg-orange-100 drop-shadow-lg
    flex flex-col items-center z-[101]'>
        <div className='w-full cursor-pointer flex items-center justify-between p-2'>
            <motion.div whileTap={{scale:0.75}} >
                <MdOutlineKeyboardBackspace onClick={handleBasket} className='text-4xl text-textColor'/>
            </motion.div>
            <p className='text-textColor text-2xl font-semibold'>Cart</p>
            
            <motion.button whileTap={{scale:0.75}} onClick={handleRemoveAll} className='flex w-30 items-center justify-center  gap-2 text-white
                px-2 py-2 md:w-auto transition-all  duration-100 
                rounded-md text-sm hover:shadow-lg ease-in-out bg-gradient-to-br from-orange-300 to-orange-500'>
                Remove All <MdDeleteOutline/>
            </motion.button>
        </div>

        
        {
            cartItems && cartItems.length > 0 ? (
            <div className='w-full h-full bg-orange-300 flex flex-col rounded-t-[3rem]'>
             <div className='w-full h-[340px] md:h-[60%] px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none'>
                {/* Cart items */}
                
                {
                    cartItems && cartItems.length > 0 && cartItems.map((item)=>(
                        <CartItem key={item.id} data = {item}/>
                    ))
                }
            </div>
             {/* total section */}
                <div className='w-full flex-1 bg-orange-400 flex flex-col items-center justify-start
                px-8 py-3'>
                    <div className='w-full flex items-center justify-between'>
                        <p className='text-white  text-lg'>Sub Total</p>
                        <p className='text-white  text-lg'>$ {total}</p>
                    </div>
                    <div className='w-full flex items-center justify-between'>
                        <p className='text-white  text-lg'>Delivery Fee</p>
                        <p className='text-white  text-lg'>$ 2.5</p>
                    </div>
                    <div className='w-full flex items-center justify-between'>
                        <p className='text-white  text-lg'>Tax</p>
                        <p className='text-white  text-lg'>$ 3.4</p>
                    </div>
                    <div className='w-full border-b border-white my-2 p-1'></div>
                    <div className='w-full flex items-center justify-between'>
                        <p className='text-white  text-lg font-extrabold'>Total</p>
                        <p className='text-white  text-lg font-extrabold'>$ {total + 5.9}</p>
                    </div>
                    {
                        user ? (
                            <motion.button whileTap={{scale:0.75}} type="button" 
                            className='w-full p-2 rounded-full bg-orange-500 text-white font-extrabold  text-lg my-2 hover:shadow-lg transition-all 
                            duration-100 ease-in-out'>
                                Check Out
                            </motion.button>
                        ):
                        (
                            <motion.button whileTap={{scale:0.75}} type="button" 
                            className='w-full p-2 rounded-full bg-orange-500 text-white font-extrabold  text-lg my-2 hover:shadow-lg transition-all 
                            duration-100 ease-in-out'>
                                Login
                            </motion.button>
                        )
                    }
                </div>
             </div>
            ):
            (
                    <div className='w-full h-full flex flex-col items-center justify-center gap-5'>
                        <img src={EmptyCart} className='w-[300px]'/>
                        <p className='text-xl text-textColor font-semibold'>
                            Your cart is Empty.
                        </p>
                    </div>
            )
        }
    </motion.div>
  )
}

export default CartContainer
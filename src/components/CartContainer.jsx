import React from 'react'
import { MdBackspace, MdDeleteOutline, MdOutlineKeyboardBackspace } from 'react-icons/md'
import {motion} from 'framer-motion'
import {RiAddLine, RiRefreshFill, RiSubtractLine} from 'react-icons/ri'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/Reducer'

const CartContainer = () => {
   const [{showCheckout}, dispatch] = useStateValue();
    const handleBasket =() =>{
        dispatch({
            type : actionType.SET_CHECKOUT_SHOW,
            showCheckout: !showCheckout
        })
    }

  return (
    <div className='top-0 fixed right-0 w-full md:w-[455px] h-[100vh] bg-orange-100 drop-shadow-lg
    flex flex-col items-center z-[101]'>
        <div className='w-full cursor-pointer flex items-center justify-between p-2'>
            <motion.div whileTap={{scale:0.75}} >
                <MdOutlineKeyboardBackspace onClick={handleBasket} className='text-4xl text-textColor'/>
            </motion.div>
            <p className='text-textColor text-2xl font-semibold'>Cart</p>
            
            <motion.button whileTap={{scale:0.75}} className='flex w-30 items-center justify-center  gap-2 text-white
                px-2 py-2 md:w-auto transition-all  duration-100 
                rounded-md text-sm hover:shadow-lg ease-in-out bg-gradient-to-br from-orange-300 to-orange-500'>
                Remove All <MdDeleteOutline/>
            </motion.button>
        </div>

        <div className='w-full h-full bg-orange-300 flex flex-col rounded-t-[3rem]'>
             <div className='w-full h-[340px] md:h-[70%] px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none'>
                {/* Cart items */}
                <div className='w-full p-4 px-2 rounded-md bg-orange-200 flex items-center gap-2'>
                    <img className='w-[100px] h-[70px] max-w-[120px] rounded-full object-contain'
                     src='https://firebasestorage.googleapis.com/v0/b/delicious-e372a.appspot.com/o/Images%2F1658593668176-r4.png?alt=media&token=5dac6642-40b4-46b2-9b6f-b1b0c5c6b5b9'/>
                    <div className='flex flex-col gap-2'>
                        <p className='text-base text-gray-500'>
                            Chicken Fried Rice
                        </p>
                        <p className='text-sm block text-gray-500 font-semibold'>
                            $ 5.89
                        </p>
                    </div>
                    <div className='group flex items-center gap-2 ml-auto cursor-pointer'>
                        <motion.div whileTap={{scale:0.75}} className='font-semibold'>
                            <RiSubtractLine/>
                        </motion.div>
                            <p className='text-gray-500 font-bold'>1</p>
                        <motion.div whileTap={{scale:0.75}} className='font-semibold'>
                            <RiAddLine/>
                        </motion.div>
                    </div>
                </div>
                
                
             </div>
             {/* total section */}
             <div className='w-full flex-1 bg-orange-400 flex flex-col items-center justify-start
             px-8 py-3'>
                <div className='w-full flex items-center justify-between'>
                    <p className='text-white  text-lg'>Sub Total</p>
                    <p className='text-white  text-lg'>$ 8.5</p>
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
                    <p className='text-white  text-lg font-extrabold'>$ 8.5</p>
                </div>
                <motion.button whileTap={{scale:0.75}} type="button" 
                className='w-full p-2 rounded-full bg-orange-500 text-white font-extrabold  text-lg my-2 hover:shadow-lg transition-all 
                duration-100 ease-in-out'>
                    Check Out
                </motion.button>
             </div>
        </div>
    </div>
  )
}

export default CartContainer
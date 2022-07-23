import React from 'react'
import { MdShoppingBasket } from 'react-icons/md';
import { useStateValue } from '../context/StateProvider'
import {motion} from 'framer-motion'

const RowContainer = ({scrollableFlag}) => {
  
  const [{menu}, dispatch] = useStateValue();
  return (
    <div className = {`w-full my-12 
    ${scrollableFlag ? "overflow-x-scroll" : "overflow-x-hidden"}`}>
        <div className='w-300 my-12 bg-cardOverlay z-0 rounded-lg p-5 md:w-[330px] h-auto backdrop-blur-lg hover:drop-shadow-lg'>
            <div className='w-full flex items-center justify-between'>
                <motion.img whileHover = {{scale:1.2}} className='w-40 -mt-8' src="https://firebasestorage.googleapis.com/v0/b/delicious-e372a.appspot.com/o/Images%2F1658529177042-avatar.png?alt=media&token=9a6cbe00-29a3-4b61-994e-5ab8920f35b1"/>
                <motion.div whileTap = {{scale:0.75}} className='w-10 h-10 flex items-center justify-center cursor-pointer hover:shadow-lg rounded-full bg-red-400'>
                    <MdShoppingBasket className='text-white'/>
                </motion.div>
            </div>
            <div className='w-full flex flex-col items-end justify-end'>
                <p className='text-textColor text-lg font-semibold'>Name</p>
                <p className='mt-1 text-md text-gray-400'>Desc</p>
                <p className='mt-1 text-md text-gray-400'>30 Calories</p>
                <div className='flex items-center gap-8'>
                    <p className='text-lg text-textColor font-semibold'>
                        <span className='text-sm text-red-500'>$ </span>4.75
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RowContainer
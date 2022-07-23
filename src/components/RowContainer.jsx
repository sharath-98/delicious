import React from 'react'
import { MdShoppingBasket } from 'react-icons/md';
import { useStateValue } from '../context/StateProvider'
import {motion} from 'framer-motion'
import { useEffect } from 'react';
import { useRef } from 'react';
import NoItems from '../img/NotFound.svg'

const RowContainer = ({scrollableFlag, data, scrollVal}) => {
   
  const [{menu}, dispatch] = useStateValue();
  const rowContainer = useRef();

  useEffect(()=>{
    rowContainer.current.scrollLeft += scrollVal;
  }, [scrollVal]);

  return (
    <div ref={rowContainer}
    className = {`w-full my-4 flex items-center gap-3 scroll-smooth
    ${scrollableFlag ? "overflow-x-scroll scrollbar-none" : "overflow-x-hidden flex justify-center flex-wrap"}`}>
        {
            data?data.map((item) => (
                <div key={item.id} className='w-300 flex flex-col items-center justify-between gap-3 min-w-[300px]  my-12 bg-cardOverlay z-0 rounded-lg
                 p-5 md:w-[310px] md:min-w-[310px] h-[300px] backdrop-blur-lg hover:drop-shadow-lg'>
                    <div className='w-full h-[180px] flex items-center justify-between'>
                        <motion.img whileHover = {{scale:1.2}} className='w-40 h-full -mt-8' src={item?.imageURL}/>
                        <motion.div whileTap = {{scale:0.75}} className='w-10 h-10 flex items-center justify-center cursor-pointer hover:shadow-lg rounded-full bg-red-400'>
                            <MdShoppingBasket className='text-white'/>
                        </motion.div>
                    </div>
                    <div className='w-full flex flex-col items-end justify-end'>
                        <p className='text-textColor text-lg font-semibold'>{item?.title}</p>
                        <p className='mt-1 text-sm text-gray-400'>{item?.desc}</p>
                        <p className='mt-1 text-md text-gray-400'>{item?.calories} Calories</p>
                        <div className='flex items-center gap-8'>
                            <p className='text-lg text-textColor font-semibold'>
                                <span className='text-sm text-red-500'>$ </span>{item?.cost}
                            </p>
                        </div>
                    </div>
                </div>
            ))
        :
            <div className='w-full flex flex-col items-center gap-4 justify-center'>
                <img src={NoItems} className='w-[200px]'/>
                <p className='text-lg text-red-600'>Currently Not Available. Coming Soon.</p>
            </div>
        }
    </div>
  )
}

export default RowContainer
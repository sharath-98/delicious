import React, { useState } from 'react'
import Home from './Home'
import {motion} from 'framer-motion'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import RowContainer from './RowContainer'
import { useStateValue } from '../context/StateProvider'
import { useRef } from 'react'
import { useEffect } from 'react'

const MainContainer = () => {
  const [{menu}, dispatch] = useStateValue();
  const [scroll, setScroll] = useState(0);

  useEffect(()=>{

  }, [scroll])


  return (
    <div className='w-full mt-4 flex flex-col items-center justify-center'>
      <Home/>
      <section className='w-full my-7'>
        <div className='w-full flex items-center justify-between'>
          <p className='text-2xl font-semibold text-headingColor capitalize relative before:absolute
           before:rounded-lg before:content before:w-24 before:h-1 before:-bottom-2 before:left-0
           before:bg-gradient-to-br from-orange-300 to-orange-500 transition-all ease-in-out duration-100'>
            Fresh and Organic Fruits
          </p>
          <div className='hidden md:flex gap-3 items-center'>
            <motion.div whileTap={{scale:0.75}} className='w-8 h-8 rounded-lg cursor-pointer hover:shadow-lg transition-all duration-100 bg-orange-300 hover:bg-orange-500 flex items-center justify-center'>
              <MdChevronLeft onClick={()=> setScroll(-200)} className='text-2xl text-white'/>
            </motion.div>
            <motion.div whileTap={{scale:0.75}} className='w-8 h-8 rounded-lg cursor-pointer hover:shadow-lg transition-all duration-100 bg-orange-300 hover:bg-orange-500 flex items-center justify-center'>
              <MdChevronRight onClick={()=> setScroll(200)} className='text-2xl text-white'/>
            </motion.div>
          </div>
        </div>
        <RowContainer scrollVal = {scroll} scrollableFlag = {true} data = {menu?.filter(item => item.category === "fruits")}/>
      </section>
    </div>
  )
}

export default MainContainer
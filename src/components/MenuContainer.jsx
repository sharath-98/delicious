import React, { useState } from 'react'
import { useEffect } from 'react'
import { MdFastfood } from 'react-icons/md'
import { categories } from './data'
import {motion} from 'framer-motion'

const MenuContainer = () => {
    const [filterMenu, setFilterMenu] = useState('chicken')
    useEffect(()=>{

    }, [filterMenu]);

  return (
    <section className='w-full my-7' id="menu">
        <div className='w-full flex flex-col items-center justify-center'>
            <p className='text-2xl font-semibold text-headingColor capitalize relative before:absolute
           before:rounded-lg before:content before:w-24 before:h-1 before:-bottom-2 before:left-0 mr-auto
           before:bg-gradient-to-br from-orange-300 to-orange-500 transition-all ease-in-out duration-100'>
            Popular Dishes
          </p>
          <div className='w-full flex items-center justify-start lg:justify-center 
          gap-7 overflow-x-scroll scrollbar-none'>
            {
                categories && categories.slice(1).map((category => (
                    <motion.div whileTap={{scale:0.75}} key={category.id} className={`group flex flex-col items-center justify-center gap-3 ease-in-out duration-100
                    w-[125px] min-w-[125px] h-[120px] cursor-pointer drop-shadow-xl rounded-lg transition-all
                     my-7 hover:bg-orange-300 
                    ${filterMenu === category.url ? 'bg-orange-300':"bg-white"}`}
                    onClick={()=>setFilterMenu(category.url)}
                    >
                        <div className={`w-10 h-10 rounded-full bg-orange-300 group-hover:bg-card flex 
                        ${filterMenu === category.url ? 'bg-card':"bg-orange-300"} items-center justify-center`}>
                            <MdFastfood className={`${filterMenu === category.url ? "text-orange-300":"text-white"}
                             text-xl group-hover:text-orange-300
                            `}/>
                        </div>
                        <p className={`text-sm ${filterMenu === category.url ? "text-white":"text-orange-300"}
                         group-hover:text-white`}>{category.url}</p>
                    </motion.div>
                )))
            }
          </div>
        </div>
    </section>
  )
}

export default MenuContainer
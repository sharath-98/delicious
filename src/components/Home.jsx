import React from 'react'
import delivery from '../img/delivery.png'
import background from '../img/Bg.png'
import './Home.css'
import { imageData } from './data'
import CardImage from './CardImage'

const Home = () => {
  return (
    <section id="home" className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full'>
      <div className='py-2 flex-1 flex-col gap-5 flex items-start '>
        <div className='flex gap-3 items-center justify-center bg-orange-100 px-4 p-2 rounded-full'>
         <p className='text-base font-semibold text-orange-600'>
            Bike Delivery
          </p>
          <div className='w-7 h-7 rounded-full overflow-hidden bg-white'>
            <img src={delivery} className="w-full h-full object-contain"/>
          </div>
        </div>
        <p className='text-[3rem] lg:text-[4.2rem] font-bold tracking-wide text-headingColor'>The Fastest Delivery
          in 
          <span className='text-[3rem] lg:text-[4.5rem]  text-orange-600'> Your City</span>
        </p>
        <p className='text-base text-textColor md:w-[80%] text-center md:text-left'>
          Food is more than the culmination of its ingredients coming together in a complete recipe.  Food is more than fuel for our body.  Food is more than mere nutrition. Food is powerful because it taps into our emotions! 
        </p>
        <button className='text-white w-full px-4 py-3 md:w-auto transition-all  duration-100 rounded-md hover:shadow-lg ease-in-out bg-gradient-to-br from-orange-300 to-orange-500'>Order Now</button>
      </div>
      <div className='py-2 relative flex-1 flex items-center home_left_image'>
            <img src={background} className="ml-auto w-full lg:w-auto lg:h-full"/>
            <div className='w-full h-full flex-wrap gap-4 absolute left-0 top-0 px-32 flex flex-col items-center justify-center drop-shadow-lg'>
                {
                    imageData && imageData.map((item) => 
                        (
                            <CardImage key={item.id} src={item.src} id={item.id} name={item.name} desc = {item.desc} cost={item.cost}/>
                        )
                    )
                }
            </div>
      </div>
    </section>
  )
}

export default Home
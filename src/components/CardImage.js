import React from 'react'

const CardImage = ({ src, name, desc, cost}) => {
  return (
    
    <React.Fragment>
        <div className='md:w-[150px] lg:w-[190px] sm:w-[100px] p-2 m-4 -mt-30 ml-auto mr-auto flex flex-col items-center justify-center bg-cardOverlay rounded-lg'>
            <img src={src} className="w-[155px] sm:w-[120px] -mt-10 md:-mt-50"/>
            <p className=' text-headingColor font-semibold text-md my-1'>{name}</p>
            <p className=' text-textColor font-semibold text-md my-1'>{desc}</p>
            <p className='text-sm font-semibold text-headingColor'>
            <span className='text-sm text-red-500'>$</span> {cost}</p>
        </div>
    </React.Fragment>
  )
}

export default CardImage
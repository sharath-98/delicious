import React from 'react'

const CardImage = ({src, name, desc, cost}) => {
  return (
    
    <React.Fragment>
        <div className='w-45 p-1 min-w-[180px] flex flex-col items-center justify-center bg-cardOverlay rounded-lg'>
            <img src={src} className="w-28 -mt-50"/>
            <p className=' text-headingColor font-semibold text-md my-2'>{name}</p>
            <p className=' text-textColor font-semibold text-md my-2'>{desc}</p>
            <p className='text-sm font-semibold text-headingColor'>
            <span className='text-sm text-red-500'>$</span> {cost}</p>
        </div>
    </React.Fragment>
  )
}

export default CardImage
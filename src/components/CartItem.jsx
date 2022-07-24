import React, { useState } from 'react'
import { MdBackspace, MdDeleteOutline, MdOutlineKeyboardBackspace } from 'react-icons/md'
import {motion} from 'framer-motion'
import {RiAddLine, RiRefreshFill, RiSubtractLine} from 'react-icons/ri'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/Reducer'
import EmptyCart from '../img/emptyCart.svg'
import { useEffect } from 'react'

const CartItem = ({data}) => {
    const [qty, setqty] = useState(data.qty);
    const [{cartItems}, dispatch] = useStateValue();
    const [items, setitems] = useState([])
    const [flag, setflag] = useState(0)
    const [total, settotal] = useState(5.9)
    
    const cartDispatch = () =>{
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        dispatch({
            typeof:actionType.SET_CART_ITEMS,
            cartItems:items
        })
    }

    useEffect(()=>{
        setitems(cartItems);
        let totalCost = cartItems.reduce(function(accumulator, item){
            return accumulator + item.qty * item.cost;
        }, 0);
        dispatch({
            type: actionType.SET_TOTAL,
            total: totalCost
        })
    },[items, qty, flag, total]);

    const updateQty = (action, id) =>{
        
        if(action == 'add'){
            setqty(qty+1);
            setflag(flag+1)
            cartItems.map((item) => {
            if(item.id == id)
                item.qty +=1;         
            })
            cartDispatch();
        }
        else{
            if(qty == 1)
            {
                items = cartItems.filter((item)=>item.id !== id);
                cartDispatch();
                setflag(flag+1)
            }
            else
            {
                setqty(qty-1);
                cartItems.map((item) => {
                if(item.id === id)
                    item.qty -=1;         
                })
                cartDispatch();
                setflag(flag+1)
            }
        }
        
        
    }
  return (
    <div className='w-full p-4 px-2 rounded-md bg-orange-200 flex items-center gap-2'>
        <img className='w-[100px] h-[70px] max-w-[120px] rounded-full object-contain'
        src={data.imageURL}/>
        <div className='flex flex-col gap-2'>
            <p className='text-base text-gray-500'>
                {data.title}
            </p>
            <p className='text-sm block text-gray-500 font-semibold'>
                $ {data.cost * qty}
            </p>
        </div>
        <div className='group flex items-center gap-2 ml-auto cursor-pointer'>
            <motion.div whileTap={{scale:0.75}} onClick = {()=>updateQty('minus', data?.id)} className='font-semibold'>
                <RiSubtractLine/>
            </motion.div>
                <p className='text-gray-500 font-bold'>{qty}</p>
            <motion.div whileTap={{scale:0.75}} onClick = {()=>updateQty('add', data?.id)} className='font-semibold'>
                <RiAddLine/>
            </motion.div>
        </div>
    </div>
  )
}

export default CartItem
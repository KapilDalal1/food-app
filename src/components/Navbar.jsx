import React from 'react'
import Logo from '../assets/logo.png'
import { useState } from 'react'
import{AiOutlineMenu,AiOutlineClose} from "react-icons/ai"

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
  <div className="flex h-[106px] items-center justify-between ">
    <img src={Logo} alt="" 
        className=' h-[90px]'
    />
    {
      toggle?
      <AiOutlineClose onClick={()=>setToggle(!toggle)} className=" md:hidden text-2xl text-black block "/>
      :
      <AiOutlineMenu onClick={()=>setToggle(!toggle)} className=" md:hidden text-2xl text-black block "/>
    
    }
            
          <ul className=' hidden w-[40%] p-12  md:flex justify-evenly font-[montserrat] '>
            <a href="#" className="text-[#FA4A0C] font-bold" >Home</a>
            <a href="#" className='text-[#252B42] font-bold'>Contact</a>
            <a href="#" className='text-[#252B42] font-bold'>Faq</a>
            <a href="#" className='text-[#252B42] font-bold'>Payments</a>
          </ul>
  </div>
          <ul className={`duration-300 md:hidden fixed flex flex-col text-white h-screen bg-black items-center ${toggle ? 'left-0' : 'left-[-100%]'}`}>
            <a href="#" className='p-3' >Home</a>
            <a href="#" className='p-3'>Contact</a>
            <a href="#"className='p-3'>Faq</a>
            <a href="#"className='p-3'>Payments</a>
          </ul>
    </>
  )
}

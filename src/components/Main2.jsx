import React from 'react'
import Login from '../assets/login.png'
import food from '../assets/food.png'
import payment from '../assets/payment.png'
export default function Main2() {
  return (
    <>
    <div className="relative ">
        <section className="w-10/12 max-w-[1080px] flex flex-row justify-evenly items-center mx-auto">
            <img src={Login} alt="" className="max-w-[325px]"/>
        
            <div className="flex flex-col">
                <h3 className='text-[#FA4A0C] leading-[36px] text-[24px] font-bold'>Create an account</h3>
                <h2 className='text-[#252B42] text-[40px] leading-[57px] font-bold'>Create/login to an existing <br /> account to get started</h2>
                <p className="text-[#737373] leading-[38px] text-[24px]">An account is created with your email <br /> and a desired password</p>
            </div>
            </section>
    </div>

    <div className="relative ">
        <section className="w-10/12 max-w-[1080px] flex flex-row justify-evenly items-center mx-auto">
            
        
            <div className="flex flex-col">
                <h3 className='text-[#FA4A0C] leading-[36px] text-[24px] font-bold'>Explore varieties</h3>
                <h2 className='text-[#252B42] text-[40px] leading-[57px] font-bold'>Shop for your favorites <br /> meal as e dey hot.</h2>
                <p className="text-[#737373] leading-[38px] text-[24px]">Shop for your favorite meals or drinks <br /> and enjoy while doing it.</p>
            </div>
            <img src={food} alt="" className="max-w-[325px]"/>
            </section>
    </div>

    <div className="relative ">
        <section className="w-10/12 max-w-[1080px] flex flex-row justify-evenly items-center mx-auto">
            <img src={payment} alt="" className="max-w-[325px]"/>
        
            <div className="flex flex-col">
                <h3 className='text-[#FA4A0C] leading-[36px] text-[24px] font-bold'>Checkout</h3>
                <h2 className='text-[#252B42] text-[40px] leading-[57px] font-bold'>When you done check out <br /> and get it delivered.</h2>
                <p className="text-[#737373] leading-[38px] text-[24px]">When you done check out and get it <br /> delivered with ease.</p>
            </div>
            </section>
    </div>
    </>
  )
}

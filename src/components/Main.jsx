import React from 'react'
import Login from '../assets/login.png'
export default function Main() {
  return (
    <>
         <div className="flex flex-col justify-center items-center">
            <hr class="hr" className="h-[5px] w-[884px] bg-gray-500 "/>
            <p class="py-[12px] text-[44px] font-sans font-[600px] leadding-[36px]">
                How the app works
            </p>
        </div>
        
    <section className="relative">
        <div className=" w-10/12 flex justify-between ">
            <img src={Login} alt="" className=""/>
            <div className="">
                <h3>Create an account</h3>
                <h2>Create/login to an existing account to get started</h2>
                <p>An account is created with your email and a desired password</p>
            </div>
        </div>
    </section>
    </>
  )
}

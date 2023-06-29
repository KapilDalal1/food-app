import React from 'react'
import hero from '../assets/hero.png'
export default function Main3() {
  return (
    <div className="flex flex-col items-center justify-center text-center h-[516px] bg-center bg-cover" style={{ backgroundImage: `url(${hero})` }}>
            <div >
                <h1 className='text-[40px] text-[#FFF] leading-[57px] font-bold'>Download the app now.</h1>
                <p className='text-24px font-[500px] leading-[38px] text-[#FFF] font-[montserrat] mt-[20px]'>Available on your favorite store. Start your premium experience now</p>
            </div>
            <div className='mt-[30px]'>
            <button className='bg-[#FA4A0C] w-[128px] text-[24px] font-bold font-[montserrat] text-[#FFF] leading-[36px] border-[1px] rounded-[30px] mr-[36px] hover:'>Playstore</button>
            <button className='w-[128px] text-[24px] font-bold font-[montserrat] text-[#FFF] leading-[36px] bg-transparent border-[1px] rounded-[30px]'>App Store</button>
        </div>
        </div>
  )
}

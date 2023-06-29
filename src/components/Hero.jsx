import React from 'react'
import background from '../assets/background.png'
import mobiles from '../assets/mobiles.png'
export default function Hero() {
  return (
    <div className="hidden md:flex flex-col items-center text-center h-[536px] bg-center bg-cover" style={{ backgroundImage: `url(${background})` }}>
    <div className=''>
        <div className="text-white">
            <p className="text-[24px] font-bold font-mono leading-[36px] mt-[73px]">Food App</p>
            <h2 className="text-[#FFF] font-[Poppins] leading-[80px] font-bold text-[58px] mt-[17px]">Why stay hungry when <br />you can order from Bella Onojie</h2>
            <p className='text-[#F6F6F6] text-[24px] font-medium mt-[27px] leading-[38px]'>Download the Bella Onoje's food app now on</p>
        </div>
        <div className='mt-[30px]'>
            <button className='bg-[#FA4A0C] w-[128px] text-[24px] font-bold font-[montserrat] text-[#FFF] leading-[36px] border-[1px] rounded-[30px] mr-[36px] hover:'>Playstore</button>
            <button className='w-[128px] text-[24px] font-bold font-[montserrat] text-[#FFF] leading-[36px] bg-transparent border-[1px] rounded-[30px]'>App Store</button>
        </div>
    </div>
    <div className='mt-[0px] w-[299px] self-end-reverse'>
      <img src={mobiles} alt="" />
    </div>
</div>




  )
}

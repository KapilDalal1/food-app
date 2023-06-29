import React from 'react'
import logo from '../assets/logo.png'
import insta from '../assets/instagram.png'
import fb from '../assets/fb.svg'
import twitter from '../assets/twitter.svg'
export default function Footer() {
  return (
    <div className='w-[full] h-[223px] items-center justify-center'>
        <div className='h-[133px] flex items-center justify-evenly my-[115px] mx-[53px]'>
            <img src={logo} alt="" />
            <div className='flex gap-[24px]'>
                <img src={twitter} alt="" />
                <img src={fb} alt="" />
                <img src={insta} alt="" width={39} />
            </div>
            <p>Copyright © 2020 Bella Onojie</p>
        </div>
    </div>
  )
}

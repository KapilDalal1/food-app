import React from 'react'
import background from '../assets/background.png'
export default function Hero() {
  return (
    <div className='relative h-[100%] w-[100%] py-[70px] bg-initial'>
    <img src={background} alt="bg-image"/>
    <div className='absolute top-1/2 left-1/2 transform-translate(-50%, -50%) text-center'>
        <div className="text-white">
            <p>Food App</p>
            <h2>Why stay hungry when</h2>
            <p>you can order from Bella Onojie</p>
            <p>Download the Bella Onoje's food app now on</p>
        </div>
        <div>
            <button>PlayStore</button>
            <button>AppStore</button>
        </div>
    </div>
</div>
  )
}

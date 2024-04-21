import React from 'react'
import slideOne from './icons/slide-one.png'
import slideTwo from './icons/slide-two.png'
import slideThree from './icons/slide-three.png'

function SlidesSection() {
  return (
    <section className="w-full h-auto 2xl:w-[1440px] pl-[16px] 2xl:pl-[70px] 2xl:pt-[186.5px] 2xl:pb-[186.5px] bg-[#E1E3F8] border-2 overflow-x-scroll">

       <div className="sliding-row w-auto lg:w-[4477px] h-[652px] rounded-[20px] flex items-center justify-start">
            <div className='w-full 2xl:w-[1300px] h-[652px] rounded-[20px]'>
                <img src={slideOne} alt="" width={'100%'} height={'100%'} />
            </div>
            <div className='w-full 2xl:w-[1300px] h-[652px] rounded-[20px]'>
                <img src={slideTwo} alt="" width={'100%'} height={'100%'} />
            </div>
            <div className='w-full 2xl:w-[1300px] h-[652px] rounded-[20px]'>
                <img src={slideThree} alt="" width={'100%'} height={'100%'} />
            </div>
       </div>

    </section>
  )
}

export default SlidesSection
import React from 'react'
import slideOne from './icons/slide-one.png'
import slideTwo from './icons/slide-two.png'
import slideThree from './icons/slide-three.png'

function SlidesSection() {
  return (
    <section className="hidden w-full pl-[16px] 2xl:w-[1440px] 2xl:pl-[70px] 2xl:pt-[186.5px] bg-[#E1E3F8] border-2 overflow-x-scroll">
       {/* <div className='lg:w-[4477px] h-[737px]  overflow-x-scroll'>
        
       </div> */}
       <div className="sliding-row lg:w-[4477px] h-[652px] rounded-[20px] flex items-center justify-start">
                <div className='w-full  md:w-[29.03%] 2xl:w-[1300px] h-[652px] rounded-[20px]'>
                    <img src={slideOne} alt="" width={'100%'} height={'100%'} />
                </div>
                <div className='w-full md:w-[29.03%] 2xl:w-[1300px] h-[652px] rounded-[20px]'>
                    <img src={slideTwo} alt="" width={'100%'} height={'100%'} />
                </div>
                <div className='w-full md:w-[29.03%] 2xl:w-[1300px] h-[652px] rounded-[20px]'>
                    <img src={slideThree} alt="" width={'100%'} height={'100%'} />
                </div>
        </div>

    </section>
  )
}

export default SlidesSection
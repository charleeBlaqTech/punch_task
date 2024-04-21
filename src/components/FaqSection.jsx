import React from 'react'
import slideOne from './icons/slide-one.png'

function FaqSection() {
  return (
    <section className="w-full h-[700px] 2xl:w-[1440px] pl-[16px] 2xl:pl-[70px] 2xl:pt-[186.5px] 2xl:mb-[186.5px] bg-[#E8E8E8] border-2 z-20 -mt-[71px]">

      <div className="sliding-row w-auto lg:w-[4477px] h-[652px] rounded-[20px] flex items-center justify-start">
          <div className='w-full 2xl:w-[1300px] h-[652px] rounded-[20px]'>
              <img src={slideOne} alt="" width={'100%'} height={'100%'} />
          </div>
      </div>

    </section>
  )
}

export default FaqSection
import React from 'react'
import rowOneImg from './icons/row-1-img.png'
import rowTwoImg from './icons/row-2-img.png'
import rowThreeImg from './icons/row-3-img.png'

function JourneySection() {
  return (
    <section className="w-full h-auto 2xl:w-[1440px] pl-[16px] 2xl:pl-[70px] 2xl:pt-[151px] border-2">

        <div className='w-full 2xl:w-[1440px] pl-[16px] 2xl:pl-[332px]'>
            <div className='w-full h-[64px] 2xl:w-[637px] text-[#202229]'>
                <h4 className='w-auto text-left align-top leading-[31px] text-[32px] 2xl:leading-[64px] 2xl:text-[54px]'>
                    Start your journey today.
                </h4>
            </div>
        </div>

        <div className="w-full h-auto 2xl:h-[387.5px] 2xl:w-[1300px] mt-[40px]">
            <img src={rowOneImg} alt="" width={'100%'} height={'100%'} />
        </div>
        <div className="w-full h-auto 2xl:h-[387.5px] 2xl:w-[1300px] -mt-[21px]">
            <img src={rowTwoImg} alt="" width={'100%'} height={'100%'} />
        </div>
        <div className="w-full h-auto 2xl:h-[387.5px] 2xl:w-[1300px] -mt-[21px]">
            <img src={rowThreeImg} alt="" width={'100%'} height={'100%'} />
        </div>

    </section>
  )
}

export default JourneySection
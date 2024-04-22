import React from 'react'
import faqBottomImg from './icons/faq-img-8.png'

function FaqSection() {
  return (
    <section className=" faq-styles flex flex-col items-center w-full 2xl:w-[1440px] bg-[##E8E8E8] z-10 -mb-11 xl:-mb-2">

      <div className="w-full lg:w-[700px] h-[54px] mt-[80px] xl:mt-[134px]">
        <h4 className='h-auto w-full font-bold text-center align-top leading-[35px] text-[28px] sm:leading-[40px] sm:text-[28px] xl:leading-[54px] xl:text-[40px] 2xl:text-[54px]'>
          Frequently asked questions.
        </h4>
      </div>
      <div className="w-full px-4 md:px-0 2xl-w-[1440px] mt-[44px] xl:mt-[88px] grid grid-cols-1 grid-rows-8">

        <div className="h-[112px] border-2 flex flex-col gap-4 md:flex-row xl:gap-[410px]">
            <div className='w-[230px] pl-[70px] flex items-center border-r-2'>
              <p className='w-[80px] h-[24px] text-start align-top leading-[24px] text-[22px]'>General</p>
            </div>
            <div className='flex items-center '>
              <p className='w-[434px] h-[24px] break-words text-center md:text-start align-top leading-[24px] text-[22px]'>I want to work part-time, is that possible.</p>
            </div>
        </div>
        <div className="h-[112px] border-2 flex flex-col md:flex-row xl:gap-[410px]">
            <div className='w-[230px] pl-[70px]'>
              <p className='w-[80px] h-[24px] text-start align-top leading-[24px] text-[22px]'></p>
            </div>
            <div className='flex items-center '>
            <p className='w-[369px] h-[24px] break-words text-center md:text-start align-top leading-[24px] text-[22px]'>How much are the average projects?</p>
            </div>
        </div>
        <div className="h-[112px] border-2 flex flex-col md:flex-row xl:gap-[410px] bg-[#D6D6D6]">
            <div className='w-[230px] pl-[70px]'>
              <p className='w-[80px] h-[24px] text-start align-top leading-[24px] text-[22px]'></p>
            </div>
            <div className='flex items-center '>
            <p className='w-[317px] h-[24px] break-words text-center md:text-start align-top leading-[24px] text-[22px]'>How does the payment work?.</p>
            </div>
        </div>
        <div className="h-[112px] border-2 flex flex-col md:flex-row xl:gap-[410px] ">
            <div className='w-[230px] pl-[70px]'>
              <p className='w-[80px] h-[24px] text-start align-top leading-[24px] text-[22px]'></p>
            </div>
            <div className='flex items-center '>
            <p className='w-[231px] h-[24px] break-words text-center md:text-start align-top leading-[24px] text-[22px]'>How much can i earn?.</p>
            </div>
        </div>
        <div className=" h-auto md:h-[112px] border-2 flex flex-col gap-4 md:flex-row xl:gap-[111px]">

            <div className='flex flex-col md:flex-row justify-start items-center h-full'>
              <div className='w-[100%] md:w-[115px] xl:w-[230px] h-full pl-[70px] bg-[#D6D6D6] flex items-center  border-r-2'>
                <p className='w-[80px] h-[24px] text-start align-top leading-[24px] text-[22px]'>General</p>
              </div>
              <div className='w-[100%] md:w-[115px] xl:w-[299px] h-full pl-[66px] flex items-center  border-r-2'>
                <p className='w-[154px] h-[24px] text-wrap text-start align-top leading-[24px] text-[22px]'>Joining Process</p>
              </div>
            </div>
            <div className='flex items-center '>
              <p className='w-[434px] h-[24px] break-words text-center md:text-start align-top leading-[24px] text-[22px]'>I want to work part-time, is that possible.</p>
            </div>
        </div>
        <div className="h-[112px] border-2 flex flex-col md:flex-row xl:gap-[410px]">
            <div className='w-[230px] pl-[70px]'>
              <p className='w-[80px] h-[24px] text-center align-top leading-[24px] text-[22px]'></p>
            </div>
            <div className='flex items-center '>
              <p className='w-[369px] h-[24px] break-words text-center md:text-start align-top leading-[24px] text-[22px]'>How much are the average projects?</p>
            </div>
        </div>
        <div className="h-[112px] border-2 flex flex-col md:flex-row xl:gap-[410px] ">
            <div className='w-[230px] pl-[70px]'>
              <p className='w-[80px] h-[24px] text-center align-top leading-[24px] text-[22px]'></p>
            </div>
            <div className='flex items-center '>
              <p className='w-[369px] h-[24px] break-words text-center md:text-start align-top leading-[24px] text-[22px]'>How much are the average projects?</p>
            </div>
        </div>
        <div className="h-[112px] border-2 flex flex-col md:flex-row xl:gap-[410px] ">
            <div className='w-[230px] pl-[70px]'>
              <p className='w-[80px] h-[24px] text-center align-top leading-[24px] text-[22px]'></p>
            </div>
            <div className='flex items-center '>
              <p className='w-[231px] h-[24px] break-words text-center md:text-startalign-top leading-[24px] text-[22px]'>How much can i earn?.</p>
            </div>
        </div>
  
      </div>
      <div className="w-full 2xl-w-[1440px] h-[64.5px] mt-[108px] ">
        <img src={faqBottomImg} alt="" width={'100%'} height={'100%'} />
      </div>

    </section>
  )
}

export default FaqSection
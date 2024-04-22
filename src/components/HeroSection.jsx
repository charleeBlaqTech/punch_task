import React from 'react'
import Nav from './Nav'
import stripeImg from './icons/stripe.jpg';
import headingImgImg from './icons/hero-img2.png';
import inputBtnImg from './icons/hero-in-btn.jpg';
import HeroBannerList from './includes/HeroBannerList';
import { JobRoles } from '../lib/data';


function HeroSection() {
  return (
    <section className='w-full 2xl:w-[1440px] pt-[62px] px-auto'>
        <Nav/>
        <div className="w-full pl-4 pr-4 md:pr-0 md:pl-0  2xl:pl-[260px]">
            <div className="w-full 2xl:pl-[125px] flex flex-col items-center">

                <div className="w-full md:w-[671px] h-[128px] mt-[117px] flex flex-col items-center justify-center bg-[#ffffff]">
                    <h2 className='relative h-auto font-bold text-center md:leading-[64px] text-4xl md:text-[54px] align-toptext-[#202229]'>
                        Finding the right fit has never been easy
                        <div className='w-[50px] sm:w-[68px] h-[43px] absolute top-0 sm:top-2 right-[13%] sm:right-[24%]'>
                            <img src={headingImgImg} alt="" width={'100%'} height={'100%'} />
                        </div>
                    </h2>
                </div>
                <div className="w-full sm:w-[582px] h-[64px] mt-[20px] lg:ml-[44px] flex flex-col items-center justify-center">
                    <p className='h-auto text-center text-[22px] align-top text-[#202229] leading-[32px]'>with our rigorous pre-vetting process, you will never have to worry about finding the ideal candidate ever again.</p>
                </div>

                <div className="w-full sm:w-[570px] h-[74px] mt-[30px] lg:ml-[50px] bg-[#ffffff] rounded-[15px] ">
                    <div className="input-button-wrap w-[100%] h-full flex items-center justify-between rounded-r-[15px] border-r-2">
                        <input type="text" placeholder='design |' className='w-[87.0%] 2xl:w-[496px] h-full pl-[27px] py-[5.84%] border-b-2 border-t-2 border-l-2'/>
                        <div className="button-wrap w-[74px] h-[74px] my-[14px] flex items-center justify-center rounded-[15px] border-2">
                           <img src={inputBtnImg} alt="" width={'100%'} height={'100%'}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex items-center justify-center">
                <div className="w-full sm:w-[90%] h-auto  lg:w-[959px] sm:h-[215px] mt-[55px] pt-[15px] pl-[4.5%] 2xl:pl-[65px]  bg-[#F8F8F8] rounded-[15px] flex flex-col gap-[23px] items-center">

                    {/* SMALLER SCREENS LESS THAN 1025PX */}
                    <div className="hidden lg:flex w-[391px] h-[44px] mx-[200px] xl:[mx-[0px]] xl:ml-[200px] items-center relative">

                        <div className="w-[192px] h-[44px] rounded-[15px] bg-[#C7F4C2] flex items-center justify-end z-10">
                            <p className="w-[137.6px] h-[22.43px] my-[23.37px]">IT & Development</p>
                        </div>
                        <div className="absolute right-4 -ml-[89px] w-[288px] h-[44px] rounded-[15px] bg-[#D2D2D2] flex items-center justify-end">
                            <p className="w-[154.27px] h-[22.43px] my-[23.37px]">Design and Creative</p>
                        </div>
                    </div>

                    {/* SMALLER SCREENS LESS THAN 1025PX */}
                    <div className="lg:hidden w-[100%] md:w-[60%] xl:w-[391px] h-[44px] xl:ml-[200px] flex items-center relative">

                        <div className="w-[49.1%] xl:w-[192px] h-[44px] rounded-[15px] bg-[#C7F4C2] flex items-center justify-end z-10">
                            <p className="w-[137.6px] h-[22.43px] my-[23.37px]">IT & Development</p>
                        </div>
                        <div className="absolute right-4 -ml-[22.7%] xl:-ml-[89px] w-[73.65%] xl:w-[288px] h-[44px] rounded-[15px] bg-[#D2D2D2] flex items-center justify-end">
                            <p className="w-[154.27px] h-[22.43px] my-[23.37px]">Design and Creative</p>
                        </div>
                    </div>

                        {/* Banner for displaying all the talents roles available */}
                    <div className="w-[100%] pl-4 md:pl-0 grid grid-cols-2 gap-4 sm:grid-cols-3 ">
                        <HeroBannerList props={JobRoles.colOne}/>
                        <HeroBannerList props={JobRoles.colTwo}/>
                        <HeroBannerList props={JobRoles.colThree}/>
                    </div>

                </div>
            </div>
        </div>
        <div className="stripe-svg-wrap w-full mt-12 -ml-[40px] 2xl:w-[1470.89px] lg:h-[130.99px] lg:mt-[74px] lg:-ml-[96px]">   
            <img src={stripeImg} alt="image" width={'100%'} height={'100%'} />
        </div>
    </section>
  )
}

export default HeroSection
import React from 'react'
import exploreImg from './icons/explore.jpg';
import { BannerReuse1, BannerReuse2 } from './includes/BannerReuse';
import SkillsDetailsReuse from './includes/SkillsDetailsReuse';

function TalentSection() {
  return (
    <section className='w-full h-auto 2xl:w-[1440px] lg:h-[1130px] bg-[#EDEFFF] px-[16px] pb-[48px] lg:pl-[70px] pt-16 md:pt-[70px] xl:pt-[189.01px] 2xl:border-4'>
        <div className="contents-main-header-wrap w-[95%] xl:w-[977px] h-[128px] xl:pl-[162px] text-[#202229]">
            <h1 className='w-[100%] font-bold text-center sm:text-left xl:text-center align-top leading-[40px] text-[28px] sm:leading-[50px] sm:text-[44px] lg:leading-[55px] lg:text-[44px] '>
                Your one-step marketplace for finding the talent your business needs.
            </h1>
        </div>
        <div className="mt-[90px] flex flex-col lg:flex-row items-center justify-start">
            <div className="w-full lg:w-[380px] flex flex-col gap-[80px] md:flex-row md:gap-[60px] lg:flex-col lg:gap-[124px]" >
                <SkillsDetailsReuse title={'Find Dev and IT professionals to scale your business.'} postion={'top'} />   
                <SkillsDetailsReuse title={'Explore creative individuals with a keen eye for detail'} postion={'bottom'}/>        
            </div>
            <div className="w-full xl:w-[730px] lg:ml-[160px] 2xl:ml-[190px] mt-11 lg:mt-0 ">
                    <div className="w-full h-auto pb-8 lg:pb-0 xl:w-[730px] xl:h-[224px] pt-[18px] bg-[#FFFFFF] rounded-[7px]">
                        <div className="w-[130px] h-[48px] ml-[29px] text-[#202229]">
                            <h4 className='h-auto text-center leading-[23.8px] text-[16px] align-top'>IT &</h4>
                            <h4 className='h-auto text-center leading-[23.8px] text-[16px] align-top'>Development</h4>
                        </div>
                       <BannerReuse1/>
                    </div>

                    <div className="w-full h-auto pb-8 lg:pb-0  xl:w-[730px] xl:h-[224px] mt-[30px] pt-[18px] bg-[#FFFFFF] rounded-[7px]">
                        <div className="w-[131px] h-[24px] ml-[29px] text-[#202229]">
                            <h4 className='w-auto  leading-[23.8px] text-[16px] align-top'>Design & Creative</h4>
                        </div>
                       <BannerReuse2/>
                    </div>
            </div>
        </div>
        <div className="w-full mt-[35px] flex flex-col justify-center md:flex-row items-center md:justify-start ">    
            <div className="w-[380px] ">
                <div className="w-[220px] h-[74px] flex items-center gap-[11px]">
                        <div className="icon-wrap w-[74px] h-[74px]">
                            <img src={exploreImg} alt="" width={'100%'} height={'100%'} />
                        </div>
                        <div className="text-wrap w-[135px] h-[18px]">
                            <span>Explore More</span>
                        </div>

                </div>    
            </div>
            <div className="w-[90%] xl:w-[730px] lg:ml-[160px] 2xl:ml-[190px] ">
                <div className="w-full lg:w-[198px] h-[18px]">
                    <p className='w-auto text-right lg:text-left align-top leading-[32px] text-[22px]'>30 more to explore</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TalentSection
import React from 'react';
import assureImg from './icons/assure.jpg';
import girlImg from './icons/girl2.jpg';
import eye2Img from './icons/rec-icon1.png';
import eye1Img from './icons/eye1.jpg';
import rec2Img from './icons/rec-icon2.png';
import rec3Img from './icons/rec-icon3.png';
import rec4Img from './icons/rec-icon4.png';
import rec5Img from './icons/rec-icon5.png';
import rec6Img from './icons/rec-icon6.png';
import InterviewListReuse from './includes/InterviewListReuse';
import { InterViewSteps } from '../lib/data';

function AssuranceSection() {
    
  return (
    <section className="w-full 2xl:w-[1440px] bg-[#FFFFFF] pt-4 2xl:pt-[93.5px] ">

        <div className="main-contents-wrapper">
            <div className="image-wrap w-full 2xl:w-[1440px] h-[64.5px] bg-[#202229]">
                <img src={assureImg} alt="" width={'100%'} height={'100%'} className="bg-[#202229]" />
            </div>
        </div>
        <div className="w-full lg:h-[993px] bg-[#FFFFFF] px-4 xl:px-[70px] grid grid-cols-1 lg:grid-cols-2 z-50 -mt-[45px] lg:-mt-[16px]">

            <div className="assurance-left-wrap w-full pt-[80px] lg:pt-[149px]">
                <div className="assurance-left-side-title-wrap w-full lg:w-[570px] h-[128px] text-[#202229]">
                    <h3 className='h-full font-bold text-center md:text-left align-top leading-[40px] text-[28px] sm:leading-[50px] sm:text-[44px] md:leading-[64px] md:text-[54px]'>How we ensure you're in good hands.</h3>
                </div>
                <div className="assurance-left-side-write-up-wrap w-full lg:w-[646px] h-[96px] mt-0 md:mt-[30px] text-[#202229]">
                    <p className='h-auto text-left align-top text-lg  md:leading-[32px] md:text-[22px]'>
                        with our comprehensive screening process we hand-pick highly skilled candidates so you can onboard them in a matter of days.
                    </p>
                </div>
                <div className="assurance-left-side-dropdown-wrap mt-8 sm:mt-0">

                    <div className="items-wrap border-2 border-[#F0F0F0] w-full lg:w-[535px] xl:w-[635px] h-[80px] bg-[#F4F4F4] rounded-[7px] pl-[20px] py-[11px] mb-[4px] flex items-center gap-[23px] z-30 mt-[2px]">

                        <div className="icon-wrap w-[57px] h-[57px] bg-[#ECECEC] rounded-[43.94px] flex items-center p-[21px]">
                            <div className='w-[15.83px] h-[14.9px] bg-[#000000] '>
                                <img src={eye1Img} alt="" width={'100%'} height={'100%'}/>
                            </div> 
                        </div>
                        <div className="text-wrap flex items-center gap-1 w-[193px] h-[18px]">
                            <span className='w-auto text-left align-top leading-[17.8px] text-[16px]'>Step 1:</span>
                            <span className='w-auto text-left align-top leading-[17.8px] text-[16px]'>Resume Screaning</span>
                        </div>
                    </div>

                    <div className="items-wrap border-2 border-[#F0F0F0] w-full lg:w-[535px] xl:w-[635px] h-[163px] bg-[#FFFFFF] rounded-[7px] pl-[20px] py-[11px] mb-[4px]">
                        <div className='flex items-center gap-[23px]'>
                            <div className="icon-wrap w-[57px] h-[57px] bg-[#8BA4FD] rounded-[43.94px] flex items-center p-[21px]">
                                <div className='w-[15.83px] h-[14.9px] bg-[#8BA4FD]'></div>
                                <img src={eye2Img} alt="" width={'100%'} height={'100%'}/>
                            </div>
                            <div className="text-wrap flex items-center gap-1 w-[193px] h-[18px]">
                                <span className='w-auto text-left align-top leading-[17.8px] text-[16px]'>Step 2:</span>
                                <span className='w-auto text-left align-top leading-[17.8px] text-[16px]'>Video Interview</span>
                            </div>
                        </div>
                        <div className='w-full md:w-[531px] lg:w-[500px] xl:w-[531px] h-[52px] mt-[24px] text-[#202229]'>
                            <p className='h-auto text-left align-top leading-[18px] lg:leading-[26px] text-[16px]'>candidates are accessed through skill based question in a visual setting. allowing you to guage personality and cultural fit.</p>
                        </div>
                    </div>
                    <InterviewListReuse props={InterViewSteps.props3}/>
                    <InterviewListReuse props={InterViewSteps.props4}/>
                    <InterviewListReuse props={InterViewSteps.props5}/>
                </div>
            </div>

            <div className="assurance-right-wrap pt-8 pb-[150px] xl:pb-0 lg:pt-[337px] md:pl-[40px] lg:pl-[2px] xl:pl-[166px]">
                <div className="contents-wrap w-full lg:w-[514px] h-[524.5px] flex flex-col-reverse items-start lg:items-center xl:items-start justify-center lg:justify-start">

                    <div className='-mt-[85px] md:mt-[0px] lg:mt-[0px] xl:mt-[201.5px] flex justify-start lg:justify-end xl:justify-start items-center gap-[12px]'>

                        <div className='w-[61px] h-[323px] bg-[#8BA4FD] rounded-[7px] flex flex-col items-center justify-center gap-[32.01px]'>
                            <div className="icon w-[30.64px] h-[30.64px] bg-[#8BA4FD] ">
                                <img src={rec6Img} alt="" width={'100%'} height={'100%'}  />
                            </div>
                            <div className="icon w-[30.64px] h-[30.64px] bg-[#8BA4FD] ">
                                <img src={rec5Img} alt="" width={'100%'} height={'100%'}  />
                            </div>
                            <div className="icon w-[30.64px] h-[30.64px] bg-[#8BA4FD] ">
                                <img src={rec4Img} alt="" width={'100%'} height={'100%'}  />
                            </div>
                            <div className="icon w-[30.64px] h-[30.64px] bg-[#8BA4FD] ">
                                <img src={rec3Img} alt="" width={'100%'} height={'100%'}  />
                            </div>
                            <div className="icon w-[30.64px] h-[30.64px] bg-[#8BA4FD] ">
                                <img src={rec2Img} alt="" width={'100%'} height={'100%'}  />
                            </div>
                           
                        </div>

                        <div className=' text-[#202229] mt-4 flex flex-col items-center justify-center gap-[33px]'>
                            <div className='w-[265px] h-[20px]'>
                                <p className='w-auto text-left align-top leading-[19.3px] text-[14.01px] font-bold'>
                                    Tell us something about your self
                                </p>
                            </div>

                            <div className='w-[265px] h-[20px]'>
                                <p className='w-auto text-left align-top leading-[19.3px] text-[14.01px]'>
                                    Give a short brief about your experience
                                </p>
                            </div>
                            
                            <div className='w-[265px] h-[39px]'>
                                <p className='h-auto text-left align-top leading-[19.3px] text-[14.01px]'>
                                    Eplain about good customer experience
                                </p>
                            </div>

                            <div className='w-[265px] h-[39px]'>
                                <p className='h-auto text-left align-top leading-[19.3px] text-[14.01px]'>
                                    How to manage SOP of good customers care?
                                </p>
                            </div>
                           
                            <div className='w-[265px] h-[20px]'>
                                <p className='w-auto text-left align-top leading-[19.3px] text-[14.01px]'>
                                    Tell us something about your self
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[45%] h-[44.6%] lg:w-[234px] lg:h-[234px] md:-mb-[179px] lg:-ml-0 xl:-mb-[240px] self-end xl:self-center z-20'>
                        <img src={girlImg} alt="" width={'100%'} height={'100%'} className='w-full h-full object-contain' />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AssuranceSection
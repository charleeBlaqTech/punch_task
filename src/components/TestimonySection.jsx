import React from "react";
import testimonyImg from './icons/groove2.png'
import groovyImg from './icons/groove1.png'
import backArrowImg from './icons/groove3.png'
import fowardArrowImg from './icons/groove4.png'
import grooveCirImg from './icons/groove5.png'
import faceImg from './icons/Frame 136.png'



function TestimonySection() {
  return (
    <section className="w-full h-auto pb-12 px-[16px] 2xl:w-[1440px] lg:pl-[78px] lg:h-[840px] bg-[#202229] text-[#FFFFFF] 2xl:border-4">
        <div className="image-row flex justify-center items-start md:justify-end mt-[2px]">
            <div className="image-wrap w-[221px] h-[175px] bg-[#202229]">
                <img src={testimonyImg} alt="" width={'100%'} height={'100%'} className="bg-[#202229]" />
            </div>
        </div>
        <div className="columns-row grid grid-cols-1 lg:grid-cols-2">
            <div className="left-side-content-wrap pt-[70px]">
                <div className="header-wrap w-full sm:w-[431px] h-[192px] mb-4 md:mb-[44px]">
                    <h2 className="w-auto text-left align-top leading-[32px] text-[32px]  md:leading-[64px] md:text-[52px]">How it worked</h2>
                    <div className="bttom flex items-center">
                        <h2 className="w-auto text-left align-top leading-[32px] text-[32px] md:leading-[64px] md:text-[52px]">for Jason</h2>
                        <div className="w-[56px] h-[56px] rounded-[91.16px] mt-[4px] ml-[15px] inline-block">
                            <img src={faceImg} alt="" width={'100%'} height={'100%'} />
                        </div> 
                        <h2 className="w-auto text-left align-top leading-[32px] text-[32px]  md:leading-[64px] md:text-[52px] ml-[25px] md:ml-[59px]">at</h2>
                    </div> 
                    <div className="icon-wrap w-[192px] h-[51px] inline-block mt-[20px]">
                        <img src={groovyImg} alt="" width={'100%'} height={'100%'} />
                    </div>  
                </div>
                <div className="write-up-wrap w-full sm:w-[461px] h-[96px]">
                    <p className="h-auto text-left align-top leading-[32px] text-[22px]">
                        Zwilt enable us to deliver on time and they've been heavy hitters in
                        our corner since.
                    </p>
                </div>
                <div className="btn-wrap mt-[8px] flex gap-[16px] items-start">
                    <div className="back w-[49.79px] h-[49.79px]">
                        <img src={backArrowImg} alt="" width={'100%'} height={'100%'} />
                    </div>
                    <div className="front w-[49.79px] h-[49.79px] mt-[4px]">
                        <img src={fowardArrowImg} alt="" width={'100%'} height={'100%'} />
                    </div>
                </div>
            </div>

            <div className="pt-24 md:pt-[151px]">
                <div className="h-[98.79px] flex items-center gap-[16.21px]">
                    <div className="icon-wrap w-[98.79px] h-[98.89px] inline-block mt-[20px]">
                        <img src={grooveCirImg} alt="" width={'100%'} height={'100%'} />
                    </div>  
                    <div className="profile-wrap">
                        <h3>Jason Makki</h3>
                        <h6>Engineer at GROOVE</h6>
                        <h6>San Francisco</h6>
                    </div>
                </div>
                <div className="sm:w-[499px] h-[192px] text-[#FFFFFF] mt-6 md:mt-[56.21px]">
                    <p className="h-auto text-left align-top leading-[24px] text-[16px] md:leading-[32px] md:text-[22px]">
                        Zwilt enable us to deliver on time and they've been heavy hitters in
                        our corner since. Zwilt enable us to deliver on time and they've
                        been heavy hitters in our corner since. Zwilt enable us to deliver
                        on time and they've been heavy hitters in our corner since.
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default TestimonySection;

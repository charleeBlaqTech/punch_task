import React from 'react'
import PositonReuse from './includes/PositonReuse';
import shopifyImg from './icons/shopify.jpg';
import webflowImg from './icons/webflow.jpg';
import dataImg from './icons/data.jpg';
import dotNetImg from './icons/dotnet.jpg';
import arrowFrontImg from './icons/arrow-front.jpg';
import magnettoImg from './icons/magnetto.jpg';
import unrealImg from './icons/unreal.jpg';
import uxImg from './icons/ux.jpg';
import graphicsImg from './icons/graphics.jpg';
import cinemaImg from './icons/cinema.jpg';
import arrowBackImg from './icons/arrow-back.jpg';
import artistImg from './icons/artist.jpg';
import vecImg from './icons/vec-circle.jpg';
import vecCircleImg from './icons/vec-star.jpg';
import vecDashImg from './icons/vec-dash.jpg';

function TalentSection() {
  return (
    <section className='w-full md:w-[1366px] bg-[#EDEFFF] px-[45px] lg:px-[70px] pt-[189.01px]'>
        <div className="contents-main-header-wrap w-[977px] h-[128px] pl-[162px] text-[#202229]">
            <h1 className='w-[100%] text-center align-top leading-[64px] text-[54px]'>Your one-step marketplace for finding the talent your business needs.</h1>
        </div>
        <div className="contents-main-blocks-wrap mt-[90px] flex items-center justify-start">
            <div className="main-blocks-contents-left-wrap w-[380px] ">
                <div className="left-block-top-wrap">
                        <div className="left-block-top-header-wrap w-[380px] h-[68px] text-[#202229]">
                            <h3 className='h-auto text-left align-top leading-[34px] text-[24px]'>Find Dev and IT professionals to scale your business.</h3>
                        </div>
                        <div className="left-block-top-content-wrap mt-[20px] flex items-center gap-[92px]">
                            <div className="left-image-text-wrap w-[98px] h-[32px] flex items-center gap-[8px]">
                                <div className="icon-wrap w-[16px] h-[21px]">
                                    <img src={vecImg} alt="image" width={'100%'} height={'100%'}/>
                                </div>
                                <div className="text-wrap w-[74px] h-[32px]">
                                    <span className='w-auto text-left align-top leading-[32px] text-[16px]'>989 Skills</span>
                                </div>
                            </div>
                            <div className="right-image-text-wrap w-[167px] h-[32px] flex items-center gap-[8px]">
                                <div className="icon-wrap w-[18px] h-[18px]">
                                    <img src={vecDashImg} alt="image" width={'100%'} height={'100%'}/>
                                </div>
                                <div className="text-wrap w-[167px] h-[32px]">
                                    <span className='w-auto text-left align-top leading-[32px] text-[16px]'>45 Sub-Categories</span>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="left-block-bottom-wrap mt-[124px]">
                        <div className="left-block-top-header-wrap w-[380px] h-[68px] text-[#202229]">
                            <h3 className='h-auto text-left align-top leading-[34px] text-[24px]'>Explore creative individuals with a keen eye for detail.</h3>
                        </div>
                        <div className="left-block-top-content-wrap  mt-[20px] flex items-center gap-[92px]">
                            <div className="left-image-text-wrap w-[98px] h-[32px] flex items-center gap-[8px]">
                                <div className="icon-wrap w-[16px] h-[21px]">
                                    <img src={vecImg} alt="image" width={'100%'} height={'100%'}/>
                                </div>
                                <div className="text-wrap w-[74px] h-[32px]">
                                    <span className='w-auto text-left align-top leading-[32px] text-[16px]'>989 Skills</span>
                                </div>
                            </div>
                            <div className="right-image-text-wrap w-[167px] h-[32px] flex items-center gap-[8px]">
                                <div className="icon-wrap w-[18px] h-[18px]">
                                    <img src={vecDashImg} alt="image" width={'100%'} height={'100%'}/>
                                </div>
                                <div className="text-wrap w-[167px] h-[32px]">
                                    <span className='w-auto text-left align-top leading-[32px] text-[16px]'>45 Sub-Categories</span>
                                </div>
                            </div>
                        </div>
                        <div className="left-block-top-content-wrap mt-[8px] flex items-center justify-start">
                            <div className="left-image-text-wrap w-[98px] h-[32px] flex items-center gap-[8px]">
                                <div className="icon-wrap w-[16px] h-[21px]">
                                    <img src={vecCircleImg} alt="image" width={'100%'} height={'100%'}/>
                                </div>
                                <div className="text-wrap w-[74px] h-[32px]">
                                    <span className='w-auto text-left align-top leading-[32px] text-[16px]'>1011 Profile</span>
                                </div>
                            </div>
                        </div>
                </div>         
            </div>
            <div className="main-blocks-contents-right-wrap w-[730px] ml-[160px] 2xl:ml-[190px] ">
                    <div className="right-block-top-wrap w-[730px] h-[224px] pt-[18px] bg-[#FFFFFF] rounded-[7px]">
                        <div className="header-wrap w-[130px] h-[48px] ml-[29px] text-[#202229]">
                            <h4 className='h-auto text-center leading-[23.8px] text-[16px] align-top'>IT &</h4>
                            <h4 className='h-auto text-center leading-[23.8px] text-[16px] align-top'>Development</h4>
                        </div>
                        <div className="content-wrap w-full">
                            <div className="positions-wrap ml-[28px] flex gap-[20px]">
                                <PositonReuse title={"Shopify Developer"} image={shopifyImg}/>
                                <PositonReuse title={"Magneto Developer"} image={magnettoImg}/>
                                <PositonReuse title={"Data And Scientist"} image={dataImg}/>
                                <PositonReuse title={"Webflow Developer"} image={webflowImg}/>
                                <PositonReuse title={"Dot Net Developer"} image={dotNetImg}/>
                                <PositonReuse title={""} image={arrowFrontImg}/>
                            </div>
                        </div>
                    </div>
                    <div className="right-block-bottom-wrap w-[730px] h-[224px] mt-[30px] pt-[18px] bg-[#FFFFFF] rounded-[7px]">
                        <div className="header-wrap w-[131px] h-[24px] ml-[29px] mb-[18px]">
                            <h4 className='w-auto  leading-[23.8px] text-[16px] align-top'>Design & Creative</h4>
                        </div>
                        <div className="content-wrap w-full">
                            <div className="positions-wrap ml-[28px] flex gap-[20px]">
                                <PositonReuse title={""} image={arrowBackImg}/>
                                <PositonReuse title={"UX Designer"} image={uxImg}/>
                                <PositonReuse title={"Graphics Designer"} image={graphicsImg}/>
                                <PositonReuse title={"Illustration Artist"} image={artistImg}/>
                                <PositonReuse title={"Unreal Engine"} image={unrealImg}/>
                                <PositonReuse title={"Cinema 4D"} image={cinemaImg}/>
                            </div>
                            
                        </div>

                    </div>
            </div>
        </div>
        <div className="contents-main-footer-wrap ">
                <div className="content-footer-left-wrap">
                    <div className="icon-wrap-text">
                        <img src="" alt="" />
                        <span>Explore More</span>
                    </div>

                </div>
                <div className="content-footer-right-wrap">
                    <p>30 more to explore</p>
                </div>
        </div>
    </section>
  )
}

export default TalentSection
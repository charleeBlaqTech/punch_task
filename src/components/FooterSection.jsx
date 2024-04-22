import React from 'react'
import boxTextImg from './icons/footer-imp-2.png'
import boxIcon from './icons/footer-icon-1.png'
import logo1 from './icons/logo-1.jpg'
import logo2 from './icons/logo-3.png'

function FooterSection() {
  return (
    <section className="w-full 2xl:w-[1440px] pt-8 bg-[#000000]">

        <div className='footer-top-section w-full h-[481px] 2xl:w-[1440px] pl-[4.8%] lg:pl-[70px]'>
            <div className='footer-top-blue-box w-[90.27%] h-[100%] pt-[29.52%] 2xl:w-[1300px]  lg:pt-[142px]'>
                <div className='h-[128px] ml-[29.52%] w-[52.5%] 2xl:w-[683px] 2xl:ml-[378px]'>
                    <img src={boxTextImg} alt="" width={'100%'} height={'100%'}  className='object-cover'/>
                </div>
                <div className='ml-[27%] w-[56%] h-[234px] md:mt-[37px] 2xl:w-[730px] 2xl:ml-[355px] flex flex-col items-center gap-[44.27px]'>
                    <div className='w-[73.73px] h-[73.73px] rounded-[29.89px]'>
                        <img src={boxIcon} alt="" width={'100%'} height={'100%'} />
                    </div>
                    <div className='w-[100%] h-[116px]'>
                        {/* <input type="text"  className='w-full h-1/2'/> */}
                    </div>
                </div>
            </div>
        </div>

        <div className="footer-top-contents w-full 2xl:w-[1440px] mt-[65px] pl-[4.8%] 2xl:pl-[70px] flex flex-col lg:flex-row md:justify-between items-center">
            <div className="footer-main-content-left w-full lg:w-[29.44%] h-[405px] 2xl:w-[424px] pt-[18px]">
                <div className="logo-wrap w-[120px] h-[29.31px] bg-[#000000] ">
                    <img src={logo2} alt="" width={'100%'} height={'100%'} />
                </div>
                <div className="write-up-wrap w-[284px] h-[66px] text-[#FFFFFF] mt-[28.69px]">
                    <p className='h-auto text-left align-top leading-[22px] text-[14px]'>We take complext hiring processes - and simplify them. Connecting you to the world's highly qualified talent pool.</p>
                </div>

                <div className="btn-wrap w-[332.32px] h-[97px] mt-[50px] text-[#DCDCDC] flex flex-col gap-[15px]">
                    <div className='w-[143px] h-[32px] mt-[50px]'>
                        <p className='w-auto text-left align-top leading-[32px] text-[14px]'>
                            LINKS AND REDIRECTS
                        </p>
                    </div>
                    <div className='w-[332.32px] flex items-center gap-[8px]'>
                        <div className="left-btn footer-btn">
                            <p className='italic w-auto text-left align-top leading-[12.2px] text-[14.86px]'>Live now</p>
                        </div>
                        <div className="right-btn footer-btn">
                            <p className=' italic w-auto text-left align-top leading-[12.2px] text-[14.86px]'>Apply now</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-main-content-right text-[#FFFFFF] w-full lg:w-[60.97%] h-auto 2xl:h-[405px] 2xl:w-[878px] flex flex-col gap-[64px]">
                    <div className="w-[88.7%] h-[128px] 2xl:w-[779px] pl-[16px] 2xl:pl-[70px] text-[#FFFFFF]">
                        <p className="h-auto text-left align-top leading-[40px] text-[34px] sm:leading-[54px] sm:text-[50px] 2xl:leading-[64px] 2xl:text-[54px]">
                            Connecting the right people to the right businesses.
                        </p>
                    </div>
                    <div className="listTable-wrapper w-full h-auto 2xl:h-[213px] 2xl:w-[878px] flex flex-row flex-wrap items-start justify-between">
                        <div className="list-wrap">
                            <h6 className="footer-list-heading">PLATFORM</h6>
                            <ul className='footer-ul'>
                                <li className='2xl:w-[85px] footer-list'>Find Work</li>
                                <li className='2xl:w-[94px] footer-list'>Find Talent</li>
                                <li className='2xl:w-[64px] footer-list'>Articles</li>
                                <li className='2xl:w-[78px] footer-list'>About Us</li>
                            </ul>
                        </div>
                        <div className="list-wrap">
                            <h6 className="footer-list-heading">CATEGORIES</h6>
                            <ul className='footer-ul'>
                                <li className='2xl:w-[109px] footer-list'>Data Science</li>
                                <li className='2xl:w-[136px] footer-list'>IT & Networking</li>
                                <li className='2xl:w-[118px] footer-list'>Web & Mobile</li>
                            </ul>
                        </div>
                        <div className="list-wrap">
                            <h6 className="footer-list-heading">HELP</h6>
                            <ul className='footer-ul'>
                                <li className='2xl:w-[91px] footer-list'>Contact Us</li>
                            </ul>
                        </div>
                        <div className="list-wrap">
                            <h6 className="footer-list-heading">GET IN TOUCH @</h6>
                            <ul className='footer-ul'>
                                <li className='2xl:w-[85px] footer-list'>Instagram</li>
                                <li className='2xl:w-[70px] footer-list'>LinkedIn</li>
                                <li className='2xl:w-[60px] footer-list'>Twitter</li>
                            </ul>
                        </div>
                    </div>
            </div>        
        </div>

        <div className="footer-bottom-section mt-[148px] w-full h-[41px] 2xl:w-[1440px] px-[16px] lg:px-[70px] flex items-center justify-between border border-[#4e4d4d]">
            <div className="left-side w-[205px] h-[32px] text-[#FFFFFF]">
            <p className='w-auto text-left align-top leading-[31px] text-[16px] md:leading-[31px] md:text-[16px]'>
                All right reserve by Zwilt
            </p>
            </div>
            <div className="right-side flex items-center gap-[33px]">
            <a href="#" className="underline w-[103px] h-[32px] text-[#FFFFFF]">
                <span className='w-auto text-left align-top leading-[31.2px] text-[16px] md:leading-[31px] md:text-[16px]'>
                    Privacy Policy
                </span>
            </a>
            <a href="#" className="underline w-[161px] h-[32px] text-[#FFFFFF]">
                <span className='w-auto text-left align-top leading-[31.2px] text-[16px] md:leading-[31px] md:text-[16px]'>
                    Terms and Condition
                </span>
            </a>
            </div>
        </div>
    </section>
  );
}

export default FooterSection
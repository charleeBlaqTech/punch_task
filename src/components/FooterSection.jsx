import React from 'react'

function FooterSection() {
  return (
    <section className="w-full 2xl:w-[1440px] my-11 bg-black text-white">
        <div className="footer-top-section">
            
        </div>
        <div className="footer-bottom-section">
            <div className="bootom-section-main-content-wrap grid grid-cols-3">
                <div className="footer-main-content-left col-span-1">
                    <div className="logo-wrap">

                    </div>
                    <div className="write-up-wrap">
                        <p></p>
                    </div>

                    <div className="btn-wrap">
                        
                    </div>
                </div>

                <div className="footer-main-content-right col-span-2">
                    <div className="header-title-wrap w-full">
                        <p className='text-4xl font-bold'>Connecting the right people to the right businesses.</p>
                    </div>
                    <div className="listTable-wrapper grid grid-cols-4">
                        <div className="list-wrap">
                            <h6>PLATFORM</h6>
                            <ul>
                                <a href="#">
                                    <li>Find Work</li>
                                    <li>Find Talent</li>
                                    <li>Articles</li>
                                    <li>About Us</li>
                                </a>
                            </ul>
                        </div>
                        <div className="list-wrap">
                            <h6>CATEGORIES</h6>
                            <ul>
                                <a href="#">
                                    <li>Data Science</li>
                                    <li>IT & Networking</li>
                                    <li>Wen & Mobile</li>
                                </a>
                            </ul>
                        </div>
                        <div className="list-wrap">
                            <h6>HELP</h6>
                            <ul>
                                <a href="#">
                                    <li>Contact Us</li>
                                </a>
                            </ul>
                        </div>
                        <div className="list-wrap">
                            <h6>GET IN TOUCH</h6>
                            <ul>
                                <a href="#">
                                    <li>Instagram</li>
                                    <li>LinkedIn</li>
                                    <li>Twitter</li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-section-footer-wrap flex items-center justify-between">
                <div className="left-side">
                    <p>All right reserve by Zwilt</p>
                </div>
                <div className="right-side flex items-center justify-between gap-9">
                    <a href="#" className='underline'>
                        <span>Privacy Policy</span>
                    </a>
                    <a href="#" className='underline'>
                        <span>Terms and Condition</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FooterSection
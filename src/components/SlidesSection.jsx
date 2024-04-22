import React , { useEffect, useState } from 'react'
import slideOne from './icons/slide-one.png'
import slideTwo from './icons/slide-two.png'
import slideThree from './icons/slide-three.png'

function SlidesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images, setImages] = useState([]);


  // This is to manipulate the scroller into displaying other contents..
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));

  };


  const changeScrollBarPosition = (currentSlide)=>{
    if(currentSlide === 1){
      return 'justify-center'
    }else if(currentSlide === 2){
      return 'justify-end'
    }else {
      return 'justify-start'
    }
  }

  useEffect(()=>{
    console.log(currentSlide)
    setImages([slideOne, slideTwo, slideThree])
  },[currentSlide])
  return (
    <section className="pl-[16px] w-[100%] h-auto 2xl:w-[1440px] 2xl:pt-[481px] pt-[90px] lg:pt-[90px] 2xl:pb-[180px]  2xl:pl-[70px] bg-[#FFFFFF]">
      
        {/* For bigger screens above 779px */}
       <div className="hidden sliding-row w-[100%] 2xl:w-[1440px] md:flex md:flex-col items-center justify-start">
            <div className='w-[100%] 2xl:w-[1300px]  rounded-[20px]'>
              <img src={`${images[currentSlide]}`} alt="" width={'100%'} height={'100%'} />
            </div>
            <div className={`scroll-bar my-4 w-[90%]  md:w-[50%] lg:w-[630px] h-[9px] rounded-[25%] bg-[#c6c7d6] cursor-pointer flex items-center  ${changeScrollBarPosition(currentSlide)}`}>
                <div className={`bg-[#202229] w-[20.2%] xl:w-[130px] h-[9px] rounded-[25%] cursor-pointer`} onClick={nextSlide}>

                </div>
            </div>
        </div>

        {/* For small screens less than 779px */}
       <div className="md:hidden sliding-row w-[100%] h-auto pt-[85px] pb-[40px] ">
            <div className='w-[100%] 2xl:w-[1300px] rounded-[20px]'>
              <img src={`${slideOne}`} alt="" width={'100%'} height={'100%'} />
            </div>
            <div className='w-[100%] 2xl:w-[1300px] rounded-[20px]'>
              <img src={`${slideTwo}`} alt="" width={'100%'} height={'100%'} />
            </div>
            <div className='w-[100%] 2xl:w-[1300px] rounded-[20px]'>
              <img src={`${slideThree}`} alt="" width={'100%'} height={'100%'} />
            </div>
           
        </div>

    </section>
  )
}

export default SlidesSection;
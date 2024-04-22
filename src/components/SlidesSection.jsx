import React , { useEffect, useState } from 'react'
import slideOne from './icons/slide-one.png'
import slideTwo from './icons/slide-two.png'
import slideThree from './icons/slide-three.png'

function SlidesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images, setImages] = useState([]);


  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));

  };

  const changeScrollBarPosition = (currentSlide)=>{
    if(currentSlide === 1){
      return 'justify-center'
    }else if(currentSlide === 1){
      return 'justify-end'
    }else {
      return 'justify-start'
    }
  }

  useEffect(()=>{
    setImages([slideOne, slideTwo, slideThree])
  },[])
  return (
    <section className="pl-[16px] w-[100%] h-[1025] 2xl:w-[1440px] 2xl:pl-[70px] bg-[#E1E3F8]">
      
       <div className="sliding-row w-[100%] h-[100%] 2xl:w-[1440px] pt-[185px] pb-[90px] 2xl:pt-[481px] flex flex-col items-center ">
            <div className='w-[90.2%] 2xl:w-[1300px] h-[652px] rounded-[20px]'>
              <img src={`${images[currentSlide]}`} alt="" width={'100%'} height={'100%'} />
            </div>
            <div className="scroll-wrap">
              <div className={`scroll-bar w-[88%] xl:w-[630px] h-[9px] rounded-[25%] bg-[#c6c7d6] cursor-pointer flex items-center  ${changeScrollBarPosition(currentSlide)}`}>
                <div className={`bg-[#202229] w-[20.2%] xl:w-[130px] h-[9px] rounded-[25%] cursor-pointer`} onClick={nextSlide}>

                </div>
              </div>
            </div>
        </div>

    </section>
  )
}

export default SlidesSection;
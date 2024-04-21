import React from 'react'
import PositonReuse from './PositonReuse';
import shopifyImg from '../icons/shopify.jpg';
import webflowImg from '../icons/webflow.jpg';
import dataImg from '../icons/data.jpg';
import dotNetImg from '../icons/dotnet.jpg';
import arrowFrontImg from '../icons/arrow-front.jpg';
import magnettoImg from '../icons/magnetto.jpg';
import unrealImg from '../icons/unreal.jpg';
import uxImg from '../icons/ux.jpg';
import graphicsImg from '../icons/graphics.jpg';
import cinemaImg from '../icons/cinema.jpg';
import arrowBackImg from '../icons/arrow-back.jpg';
import artistImg from '../icons/artist.jpg';

export function BannerReuse1() {
  return (
    <div className="market-banner -mt-[9px] z-30">
        <PositonReuse title={"Shopify Developer"} image={shopifyImg}/>
        <PositonReuse title={"Magneto Developer"} image={magnettoImg}/>
        <PositonReuse title={"Data And Scientist"} image={dataImg}/>
        <PositonReuse title={"Webflow Developer"} image={webflowImg}/>
        <PositonReuse title={"Dot Net Developer"} image={dotNetImg}/>
        <PositonReuse title={""} image={arrowFrontImg}/>
    </div>
  )
}

export function BannerReuse2() {
  return (
    <div className="market-banner mt-[15px]">
        <PositonReuse title={""} image={arrowBackImg}/>
        <PositonReuse title={"UX Designer"} image={uxImg}/>
        <PositonReuse title={"Graphics Designer"} image={graphicsImg}/>
        <PositonReuse title={"Illustration Artist"} image={artistImg}/>
        <PositonReuse title={"Unreal Engine"} image={unrealImg}/>
        <PositonReuse title={"Cinema 4D"} image={cinemaImg}/>
    </div>
  )
}

import React from 'react'

function HeroBannerList({props}) {
  return (
    <ul className="w-full flex flex-col gap-[18px] mb-8 md:mb-0">
      <li className="w-full h-[16px] text-[16px] text-left align-middle">
        {props.first}
      </li>
      <li className="w-full h-[16px] text-[16px] text-left align-middle">
        {props.second}
      </li>
      <li className="w-full h-[16px] text-[16px] text-left align-middle">
        {props.third}
      </li>
      <li className="w-full h-[16px] text-[16px] text-left align-middle">
        {props.fourth}
      </li>
    </ul>
  );
}

export default HeroBannerList
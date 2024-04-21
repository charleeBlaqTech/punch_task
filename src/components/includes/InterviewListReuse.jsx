import React from 'react'
import eyeImg from '../icons/eye1.jpg';

function InterviewListReuse({props}) {
  return (
    <div className="items-wrap border-2 border-[#F0F0F0]  w-full lg:w-[635px] h-[80px] bg-[#F4F4F4] rounded-[7px] pl-[20px] py-[11px] mb-[4px] flex items-center gap-[23px]">
      <div className="icon-wrap w-[57px] h-[57px] bg-[#ECECEC] rounded-[43.94px] flex items-center p-[21px]">
            <div className='w-[15.83px] h-[14.9px] bg-[#000000] '>
                <img src={eyeImg} alt="" width={'100%'} height={'100%'}/>
            </div>
      </div>
      <div className="text-wrap flex items-center gap-1 w-[193px] h-[18px]">
        <span className="w-auto text-left align-top leading-[17.8px] text-[16px]">
          {props.step}:
        </span>
        <span className="w-auto text-left align-top leading-[17.8px] text-[16px]">
          {props.interviewType}
        </span>
      </div>
    </div>
  );
}

export default InterviewListReuse
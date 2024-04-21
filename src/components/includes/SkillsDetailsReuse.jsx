import React from 'react'
import vecImg from '../icons/vec-circle.jpg';
import vecCircleImg from '../icons/vec-star.jpg';
import vecDashImg from '../icons/vec-dash.jpg';
import exploreImg from '../icons/explore.jpg';

function SkillsDetailsReuse({title,postion}) {
  return (
    <div className="left-block-top-wrap">
      <div className="left-block-top-header-wrap  w-[340px] lg:w-[380px]  h-[68px] text-[#202229]">
        <h3 className="h-auto text-left align-top leading-[34px] text-[24px]">
          {title}
        </h3>
      </div>

      <div className="left-block-top-content-wrap mt-[20px] flex items-center gap-[27px] lg:gap-[92px]">
        <div className="w-[98px] h-[32px] flex items-center gap-[8px]">
          <div className="icon-wrap w-[16px] h-[21px]">
            <img src={vecImg} alt="image" width={"100%"} height={"100%"} />
          </div>
          <div className="text-wrap w-[74px] h-[32px]">
            <span className="w-auto text-left align-top leading-[32px] text-[16px]">
              989 Skills
            </span>
          </div>
        </div>
        <div className="w-[167px] h-[32px] flex items-center gap-[8px]">
          <div className="icon-wrap w-[18px] h-[18px]">
            <img src={vecDashImg} alt="image" width={"100%"} height={"100%"} />
          </div>
          <div className="text-wrap w-[167px] h-[32px]">
            <span className="w-auto text-left align-top leading-[32px] text-[16px]">
              45 Sub-Categories
            </span>
          </div>
        </div>
      </div>

    {
        postion === 'bottom'?(
            <div className="mt-[8px] flex items-center justify-start">
            <div className="left-image-text-wrap w-[123px] h-[32px] flex items-center gap-[8px]">
              <div className="icon-wrap w-[16px] h-[21px]">
                <img
                  src={vecCircleImg}
                  alt="image"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <div className="text-wrap w-[99px] h-[32px]">
                <span className="text-left align-top leading-[32px] text-[16px]">
                  1011 Profile
                </span>
              </div>
            </div>
          </div>
        ):<div/>
    }
    </div>
  );
}

export default SkillsDetailsReuse


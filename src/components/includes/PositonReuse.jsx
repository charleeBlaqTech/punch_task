import React from "react";

function PositonReuse({title, image}) {
  return (
    <div className="position-wrap flex flex-col items-center justify-center gap-3">
      <div className="img w-[96px] h-[96px]">
            <img src={image} alt="image" width={'100%'} height={'100%'} />
      </div>
      <div className={`title h-[36px] w-[81px] mr-[15px]`}>
        <p className="text-center leading-[18px] align-top h-auto text-[14px]">{title}</p>
      </div>
    </div>
  );
}

export default PositonReuse;

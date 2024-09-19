import React from "react";

function Features() {
  return (
    <div className="px-[150px] mb-[211px] flex items-center justify-center gap-[169px]">
      <div>
        <img src="./service.svg" alt="" />
      </div>
      <div className="flex flex-col gap-5 w-[427px]">
        <h1 className="font-medium text-custom-blue text-[35px]">
          We Provide Many Features You Can Use
        </h1>
        <p className="font-normal text-custom-gray text-custom-16px">
          You can explore the features that we provide with fun and have their
          own functions each feature.
        </p>
        <div className="flex items-center gap-3">
          <img src="./checked.svg" alt="" />
          <span className="font-normal text-custom-gray text-[14px]">
            Powerfull online protection.
          </span>
        </div>
        <div className="flex items-center gap-3">
          <img src="./checked.svg" alt="" />
          <span className="font-normal text-custom-gray text-[14px]">
            Powerfull online protection.
          </span>
        </div>
        <div className="flex items-center gap-3">
          <img src="./checked.svg" alt="" />
          <span className="font-normal text-custom-gray text-[14px]">
            Powerfull online protection.
          </span>
        </div>
        <div className="flex items-center gap-3">
          <img src="./checked.svg" alt="" />
          <span className="font-normal text-custom-gray text-[14px]">
            Powerfull online protection.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Features;

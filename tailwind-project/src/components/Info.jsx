import React from "react";

function Info() {
  return (
    <div className="w-[1140px] h-[200px] shadow mb-[95px] mx-auto rounded-[10px] bg-custom-white py-[37.5px] flex items-center justify-center gap-10 mt-[103px]">
      {/* 🚩 */}
      <div className="flex items-center justify-center gap-9 px-[91px]">
        <div className="w-[55px] h-[55px] rounded-full bg-custom-pink flex items-center justify-center">
          <img src="./user.svg" alt="" />
        </div>
        <div className="flex flex-col items-start gap-1">
          <span className="font-bold text-custom-blue text-[25px]">90+</span>
          <span className="font-normal text-custom-gray text-[20px]">
            Users
          </span>
        </div>
      </div>
      <div className="h-full border-2 border-custom-light"></div>
      {/* 🚩 */}
      <div className="flex items-center justify-center gap-9 px-[91px]">
        <div className="w-[55px] h-[55px] rounded-full bg-custom-pink flex items-center justify-center">
          <img src="./location.svg" alt="" />
        </div>
        <div className="flex flex-col items-start gap-1">
          <span className="font-bold text-custom-blue text-[25px]">30+</span>
          <span className="font-normal text-custom-gray text-[20px]">
            Locations
          </span>
        </div>
      </div>
      <div className="h-full border-2 border-custom-light"></div>
      {/* 🚩 */}
      <div className="flex items-center justify-center gap-9 px-[91px]">
        <div className="w-[55px] h-[55px] rounded-full bg-custom-pink flex items-center justify-center">
          <img src="./server.svg" alt="" />
        </div>
        <div className="flex flex-col items-start gap-1">
          <span className="font-bold text-custom-blue text-[25px]">50+</span>
          <span className="font-normal text-custom-gray text-[20px]">
            Servers
          </span>
        </div>
      </div>
    </div>
  );
}

export default Info;

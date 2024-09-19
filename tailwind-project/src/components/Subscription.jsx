import React from "react";

function Subscription() {
  return (
    <div className="w-[1140px] h-[233px] mx-auto py-[58px] px-[70px] flex items-center justify-between rounded-[10px] shadow mb-[60px]">
      <div className="flex flex-col items-start gap-5">
        <h1 className="text-custom-blue text-[35px] font-medium w-[371px]">
          Subscribe Now for Get Special Features!
        </h1>
        <p className="text-custom-16px text-custom-gray font-normal">
          Let's subscribe with us and find the fun.
        </p>
      </div>
      <button className="py-[17.5px] px-[65px] rounded-[10px] bg-custom-red text-custom-16px text-custom-white font-bold hover:opacity-80 duration-300">
        Subscribe Now
      </button>
    </div>
  );
}

export default Subscription;

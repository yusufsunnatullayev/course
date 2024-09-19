import React from "react";

function Hero() {
  return (
    <div className="flex items-center justify-start ps-[150px] pr-[83px] gap-10 py-[30px]">
      <div className="flex flex-col items-start">
        <h1 className="text-custom-blue text-custom-50px font-bold">
          Want anything to be easy with LaslesVPN.
        </h1>
        <p className="mt-5 mb-[50px] text-custom-gray text-custom-16px font-normal">
          Provide a network for all your needs with ease and fun using LaslesVPN
          discover interesting features from us.
        </p>
        <button className="py-[17.5px] px-[77.5px] bg-custom-red text-custom-white text-custom-16px font-bold rounded-[10px] hover:opacity-80 duration-300">
          Get Started
        </button>
      </div>
      <img src="./hero.svg" alt="" />
    </div>
  );
}

export default Hero;

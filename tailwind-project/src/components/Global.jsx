import React from "react";

function Global() {
  return (
    <div className="flex flex-col mb-[50px] px-[150px] items-center">
      <h1 className="text-custom-blue text-[35px] font-medium w-[383px] text-center">
        Huge Global Network of Fast VPN
      </h1>
      <p className="text-custom-16px text-custom-gray font-normal mt-5 mb-[155px]">
        See LaslesVPN everywhere to make it easier for you when you move
        locations.
      </p>
      <img className="w-[1060px] h-[537px]" src="./global.svg" alt="" />
      <img className="w-[1135px] h-[208px] mt-9" src="./sponsored.svg" alt="" />
    </div>
  );
}

export default Global;

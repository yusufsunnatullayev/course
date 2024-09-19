import React from "react";

function Plan() {
  return (
    <div className="flex flex-col mb-[150px] items-center px-[175px] ">
      <h1 className="font-medium text-custom-blue text-[35px]">
        Choose Your Plan
      </h1>
      <p className="font-normal text-custom-16px text-custom-gray mt-5 mb-[60px]">
        Let's choose the package that is best for you and explore it happily and
        cheerfully.
      </p>
      <div className="flex items-center justify-center gap-5">
        {/* 🚩 */}
        <div className=" relative h-[760px] py-[50px] px-[76px] flex flex-col gap-[30px] items-center rounded-[10px] border-2 border-custom-221">
          <img src="./plan.svg" alt="" />
          <span className="font-medium text-custom-blue text-[18px]">
            Free Plan
          </span>
          <div className="flex flex-col gap-[10px]">
            <div className="flex items-center gap-[25px]">
              <img src="./checked2.svg" alt="" />
              <span className="font-normal text-custom-gray text-[14px]">
                Unlimited Bandwitch
              </span>
            </div>
            <div className="flex items-center gap-[25px]">
              <img src="./checked2.svg" alt="" />
              <span className="font-normal text-custom-gray text-[14px]">
                Encrypted Connection
              </span>
            </div>
            <div className="flex items-center gap-[25px]">
              <img src="./checked2.svg" alt="" />
              <span className="font-normal text-custom-gray text-[14px]">
                No Traffic Logs
              </span>
            </div>
            <div className="flex items-center gap-[25px]">
              <img src="./checked2.svg" alt="" />
              <span className="font-normal text-custom-gray text-[14px]">
                Works on All Devices
              </span>
            </div>
          </div>
          <div className="mt-[100px] flex flex-col items-center gap-5 absolute bottom-[50px]">
            <span className="font-medium text-custom-blue text-[25px]">
              Free
            </span>
            <button className="py-[13px] px-[67px] flex items-center justify-center rounded-[50px] border-2 border-custom-red text-custom-red text-custom-16px font-bold hover:bg-custom-red hover:text-custom-white duration-300">
              Select
            </button>
          </div>
        </div>
        {/* 🚩 */}
        <div className=" relative h-[760px] py-[50px] px-[76px] flex flex-col gap-[30px] items-center rounded-[10px] border-2 border-custom-221">
          <img src="./plan.svg" alt="" />
          <span className="font-medium text-custom-blue text-[18px]">
            Standard Plan
          </span>
          <div className="flex flex-col gap-[10px]">
            <div className="flex items-center gap-[25px]">
              <img src="./checked2.svg" alt="" />
              <span className="font-normal text-custom-gray text-[14px]">
                Unlimited Bandwitch
              </span>
            </div>
            <div className="flex items-center gap-[25px]">
              <img src="./checked2.svg" alt="" />
              <span className="font-normal text-custom-gray text-[14px]">
                Encrypted Connection
              </span>
            </div>
            <div className="flex items-center gap-[25px]">
              <img src="./checked2.svg" alt="" />
              <span className="font-normal text-custom-gray text-[14px]">
                Yes Traffic Logs
              </span>
            </div>
            <div className="flex items-center gap-[25px]">
              <img src="./checked2.svg" alt="" />
              <span className="font-normal text-custom-gray text-[14px]">
                Works on All Devices
              </span>
            </div>
            <div className="flex items-center gap-[25px]">
              <img src="./checked2.svg" alt="" />
              <span className="font-normal text-custom-gray text-[14px]">
                Connect Anyware
              </span>
            </div>
          </div>
          <div className="mt-[100px] flex flex-col items-center gap-5 absolute bottom-[50px]">
            <span className="font-medium text-custom-blue text-[25px]">
              $9 <span className="text-custom-gray">/ mo</span>
            </span>
            <button className="py-[13px] px-[67px] flex items-center justify-center rounded-[50px] border-2 border-custom-red text-custom-red text-custom-16px font-bold hover:bg-custom-red hover:text-custom-white duration-300">
              Select
            </button>
          </div>
        </div>
        {/* 🚩 */}
        <div className=" relative h-[760px] py-[50px] px-[76px] flex flex-col gap-[30px] items-center rounded-[10px] border-2 border-custom-221">
          <img src="./plan.svg" alt="" />
          <span className="font-medium text-custom-blue text-[18px]">
            Premium Plan
          </span>
          <div className="flex flex-col gap-[10px]">
            <div className="flex items-center gap-[25px]">
              <img src="./checked2.svg" alt="" />
              <span className="font-normal text-custom-gray text-[14px]">
                Unlimited Bandwitch
              </span>
            </div>
            <div className="flex items-center gap-[25px]">
              <img src="./checked2.svg" alt="" />
              <span className="font-normal text-custom-gray text-[14px]">
                Encrypted Connection
              </span>
            </div>
            <div className="flex items-center gap-[25px]">
              <img src="./checked2.svg" alt="" />
              <span className="font-normal text-custom-gray text-[14px]">
                Yes Traffic Logs
              </span>
            </div>
            <div className="flex items-center gap-[25px]">
              <img src="./checked2.svg" alt="" />
              <span className="font-normal text-custom-gray text-[14px]">
                Works on All Devices
              </span>
            </div>
            <div className="flex items-center gap-[25px]">
              <img src="./checked2.svg" alt="" />
              <span className="font-normal text-custom-gray text-[14px]">
                Connect Anyware
              </span>
            </div>
            <div className="flex items-center gap-[25px]">
              <img src="./checked2.svg" alt="" />
              <span className="font-normal text-custom-gray text-[14px]">
                Get New Features
              </span>
            </div>
          </div>
          <div className="mt-[100px] flex flex-col items-center gap-5 absolute bottom-[50px]">
            <span className="font-medium text-custom-blue text-[25px]">
              $12 <span className="text-custom-gray">/ mo</span>
            </span>
            <button className="py-[13px] px-[67px] flex items-center justify-center rounded-[50px] bg-custom-red hover:opacity-80 duration-300 text-custom-white font-bold text-custom-16px">
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plan;

import React from "react";

function Testimonials() {
  return (
    <div className=" flex flex-col items-center mb-[100px]">
      <h1 className="text-custom-blue text-[35px] font-medium text-center w-[447px]">
        Trusted by Thousands of Happy Customer
      </h1>
      <p className="text-custom-16px text-custom-gray font-normal mt-5 mb-[60px] text-center w-[555px]">
        These are the stories of our customers who have joined us with great
        pleasure when using this crazy feature.
      </p>
      <div className="flex items-center justify-center gap-[50px] ps-[150px]">
        {/* 🚩 */}
        <div className="flex flex-col gap-5 p-[30px] w-[400px] h-[230px] rounded-[10px] border-2 border-custom-red">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <img src="./user1.svg" alt="" />
              <div className="flex flex-col items-start gap-1">
                <span className="font-medium text-custom-blue text-[18px]">
                  Viezh Robert
                </span>
                <span className="font-normal text-custom-gray text-[14px]">
                  Warsaw, Poland
                </span>
              </div>
            </div>
            <div className="flex items-center gap-[11px]">
              <span className="font-normal text-custom-16px text-custom-blue">
                4.5
              </span>
              <img src="./star.svg" alt="" />
            </div>
          </div>
          <p>
            “Wow... I am very happy to use this VPN, it turned out to be more
            than my expectations and so far there have been no problems.
            LaslesVPN always the best”.
          </p>
        </div>
        {/* 🚩 */}
        <div className="flex flex-col gap-5 p-[30px] w-[400px] h-[230px] rounded-[10px] border-2 border-custom-221">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <img src="./user2.svg" alt="" />
              <div className="flex flex-col items-start gap-1">
                <span className="font-medium text-custom-blue text-[18px]">
                  Yessica Christy
                </span>
                <span className="font-normal text-custom-gray text-[14px]">
                  Shanxi, China
                </span>
              </div>
            </div>
            <div className="flex items-center gap-[11px]">
              <span className="font-normal text-custom-16px text-custom-blue">
                4.5
              </span>
              <img src="./star.svg" alt="" />
            </div>
          </div>
          <p>
            “I like it because I like to travel far and still can connect with
            high speed.”.
          </p>
        </div>
        {/* 🚩 */}
        <div className="flex flex-col gap-5 p-[30px] w-[400px] h-[230px] rounded-[10px] border-2 border-custom-221">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <img src="./user3.svg" alt="" />
              <div className="flex flex-col items-start gap-1">
                <span className="font-medium text-custom-blue text-[18px]">
                  Kim Young Jou
                </span>
                <span className="font-normal text-custom-gray text-[14px]">
                  Seoul, South Korea
                </span>
              </div>
            </div>
            <div className="flex items-center gap-[11px]">
              <span className="font-normal text-custom-16px text-custom-blue">
                4.5
              </span>
              <img src="./star.svg" alt="" />
            </div>
          </div>
          <p>
            “This is very unusual for my business that currently requires a
            virtual private network that has high security.”.
          </p>
        </div>
      </div>
      <div className="w-full  flex items-center justify-between px-[180px] mt-[60px]">
        <div className="flex items-center justify-start gap-[15px]">
          <div className="w-10 h-[15px] bg-custom-red rounded-[30px]"></div>
          <div className="w-[15px] h-[15px] bg-custom-221-224 rounded-full"></div>
          <div className="w-[15px] h-[15px] bg-custom-221-224 rounded-full"></div>
          <div className="w-[15px] h-[15px] bg-custom-221-224 rounded-full"></div>
        </div>
        <div className="flex items-center justify-end gap-5">
          <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center border-2 border-custom-red cursor-pointer">
            <img src="./arrow-left.svg" alt="" />
          </div>
          <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-custom-red cursor-pointer">
            <img src="./arrow-right.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

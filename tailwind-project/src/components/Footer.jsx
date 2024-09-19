import React from "react";

function Footer() {
  return (
    <div className="bg-custom-248 px-[150px] py-[63px] flex items-start justify-between">
      {/* 1🚩 */}
      <div className="flex flex-col items-start gap-5">
        <img src="./logo.svg" alt="" />
        <p className="text-custom-16px text-custom-gray font-normal w-[340px]">
          LaslesVPN is a private virtual network that has unique features and
          has high security.
        </p>
        <div className="flex items-center justify-center gap-5">
          <div className="w-[33.6px] h-[33.6px] rounded-full bg-custom-red">
            <img src="./facebook.svg" alt="" />
          </div>
          <div className="w-[33.6px] h-[33.6px] rounded-full bg-custom-red">
            <img src="./twitter.svg" alt="" />
          </div>
          <div className="w-[33.6px] h-[33.6px] rounded-full bg-custom-red">
            <img src="./instagram.svg" alt="" />
          </div>
        </div>
        <span className="text-custom-gray text-custom-16px font-normal">
          ©2020LaslesVPN
        </span>
      </div>
      {/* 2🚩 */}
      <div className="flex items-start justify-center gap-[126px]">
        {/* 🚩 */}
        <div className="flex flex-col items-start gap-[10px]">
          <h1 className="text-[18px] text-custom-blue font-medium mb-[10px]">
            Product
          </h1>
          <span className="text-custom-16px text-custom-gray font-normal">
            Download
          </span>
          <span className="text-custom-16px text-custom-gray font-normal">
            Pricing
          </span>
          <span className="text-custom-16px text-custom-gray font-normal">
            Locations
          </span>
          <span className="text-custom-16px text-custom-gray font-normal">
            Servers
          </span>
          <span className="text-custom-16px text-custom-gray font-normal">
            Countries
          </span>
          <span className="text-custom-16px text-custom-gray font-normal">
            Blog
          </span>
        </div>
        {/* 🚩 */}
        <div className="flex flex-col items-start gap-[10px]">
          <h1 className="text-[18px] text-custom-blue font-medium mb-[10px]">
            Engage
          </h1>
          <span className="text-custom-16px text-custom-gray font-normal">
            LaslesVPN ?
          </span>
          <span className="text-custom-16px text-custom-gray font-normal">
            FAQ
          </span>
          <span className="text-custom-16px text-custom-gray font-normal">
            Tutorials
          </span>
          <span className="text-custom-16px text-custom-gray font-normal">
            About Us
          </span>
          <span className="text-custom-16px text-custom-gray font-normal">
            Privacy Policy
          </span>
          <span className="text-custom-16px text-custom-gray font-normal">
            Terms of Service
          </span>
        </div>
        {/* 🚩 */}
        <div className="flex flex-col items-start gap-[10px]">
          <h1 className="text-[18px] text-custom-blue font-medium mb-[10px]">
            Earn Money
          </h1>
          <span className="text-custom-16px text-custom-gray font-normal">
            Affiliate
          </span>
          <span className="text-custom-16px text-custom-gray font-normal">
            Become Partner
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;

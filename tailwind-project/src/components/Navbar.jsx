import React from "react";

function Navbar() {
  return (
    <nav className="w-full bg-custom-white px-[150px] py-[45px] flex justify-between items-center">
      <div>
        <img src="./logo.svg" alt="" />
      </div>
      <div>
        <ul className="flex items-center gap-10">
          <li className="text-custom-gray text-custom-16px  font-normal cursor-pointer hover:text-custom-blue">
            About
          </li>
          <li className="text-custom-gray text-custom-16px font-normal cursor-pointer hover:text-custom-blue">
            Features
          </li>
          <li className="text-custom-gray text-custom-16px font-normal cursor-pointer hover:text-custom-blue">
            Pricing
          </li>
          <li className="text-custom-gray text-custom-16px font-normal cursor-pointer hover:text-custom-blue">
            Testimonials
          </li>
          <li className="text-custom-gray text-custom-16px font-normal cursor-pointer hover:text-custom-blue">
            Help
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-[30px]">
        <button className="text-custom-blue text-custom-16px font-medium hover:text-custom-gray duration-300">
          Sign In
        </button>
        <button className="text-custom-red text-custom-16px font-medium py-[13px] px-[45px] flex items-center rounded-[50px] border border-custom-red hover:bg-custom-red hover:text-custom-white duration-300">
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

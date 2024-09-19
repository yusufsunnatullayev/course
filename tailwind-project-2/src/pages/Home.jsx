import React from "react";

function Home() {
  return (
    <div className="w-full flex flex-col md:items-center  md:gap-[30px] lg:flex-row lg:items-start lg:justify-center">
      {/* Sidebar 🚩 */}
      <div className="flex lg:flex-col md:w-full lg:w-255 gap-6 md:gap-[10px] ">
        {/* Header 🚩 */}
        <div className="w-full md:w-1/3 lg:w-255  flex items-center justify-between lg:flex-col md:rounded-[10px] bg-custom-radial py-4 px-6 md:pt-[103px] lg:pt-12 lg:pb-6 lg:ps-6">
          <div className="flex flex-col gap-1 lg:gap-2">
            <h1 className="font-bold text-base lg:text-xl text-white-800">
              Frontend Mentor
            </h1>
            <span className="font-medium text-sm text-white-800">
              Feedback Board
            </span>
          </div>
          <img
            className="w-5 h-4 md:hidden cursor-pointer"
            src="./menu.svg"
            alt=""
          />
        </div>
        {/* Filter 🚩 */}
        <div className="w-full hidden md:flex md:w-1/3 lg:w-255  lg:flex flex-col items-start gap-[14px] rounded-[10px] bg-white-800 p-6">
          <div className="flex items-center justify-center gap-2">
            <button className="py-1 px-4 rounded-[10px] text-base font-medium text-white-800 bg-blue-500">
              All
            </button>
            <button className="py-1 px-4 rounded-[10px] text-base font-medium bg-white-600 text-blue-500">
              UI
            </button>
            <button className="py-1 px-4 rounded-[10px] text-base font-medium bg-white-600 text-blue-500">
              UX
            </button>
          </div>
          <div className="flex items-center justify-center gap-2">
            <button className="py-1 px-4 rounded-[10px] text-base font-medium bg-white-600 text-blue-500">
              Enhancement
            </button>
            <button className="py-1 px-4 rounded-[10px] text-base font-medium bg-white-600 text-blue-500">
              Bug
            </button>
          </div>
          <div className="flex items-center justify-center gap-2">
            <button className="py-1 px-4 rounded-[10px] text-base font-medium bg-white-600 text-blue-500">
              Feature
            </button>
          </div>
        </div>
        {/* Roadmap 🚩 */}
        <div className="w-full hidden md:flex md:w-1/3 lg:w-255  lg:flex flex-col gap-6 rounded-[10px] py-[19px] px-6 bg-white-800">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-lg text-blue-600">Roadmap</h1>
            <a
              href="#"
              className="text-sm font-semibold text-blue-500 underline"
            >
              View
            </a>
          </div>
          <div className="flex md:flex-col md:gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center gap-4">
                <div className="w-2 h-2 rounded-full bg-orange"></div>
                <span className="text-base font-normal text-gray">Planned</span>
              </div>
              <span className="font-bold text-base text-gray">2</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center gap-4">
                <div className="w-2 h-2 rounded-full bg-purple"></div>
                <span className="text-base font-normal text-gray">Planned</span>
              </div>
              <span className="font-bold text-base text-gray">3</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center gap-4">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <span className="text-base font-normal text-gray">Planned</span>
              </div>
              <span className="font-bold text-base text-gray">1</span>
            </div>
          </div>
        </div>
      </div>
      {/* Main 🚩 */}
      <div className="flex w-full flex-col gap-6 lg:w-825 ">
        {/* Main Header 🚩 */}
        <div className="w-full  flex items-center justify-between bg-blue-700 md:rounded-[10px] py-[14px] px-4  ">
          <div className="flex items-center justify-center gap-9">
            <div className=" hidden  md:flex items-center justify-center gap-4">
              <img src="./idea.svg" alt="" />
              <span className=" text-lg font-bold text-white-800">
                6 Suggestions
              </span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-sm font-normal text-white-800 flex items-center justify-center gap-1">
                Sort by : <h1 className="font-bold"> Most Upvotes</h1>
              </span>
              <img src="./arrow-down.svg" alt="" />
            </div>
          </div>
          <button className="py-3 px-4 bg-purple rounded-[10px] text-sm font-bold text-white-700">
            + Add Feedback
          </button>
        </div>
        {/* Main Suggestions 🚩 */}
        <div className="flex flex-col gap-4 py-8 px-6 md:py-0 md:px-0">
          {/* Suggestion 🚩 */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between bg-white-800 rounded-[10px] p-6">
            <div className=" md:flex md:items-start md:justify-center md:gap-10">
              <div className="hidden md:flex md:flex-col md:items-center md:justify-center md:gap-2 md:w-10 md:h-53 rounded-[10px] bg-white-700">
                <img className="w-2 h-1" src="./arrow-up.svg" alt="" />
                <span className="font-bold text-blue-600 text-sm">112</span>
              </div>
              <div className="flex flex-col items-start gap-2">
                <h1 className="font-bold text-sm md:text-lg text-blue-600">
                  Add tags for solutions
                </h1>
                <p className="text-gray font-normal text-sm md:text-base">
                  Easier to search for solutions based on a specific stack.
                </p>
                <button className="py-1 px-4 rounded-[10px] text-sm md:text-base font-semibold bg-white-600 text-blue-500">
                  Enhancement
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex md:hidden items-center justify-center gap-[10px] w-69 h-8 rounded-[10px] bg-white-700">
                <img src="./arrow-up.svg" alt="" />
                <span className="font-bold text-blue-600 text-sm">112</span>
              </div>
              <div className="flex md:hidden items-center justify-center gap-1">
                <img src="./comment.svg" alt="" />
                <span className="font-bold text-blue-600 text-sm">2</span>
              </div>
              <div className="hidden md:flex items-center justify-center gap-1">
                <img src="./comment.svg" alt="" />
                <span className="font-bold text-blue-600 text-sm">2</span>
              </div>
            </div>
          </div>
          {/* Suggestion 🚩 */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between bg-white-800 rounded-[10px] p-6">
            <div className=" md:flex md:items-start md:justify-center md:gap-10">
              <div className="hidden md:flex md:flex-col md:items-center md:justify-center md:gap-2 md:w-10 md:h-53 rounded-[10px] bg-white-700">
                <img className="w-2 h-1" src="./arrow-up.svg" alt="" />
                <span className="font-bold text-blue-600 text-sm">99</span>
              </div>
              <div className="flex flex-col items-start gap-2">
                <h1 className="font-bold text-sm md:text-lg text-blue-600">
                  Add a dark theme option
                </h1>
                <p className="text-gray font-normal text-sm md:text-base">
                  It would help people with light sensitivities and who prefer
                  dark mode.
                </p>
                <button className="py-1 px-4 rounded-[10px] text-sm md:text-base font-semibold bg-white-600 text-blue-500">
                  Feature
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex md:hidden items-center justify-center gap-[10px] w-69 h-8 rounded-[10px] bg-white-700">
                <img src="./arrow-up.svg" alt="" />
                <span className="font-bold text-blue-600 text-sm">99</span>
              </div>
              <div className="flex md:hidden items-center justify-center gap-1">
                <img src="./comment.svg" alt="" />
                <span className="font-bold text-blue-600 text-sm">4</span>
              </div>
              <div className="hidden md:flex items-center justify-center gap-1">
                <img src="./comment.svg" alt="" />
                <span className="font-bold text-blue-600 text-sm">4</span>
              </div>
            </div>
          </div>
          {/* Suggestion 🚩 */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between bg-white-800 rounded-[10px] p-6">
            <div className=" md:flex md:items-start md:justify-center md:gap-10">
              <div className="hidden md:flex md:flex-col md:items-center md:justify-center md:gap-2 md:w-10 md:h-53 rounded-[10px] bg-white-700">
                <img className="w-2 h-1" src="./arrow-up.svg" alt="" />
                <span className="font-bold text-blue-600 text-sm">65</span>
              </div>
              <div className="flex flex-col items-start gap-2">
                <h1 className="font-bold text-sm md:text-lg text-blue-600">
                  Q&A within the challenge hubs
                </h1>
                <p className="text-gray font-normal text-sm md:text-base">
                  Challenge-specific Q&A would make for easy reference.
                </p>
                <button className="py-1 px-4 rounded-[10px] text-sm md:text-base font-semibold bg-white-600 text-blue-500">
                  Feature
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex md:hidden items-center justify-center gap-[10px] w-69 h-8 rounded-[10px] bg-white-700">
                <img src="./arrow-up.svg" alt="" />
                <span className="font-bold text-blue-600 text-sm">65</span>
              </div>
              <div className="flex md:hidden items-center justify-center gap-1">
                <img src="./comment.svg" alt="" />
                <span className="font-bold text-blue-600 text-sm">1</span>
              </div>
              <div className="hidden md:flex items-center justify-center gap-1">
                <img src="./comment.svg" alt="" />
                <span className="font-bold text-blue-600 text-sm">1</span>
              </div>
            </div>
          </div>
          {/* Suggestion 🚩 */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between bg-white-800 rounded-[10px] p-6">
            <div className=" md:flex md:items-start md:justify-center md:gap-10">
              <div className="hidden md:flex md:flex-col md:items-center md:justify-center md:gap-2 md:w-10 md:h-53 rounded-[10px] bg-white-700">
                <img className="w-2 h-1" src="./arrow-up.svg" alt="" />
                <span className="font-bold text-blue-600 text-sm">51</span>
              </div>
              <div className="flex flex-col items-start gap-2">
                <h1 className="font-bold text-sm md:text-lg text-blue-600">
                  Allow image/video upload to feedback
                </h1>
                <p className="text-gray font-normal text-sm md:text-base">
                  Images and screencasts can enhance comments on solutions.
                </p>
                <button className="py-1 px-4 rounded-[10px] text-sm md:text-base font-semibold bg-white-600 text-blue-500">
                  Enhancement
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex md:hidden items-center justify-center gap-[10px] w-69 h-8 rounded-[10px] bg-white-700">
                <img src="./arrow-up.svg" alt="" />
                <span className="font-bold text-blue-600 text-sm">51</span>
              </div>
              <div className="flex md:hidden items-center justify-center gap-1">
                <img src="./comment.svg" alt="" />
                <span className="font-bold text-blue-600 text-sm">2</span>
              </div>
              <div className="hidden md:flex items-center justify-center gap-1">
                <img src="./comment.svg" alt="" />
                <span className="font-bold text-blue-600 text-sm">2</span>
              </div>
            </div>
          </div>
          {/* Suggestion 🚩 */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between bg-white-800 rounded-[10px] p-6">
            <div className=" md:flex md:items-start md:justify-center md:gap-10">
              <div className="hidden md:flex md:flex-col md:items-center md:justify-center md:gap-2 md:w-10 md:h-53 rounded-[10px] bg-white-700">
                <img className="w-2 h-1" src="./arrow-up.svg" alt="" />
                <span className="font-bold text-blue-600 text-sm">42</span>
              </div>
              <div className="flex flex-col items-start gap-2">
                <h1 className="font-bold text-sm md:text-lg text-blue-600">
                  Ability to follow others
                </h1>
                <p className="text-gray font-normal text-sm md:text-base">
                  Stay updated on comments and solutions other people post.
                </p>
                <button className="py-1 px-4 rounded-[10px] text-sm md:text-base font-semibold bg-white-600 text-blue-500">
                  Feature
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex md:hidden items-center justify-center gap-[10px] w-69 h-8 rounded-[10px] bg-white-700">
                <img src="./arrow-up.svg" alt="" />
                <span className="font-bold text-blue-600 text-sm">42</span>
              </div>
              <div className="flex md:hidden items-center justify-center gap-1">
                <img src="./comment.svg" alt="" />
                <span className="font-bold text-blue-600 text-sm">3</span>
              </div>
              <div className="hidden md:flex items-center justify-center gap-1">
                <img src="./comment.svg" alt="" />
                <span className="font-bold text-blue-600 text-sm">3</span>
              </div>
            </div>
          </div>
          {/* Suggestion 🚩 */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between bg-white-800 rounded-[10px] p-6">
            <div className=" md:flex md:items-start md:justify-center md:gap-10">
              <div className="hidden md:flex md:flex-col md:items-center md:justify-center md:gap-2 md:w-10 md:h-53 rounded-[10px] bg-white-700">
                <img className="w-2 h-1" src="./arrow-up.svg" alt="" />
                <span className="font-bold text-blue-600 text-sm">3</span>
              </div>
              <div className="flex flex-col items-start gap-2">
                <h1 className="font-bold text-sm md:text-lg text-blue-600">
                  Preview images not loading
                </h1>
                <p className="text-gray font-normal text-sm md:text-base">
                  Challenge preview images are missing when you apply a filter.
                </p>
                <button className="py-1 px-4 rounded-[10px] text-sm md:text-base font-semibold bg-white-600 text-blue-500">
                  Bug
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex md:hidden items-center justify-center gap-[10px] w-69 h-8 rounded-[10px] bg-white-700">
                <img src="./arrow-up.svg" alt="" />
                <span className="font-bold text-blue-600 text-sm">3</span>
              </div>
              <div className="flex md:hidden items-center justify-center gap-1">
                <img src="./comment.svg" alt="" />
                <span className="font-bold text-blue-600 text-sm">0</span>
              </div>
              <div className="hidden md:flex items-center justify-center gap-1">
                <img src="./comment.svg" alt="" />
                <span className="font-bold text-blue-600 text-sm">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

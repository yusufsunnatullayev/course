import React from "react";
import { IoClose } from "react-icons/io5";

function EditTask({ closeEditModal }) {
  return (
    <div className="relative flex flex-col gap-5 py-10 px-20 rounded-md bg-slate-900 text-white items-center">
      <IoClose
        className="absolute top-2 right-4 cursor-pointer"
        onClick={closeEditModal}
      />
      <h1 className="text-2xl text-slate-400 font-bold">Edit Task</h1>
      <div className="flex flex-col items-start gap-4">
        <div className="flex flex-col items-start gap-2 w-full">
          <label htmlFor="" className="text-base text-slate-200 font-medium">
            Task Name
          </label>
          <input
            type="text"
            className="py-2 px-4 rounded-md bg-transparent border border-white text-white w-full"
          />
        </div>
        <div className="flex flex-col items-start gap-2 w-full">
          <label htmlFor="" className="text-base text-slate-200 font-medium">
            Task Time
          </label>
          <input
            type="time"
            className="py-2 px-4 rounded-md bg-transparent border border-white text-white w-full"
          />
        </div>
      </div>
      <button className="mt-4 w-full py-2 rounded-md bg-slate-800 text-white font-bold text-base hover:bg-slate-600 duration-300">
        Save
      </button>
    </div>
  );
}

export default EditTask;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between py-4 px-6 bg-slate-950 text-white">
      <Link to={"/"} className="font-bold text-xl">
        Posts
      </Link>
      <div className="flex items-center justify-center gap-5">
        <Link to={"/create-post"}>Create Post</Link>
        <Link to={"user"}>Users</Link>
        <button className="py-1 px-3 rounded-md bg-slate-800 text-white font-semibold text-base hover:bg-slate-600 duration-200">
          <Link to={"/login"}>Log in</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;

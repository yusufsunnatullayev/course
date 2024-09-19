import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center py-24">
      <div className="flex flex-col items-center w-1/4 gap-10 p-10 rounded-md bg-slate-800">
        <h1 className="text-3xl font-bold">Log In</h1>
        <form action="" className="flex flex-col gap-5 w-full">
          <input
            className="py-1 px-2 w-full rounded-md bg-transparent border border-white"
            type="email"
            placeholder="email"
          />
          <input
            className="py-1 px-2 w-full rounded-md bg-transparent border border-white"
            type="password"
            placeholder="password"
          />
          <button className="py-2 px-4 rounded-md w-full bg-slate-900 text-base font-semibold mt-2 hover:bg-slate-700 duration-200">
            Log in
          </button>
          <span className="self-center text-slate-400">
            create a new{" "}
            <Link
              to={"/register"}
              className="hover:text-white duration-200 border-b border-slate-400 hover:border-white"
            >
              account
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;

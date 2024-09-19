import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Login() {
  const { t } = useTranslation();
  return (
    <div className="w-full h-screen dark:bg-emerald-950 py-28">
      <div className=" w-1/3 mx-auto h-1/3 ">
        <form
          action=""
          className="flex flex-col gap-3 items-center content-center  bg-emerald-900 text-white p-7 w-3/4 mx-auto rounded-md"
        >
          <h1 className="text-3xl mb-2 font-semibold text-emerald-400">
            {t("Log In")}
          </h1>

          <div className="input-wrapper w-full flex flex-col items-start gap-1">
            <label htmlFor="email">{t("Email")}</label>
            <input
              required
              className="p-1  w-full rounded-sm px-2"
              type="email"
              id="email"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="input-wrapper w-full flex flex-col items-start gap-1">
            <label htmlFor="password">{t("Password")}</label>
            <input
              required
              className="p-1 text-black  w-full rounded-sm px-2"
              type="password"
              id="password"
              placeholder="password"
            />
          </div>
          <button className="btn bg-emerald-500 hover:bg-emerald-700 transition-all text-white font-medium rounded-sm border-none cursor-pointer w-full py-1 mt-5">
            {t("Log in")}
          </button>
          <span className="text-gray-300">
            {t("create a new")}{" "}
            <Link className="underline underline-offset-1" to={"/register"}>
              {t("account")}
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Login;

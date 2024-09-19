import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../features/authSlice";

function Register() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    let data = Object.fromEntries(form.entries());
    dispatch(addUser(data));
    navigate("/users");
    e.target.reset();
  };

  return (
    <div className="w-full h-screen dark:bg-emerald-950 py-28 ">
      <div className="form-container w-1/3 mx-auto h-1/3 ">
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex flex-col gap-3 items-center content-center  bg-emerald-900 text-white p-7 w-3/4 mx-auto rounded-md"
        >
          <h1 className="text-3xl mb-2 font-semibold text-emerald-400">
            {t("Register")}
          </h1>
          <div className="input-wrapper w-full flex flex-col gap-1 mx-auto ">
            <label htmlFor="username">{t("Username")}</label>
            <input
              name="username"
              className="p-1 text-black  w-full rounded-sm px-2"
              type="text"
              id="username"
              placeholder="username"
              required
            />
          </div>
          <div className="input-wrapper w-full flex flex-col items-start gap-1">
            <label htmlFor="email">{t("Email")}</label>
            <input
              name="email"
              className="p-1 text-black  w-full rounded-sm px-2"
              type="email"
              id="email"
              placeholder="example@gmail.com"
              required
            />
          </div>
          <div className="input-wrapper w-full flex flex-col items-start gap-1">
            <label htmlFor="password">{t("Password")}</label>
            <input
              name="password"
              className="p-1 text-black  w-full rounded-sm px-2"
              type="password"
              id="password"
              placeholder="password"
              required
            />
          </div>
          <button className="btn bg-emerald-500 hover:bg-emerald-700 transition-all text-white font-medium rounded-sm border-none cursor-pointer w-full py-1 mt-5">
            {t("Register")}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;

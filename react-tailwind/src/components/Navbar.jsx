import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { useTranslation } from "react-i18next";

function Navbar({ darkMode, setDarkMode }) {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <nav className="w-100 bg-emerald-950  text-white p-2 border-b border-white">
      <div className="container px-20 mx-auto  flex items-center justify-between ">
        <div className="logo">
          <Link to={"/"}>
            <img className="w-11 h-11" src="./removed-bg-logo.png" alt="" />
          </Link>
        </div>
        <div className="navigation flex justify-center items-center  gap-4">
          <NavLink to={"/"}>{t("Home")}</NavLink>
          <NavLink to={"/test"}>{t("Test")}</NavLink>
          <NavLink to={"/stuff"}>{t("Stuff")}</NavLink>
          <NavLink to={"/users"}>{t("Users")}</NavLink>
          <button onClick={() => setDarkMode((prev) => !prev)}>
            {darkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
          </button>
          <Link to={"/login"}>
            <button className="bg-emerald-600 hover:bg-emerald-500 transition-all text-white py-1 px-3 rounded-sm">
              {t("Log in")}
            </button>
          </Link>
          {/*Drop down 🚩 */}
          <select
            className="py-1 px-2 rounded-md bg-transparent border border-white outline-none font-semibold text-base"
            name=""
            id=""
            onChange={handleChangeLanguage}
          >
            <option className="bg-emerald-900 font-semibold text-sm" value="en">
              En
            </option>
            <option className="bg-emerald-900 font-semibold text-sm" value="ru">
              Ru
            </option>
            <option className="bg-emerald-900 font-semibold text-sm" value="uz">
              Uz
            </option>
          </select>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

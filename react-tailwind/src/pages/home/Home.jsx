import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { CiSearch } from "react-icons/ci";
import { useTranslation } from "react-i18next";

function Home() {
  const [res, setRes] = useState();
  const inputRef = useRef();
  const [val, setVal] = useState("");
  const API_KEY = "bba7ab9bd035d049765305fef6073578";
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setVal(inputRef.current.value);
    e.target.reset();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://muslimsalat.com/${val}.json?key=${API_KEY}`
        );
        setRes(res.data.items[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [val]);

  return (
    <div className="flex flex-col gap-80 w-full h-screen dark:bg-emerald-950 dark:text-white p-10 items-center">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-start py-1 px-3 rounded-md border border-emerald-700 dark:bg-transparent  dark:border-white gap-2">
          <CiSearch />
          <input
            ref={inputRef}
            className="bg-transparent border-none outline-none"
            type="search"
            placeholder={t("Enter city...")}
          />
        </div>
      </form>
      {!res ? (
        ""
      ) : (
        <div className="flex items-center justify-center gap-8">
          <div className="flex flex-col items-center w-40 gap-5 py-4 px-6 rounded-md border border-emerald-950 dark:border-white">
            <span className="text-2xl font-bold text-emerald-700 dark:text-white">
              {t("Fajr")}
            </span>
            <span className="text-xl font-semibold text-emerald-400 ">
              {res?.fajr}
            </span>
          </div>
          <div className="flex flex-col items-center w-40 gap-5 py-4 px-6 rounded-md border border-emerald-950 dark:border-white">
            <span className="text-2xl font-bold text-emerald-700 dark:text-white">
              {t("Shurooq")}
            </span>
            <span className="text-xl font-semibold text-emerald-400 ">
              {res?.shurooq}
            </span>
          </div>
          <div className="flex flex-col items-center w-40 gap-5 py-4 px-6 rounded-md border border-emerald-950 dark:border-white">
            <span className="text-2xl font-bold text-emerald-700 dark:text-white">
              {t("Dhuhr")}
            </span>
            <span className="text-xl font-semibold text-emerald-400 ">
              {res?.dhuhr}
            </span>
          </div>
          <div className="flex flex-col items-center w-40 gap-5 py-4 px-6 rounded-md border border-emerald-950 dark:border-white">
            <span className="text-2xl font-bold text-emerald-700 dark:text-white">
              {t("Asr")}
            </span>
            <span className="text-xl font-semibold text-emerald-400 ">
              {res?.asr}
            </span>
          </div>
          <div className="flex flex-col items-center w-40 gap-5 py-4 px-6 rounded-md border border-emerald-950 dark:border-white">
            <span className="text-2xl font-bold text-emerald-700 dark:text-white">
              {t("Maghrib")}
            </span>
            <span className="text-xl font-semibold text-emerald-400 ">
              {res?.maghrib}
            </span>
          </div>
          <div className="flex flex-col items-center w-40 gap-5 py-4 px-6 rounded-md border border-emerald-950 dark:border-white">
            <span className="text-2xl font-bold text-emerald-700 dark:text-white">
              {t("Isha")}
            </span>
            <span className="text-xl font-semibold text-emerald-400 ">
              {res?.isha}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;

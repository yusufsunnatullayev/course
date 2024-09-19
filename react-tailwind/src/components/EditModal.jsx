import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoMdClose } from "react-icons/io";

function EditModal({ id, open, onClose, setOpen }) {
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const { t } = useTranslation();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/users/${id}`);
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [id]);

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/users/${id}`, user);
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative shadow flex flex-col gap-10 p-10 rounded-md bg-emerald-700 text-white w-1/4 "
      >
        <h1 className="font-bold text-3xl self-center">{t("Edit User")}</h1>
        <form
          onSubmit={(e) => handleEdit(e)}
          className="relative flex flex-col w-full gap-5 items-start"
        >
          <input
            className="py-1 px-3 rounded-md bg-transparent border border-white w-full outline-none"
            type="text"
            placeholder="username"
            defaultValue={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <input
            className="py-1 px-3 rounded-md bg-transparent border border-white w-full outline-none"
            type="email"
            placeholder="email"
            defaultValue={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            className="py-1 px-3 rounded-md bg-transparent border border-white w-full outline-none"
            type="text"
            placeholder="password"
            defaultValue={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <button className="w-full py-1 px-3 rounded-md bg-emerald-500 text-white self-center text-base font-semibold hover:opacity-80 duration-150">
            {t("Save")}
          </button>
        </form>
        <IoMdClose
          className="absolute top-3 right-3 cursor-pointer"
          onClick={() => setOpen(false)}
        />
      </div>
    </div>
  );
}

export default EditModal;

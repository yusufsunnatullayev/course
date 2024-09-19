import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { UsersTable, EditModal } from "../../components";
import { useDispatch } from "react-redux";
import { deleteUserById } from "../../features/authSlice";

function Users({ setId, id }) {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  // Fetch Users data 🚩
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8000/users");
        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const deleteUser = async (id) => {
    try {
      dispatch(deleteUserById(id));
      setUsers((prevUsers) => prevUsers.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    users.length > 0 && (
      <div className=" py-20 w-full px-10 h-screen dark:bg-emerald-950 ">
        <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10 ">
          <table className="w-full table-fixed  dark:text-white">
            <thead className="w-full">
              <tr className="bg-gray-100 dark:bg-emerald-700">
                <th className="dark:text-emerald-300 w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                  {t("Username")}
                </th>
                <th className="dark:text-emerald-300 w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                  {t("Email")}
                </th>
                <th className="dark:text-emerald-300 w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                  {t("Password")}
                </th>
                <th className="dark:text-emerald-300 w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                  {t("Edit")}
                </th>
                <th className="dark:text-emerald-300 w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                  {t("Delete")}
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-emerald-800">
              {users?.map((item) => (
                <UsersTable
                  key={item.id}
                  item={item}
                  deleteUser={deleteUser}
                  setOpen={setOpen}
                  setId={setId}
                />
              ))}
            </tbody>
          </table>
        </div>
        {open ? (
          <EditModal
            open={open}
            onClose={() => setOpen(false)}
            setOpen={setOpen}
            id={id}
          />
        ) : (
          ""
        )}
      </div>
    )
  );
}

export default Users;

import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../features/users/usersSlice";
import { Link } from "react-router-dom";

function UsersList() {
  const users = useSelector(selectAllUsers);

  const renderedUsers = users.map((user, idx) => (
    <ul
      key={user.id}
      className="flex items-center justify-center gap-2 hover:text-slate-300 duration-150"
    >
      <span>{idx + 1}</span>
      <Link to={`/user/${user.id}`}>{user.name}</Link>
    </ul>
  ));

  return (
    <section className="w-full h-screen flex flex-col px-52 py-20 gap-8">
      <h2 className="font-semibold text-4xl">Users:</h2>
      <ul className="flex flex-col gap-3 items-start">{renderedUsers}</ul>
    </section>
  );
}

export default UsersList;

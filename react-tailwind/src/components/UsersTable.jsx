import React from "react";
import { FaRegTrashAlt, FaEdit } from "react-icons/fa";

function UsersTable({ item, deleteUser, setOpen, setId }) {
  const editHandler = () => {
    setOpen(true);
    setId(item.id);
  };
  return (
    <tr>
      <td className="py-4 px-6 border-b border-gray-200">{item.username}</td>
      <td className="py-4 px-6 border-b border-gray-200 truncate">
        {item.email}
      </td>
      <td className="py-4 px-6 border-b border-gray-200">{item.password}</td>
      <td className="py-4 px-6 border-b border-gray-200 cursor-pointer">
        <FaEdit onClick={editHandler} />
      </td>
      <td className="py-4 px-6 border-b border-gray-200 cursor-pointer">
        <FaRegTrashAlt onClick={() => deleteUser(item.id)} />
      </td>
    </tr>
  );
}

export default UsersTable;

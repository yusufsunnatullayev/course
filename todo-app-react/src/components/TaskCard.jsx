import React from "react";
import { CiEdit } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";

function TaskCard({
  taskName,
  taskTime,
  id,
  deleteTask,
  checked,
  changeTaskChecked,
  showEditModal,
}) {
  const handleDelete = () => {
    deleteTask(id);
  };

  const handleChange = (e) => {
    changeTaskChecked(id, e.target.checked);
  };

  return (
    <div
      className={`w-full flex items-center justify-between p-5 rounded-md text-white ${
        checked ? "line-through" : ""
      }
       ${checked ? "bg-slate-600" : "bg-slate-900"}
      `}
    >
      <div className="flex items-center justify-center gap-2">
        <input
          className="cursor-pointer"
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
        <h1 className="text-xl capitalize font-semibold">{taskName}</h1>
      </div>
      <div className="flex items-center justify-start gap-4">
        <span className="font-medium ">Time: {taskTime}</span>
        <CiEdit className="cursor-pointer" onClick={showEditModal} />
        <FaRegTrashAlt onClick={handleDelete} className="cursor-pointer" />
      </div>
    </div>
  );
}

export default TaskCard;

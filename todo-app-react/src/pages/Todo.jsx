import { nanoid } from "nanoid";
import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import TaskCard from "../components/TaskCard";
import { FaRegTrashAlt } from "react-icons/fa";
import EditTask from "../components/EditTask";

function Todo() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [changedTasks, setChangedTasks] = useState([]);
  const [editModal, setEditModal] = useState(false);

  useEffect(() => {
    setChangedTasks(tasks);
  }, [tasks]);

  const allTasks = tasks.length;

  // Add Function 🚩
  const addTaskHandler = (e) => {
    e.preventDefault();
    console.log(e.target.name);
    const taskName = e.target.taskName.value;
    const taskTime = e.target.taskTime.value;
    const taskObj = {
      taskName,
      taskTime,
      checked: false,
      id: nanoid(),
    };
    setTasks((prev) => [...prev, taskObj]);
    e.target.taskName.value = "";
    e.target.taskTime.value = "";
  };

  // Delete Function 🚩
  const deleteTask = (id) => {
    const filtered = tasks.filter((item) => item.id !== id);
    setTasks(filtered);
  };

  // Search Function 🚩
  const searchTask = (e) => {
    const query = e.target.value;
    const searchedTask = tasks.filter((item) =>
      item.taskName.toLowerCase().includes(query.toLowerCase())
    );
    setChangedTasks(searchedTask);
  };

  // Sort Function 🚩
  const sortTask = (key, index) => {
    if (key === "All") {
      setChangedTasks(tasks);
      return;
    }
    const sortedTask = [...tasks].sort((a, b) =>
      a[key] > b[key] ? index : -index
    );
    setChangedTasks(sortedTask);
  };

  // Change Checkbox 🚩

  const changeTaskChecked = (id, value) => {
    const changedTask = changedTasks.map((item) => {
      return item.id === id
        ? {
            ...item,
            checked: value,
          }
        : item;
    });
    setTasks(changedTask);
  };

  // Clear All 🚩

  const clearAll = () => {
    const filtered = tasks.filter((item) => !item.checked);
    setTasks(filtered);
  };

  // All Checked 🚩

  const handleAllChecked = (e) => {
    const checkedAll = tasks.map((item) => {
      return {
        ...item,
        checked: e.target.checked,
      };
    });
    setTasks(checkedAll);
  };

  // Show Edit Modal 🚩

  const showEditModal = () => {
    setEditModal(true);
  };

  // Close Edit Modal 🚩
  const closeEditModal = () => {
    setEditModal(false);
  };

  // Use Effect 🚩
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  console.table(tasks);

  return (
    <div className="relative w-full py-10 flex flex-col items-center gap-10 ">
      <h1 className="font-bold text-5xl text-slate-300">To do App</h1>
      <div
        className={` flex flex-col items-start gap-7 py-5 px-8 rounded-[10px] bg-slate-900 text-white ${
          editModal ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        <form
          onSubmit={(e) => addTaskHandler(e)}
          className="flex items-center justify-center gap-3"
        >
          <input
            required
            name="taskName"
            className="py-2 px-4 rounded-md text-base font-medium text-slate-900"
            type="text"
            placeholder="Add Task name"
          />
          <input
            required
            name="taskTime"
            className="py-2 px-4 rounded-md text-base font-medium text-slate-900"
            type="time"
            placeholder="Add Task time"
          />
          <button className="py-2 px-4 font-semibold text-white bg-slate-700 rounded-md hover:bg-slate-500 duration-300">
            Add
          </button>
        </form>
        <div className="flex items-center justify-center gap-5">
          <div className="flex items-center justify-start gap-2 bg-slate-600 py-2 px-3 rounded-md">
            <CiSearch />
            <input
              onChange={searchTask}
              className="bg-transparent text-white border-none outline-none"
              type="text"
              placeholder="Search..."
            />
          </div>
          <div className="flex items-center justify-center gap-2">
            <h1 className="font-semibold">Sort by:</h1>
            <select
              className="py-2 px-4 rounded-md bg-transparent outline-none border border-white"
              name="sortBy"
              id="sortBy"
              onChange={(e) => sortTask(e.target.value, 1)}
            >
              <option
                className="bg-slate-900 text-white font-medium"
                value="all"
              >
                All
              </option>
              <option
                className="bg-slate-900 text-white font-medium"
                value="letter"
              >
                Letter
              </option>
            </select>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col gap-5 w-3/4 ${
          editModal ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        <div className="flex items-center justify-between">
          {changedTasks.length > 0 ? (
            <h1 className="text-xl text-slate-300 font-semibold">
              All tasks: <span className="text-white">{allTasks}</span>
            </h1>
          ) : (
            ""
          )}

          {changedTasks.length > 0 ? (
            <div className="flex items-center justify-center gap-5">
              <div className="flex items-center justify-center gap-3">
                <span className="text-slate-400 font-medium text-sm">
                  Select all as completed:
                </span>
                <input
                  type="checkbox"
                  className="cursor-pointer"
                  onChange={handleAllChecked}
                />
              </div>
              <div className="flex items-center justify-center gap-3">
                <span className="text-slate-400 font-medium text-sm">
                  Delete all completed tasks:{" "}
                </span>
                <FaRegTrashAlt
                  onClick={clearAll}
                  className="cursor-pointer text-white"
                />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        {changedTasks.map((item) => (
          <TaskCard
            key={item.id}
            {...item}
            deleteTask={deleteTask}
            changeTaskChecked={changeTaskChecked}
            showEditModal={showEditModal}
          />
        ))}
      </div>
      {editModal ? (
        <div className="fixed top-1/3 z-50">
          <EditTask closeEditModal={closeEditModal} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Todo;

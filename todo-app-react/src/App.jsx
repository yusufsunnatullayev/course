import React from "react";
import { Route, Routes } from "react-router-dom";
import Todo from "./pages/Todo";
import EditTask from "./components/EditTask";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Todo />} />
      </Routes>
    </>
  );
}

export default App;

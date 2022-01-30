import React, { useState } from "react";
import FormTodo from "./FormTodo/FormTodo.jsx";
import TaskList from "./TaskList/TaskList.jsx";
import "./DayList.css";

const DayList = () => {
  const [list, setList] = useState([]);
  const handleAddItem = (addItem) => {
    setList([...list, addItem]);
  };
  return (
    <>
      <div className="day-list">
        <FormTodo handleAddItem={handleAddItem} />
        <TaskList list={list} setList={setList} />
      </div>
    </>
  );
};

export default DayList;

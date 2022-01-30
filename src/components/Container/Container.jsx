import React, { useState } from "react";
import FormTodo from "./FormTodo/FormTodo.jsx";
import TaskList from "./TaskList/TaskList.jsx";
import "./Container.css";

const Container = () => {
  const [list, setList] = useState([]);
  const handleAddItem = (addItem) => {
    setList([...list, addItem]);
  };
  return (
    <>
      <div className="container">
      <h1>Tareas</h1>
        <FormTodo handleAddItem={handleAddItem} />
        <TaskList list={list} setList={setList} />
      </div>
    </>
  );
};

export default Container;

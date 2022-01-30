import React, { useState } from "react";
import "./FormTodo.css";

const FormTodo = (props) => {
  const { handleAddItem } = props;
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItem({
      done: false,
      id: (+new Date()).toString(),
      description,
    });
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="todo-list">
        <div className="file-input">
          <input
            type="text"
            className="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            className="buttonBlack"
            disabled={description ? "" : "disabled"}
          >
            {/*   if there isn't anything written, the button won't wark*/}
            Añadir tarea
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormTodo;

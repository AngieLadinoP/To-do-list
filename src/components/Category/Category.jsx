import React from "react";
import DayList from "../DayList/DayList";
import "./Category.css";
const Category = () => {
  const categories = ["Tareas", "Compras", "Otros"];
  return (
    <div className="category">
      {categories.map((category, index) => {
        return (
          <div key={index}>
            <h2>{category}</h2>
            <DayList />
          </div>
        );
      })}
    </div>
  );
};

export default Category;

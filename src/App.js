import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import DayList from "./components/DayList/DayList.jsx";
import Category from "./components/Category/Category.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<DayList />} />
            <Route path="/category" element={<Category />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}
export default App;

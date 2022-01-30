import React from "react";
import {HashRouter, Routes, Route, Navigate} from "react-router-dom"
import Header from "./components/Header/Header.jsx"
import Day from "./components/Day/Day.jsx";
import Week from "./components/Week/Week.jsx"
import "./App.css";
function App() {
  return (
    <div className="App">
<HashRouter>
<Routes>
<Route path="/" element={<Header/>}>
<Route index element={<Day/>} />
<Route path="/week" element={<Week/>}/>
<Route path="*" element={<Navigate replace to= "/"/>}/>
</Route>
</Routes>
</HashRouter>
    </div>
  );
}
export default App;

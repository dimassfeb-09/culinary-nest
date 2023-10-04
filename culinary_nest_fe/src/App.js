import "./App.css";
import Home from "./pages/Home";

import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Search from "./pages/Search";
import About from "./pages/About";
import DetailResto from "./pages/DetailResto";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="/detailresto" element={<DetailResto />} />
      </Routes>
    </>
  );
}

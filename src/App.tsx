import React from "react";
import "./App.css";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Grid from "./components/Grid";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/auth/login" />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/panel/dashboard" element={<Dashboard />} />
        <Route path="/panel/grid" element={<Grid />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./Layout";
import Budgets from "./pages/Budgets";
import Settings from "./pages/Settings";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Layout routes */}
        <Route path="/app" element={<Layout />}>
          <Route index element={<Dashboard />} /> {/* default page */}
           <Route path="budgets" element={<Budgets />} />   {/* /app/budgets */}
           <Route path="settings" element={<Settings />} /> {/* /app/settings */}
          
        </Route>

        {/* Catch-all route */}
        <Route path="*" element={<Intro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./Layout";
import Budgets from "./pages/Budgets";
import Settings from "./pages/Settings";
import ProtectedRoute from "./components/ProtectedRoutes";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      
        <Route
          path="/app/*"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          
          <Route index element={<Dashboard />} />  
          <Route path="budgets" element={<Budgets />} />  
          <Route path="settings" element={<Settings />} /> 

          {/* Catch-all for any invalid /app/* path */}
          <Route path="*" element={<Dashboard />} />       
        </Route>

        {/* Catch-all route for everything else */}
        <Route path="*" element={<Intro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

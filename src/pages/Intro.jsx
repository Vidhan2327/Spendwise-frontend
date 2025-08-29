import React from "react";
import { useNavigate } from "react-router-dom";

export default function Intro() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <div className="flex justify-end p-6 space-x-4">
        <button onClick={() => navigate("/login")} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg shadow-md transition duration-300">
          Login
        </button>
        <button onClick={() => navigate("/register")} className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg shadow-md transition duration-300">
          Register
        </button>
      </div>
      <div className="flex flex-col justify-center flex-1 px-12">
        <h1 className="text-5xl font-bold mb-6 text-left">Welcome to SpendWise AI</h1>
        <p className="text-gray-300 mb-8 text-left max-w-xl">
          The smartest way to manage your budget and achieve financial freedom.
        </p>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      setError("");
      navigate("/app"); // go to dashboard inside layout
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Login</h1>
      <form className="flex flex-col w-80 space-y-4" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <button type="button" onClick={handleLogin} className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
          Login
        </button>
      </form>
      {error && <p className="mt-3 text-red-400">{error}</p>}
      <p className="mt-4 text-gray-400">
        Don’t have an account?{" "}
        <button onClick={() => navigate("/register")} className="text-blue-400 underline">
          Register
        </button>
      </p>
      <button onClick={() => navigate("/")} className="mt-6 text-sm text-gray-500 hover:text-white">
        ← Back to Home
      </button>
    </div>
  );
}

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService"; // make sure path is correct

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    setError("");
    setLoading(true);

    try {
      const res = await authService.register(username, email, password);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/app"); 
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-start justify-center min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Register</h1>
      <form
        className="flex flex-col w-80 space-y-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="button"
          onClick={handleRegister}
          disabled={loading}
          className="bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg disabled:opacity-50"
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
      {error && <p className="mt-3 text-red-400">{error}</p>}
      <p className="mt-4 text-gray-400">
        Already have an account?{" "}
        <button
          onClick={() => navigate("/login")}
          className="text-blue-400 underline"
        >
          Login
        </button>
      </p>
      <button
        onClick={() => navigate("/")}
        className="mt-6 text-sm text-gray-500 hover:text-white"
      >
        ← Back to Home
      </button>
    </div>
  );
}

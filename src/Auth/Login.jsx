// src/pages/Login.jsx
import { useState } from "react";
import { UserAuth } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/collection");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="font-poppins flex justify-center items-center  min-h-screen bg-gray-100">
      <form className="bg-white p-8 rounded-2xl h-auto shadow-xl w-[400px]" onSubmit={handleLogin}>
        <h2 className="text-2xl font-semibold text-center">Welcome Back</h2>
        <p className="text-xs text-gray-600 font-medium text-center mb-6">Sign in to your account</p>
        <label>Email Address</label>
        <input type="email" placeholder="you@example.com" className="w-full p-2 border rounded mt-3 mb-7"
          onChange={(e)=>setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" placeholder="Enter your Password" className="w-full p-2 border rounded mt-3 mb-7"
          onChange={(e)=>setPassword(e.target.value)} />
        <button className="w-full bg-blue-500 text-white p-2 rounded mb-4 hover:bg-blue-600">
          Login
        </button>
        <p className="text-center text-sm">
          Don't have an account? <Link to="/signup" className="text-blue-500">Signup</Link>
        </p>
      </form>
    </div>
  );
}

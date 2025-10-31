// src/pages/Signup.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signupimg from "../assets/s-1.jpg";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.info("Passwords do not match");
      return;
    }

    // ✅ Generate unique user ID
    const userId = uuidv4();

    // ✅ Store user data
    const newUser = { id: userId, name, email, password };
    localStorage.setItem(email, JSON.stringify(newUser));

    // ✅ Also mark as active user
    localStorage.setItem("activeUser", JSON.stringify(newUser));

    toast.success("Signup successful");
    navigate("/login");
  };

  return (
    <div className="font-poppins min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-4xl">
        {/* Left Side Image */}
        <div className="md:w-1/2 hidden md:block">
          <img
            src={signupimg}
            alt="Signup"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Create Account
          </h2>
          <p className="text-sm text-gray-600 text-center mb-8">
            Sign up to start shopping
          </p>

          <form onSubmit={handleSignup} className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 border rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-2 border rounded"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 mt-2"
            >
              Signup
            </button>
          </form>

          <p className="text-center text-sm mt-4">
            Already User?{" "}
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

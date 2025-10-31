import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Mosaic } from "react-loading-indicators";

export default function ProtectedRoute({ children }) {
  const [showLoader, setShowLoader] = useState(true);
  const [activeUser, setActiveUser] = useState(null);

  useEffect(() => {
    // Show loader briefly for smooth transition
    const timer = setTimeout(() => setShowLoader(false), 1000);

    // Get user from localStorage
    const userData = JSON.parse(localStorage.getItem("activeUser"));
    setActiveUser(userData);

    return () => clearTimeout(timer);
  }, []);

  if (showLoader) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-white">
        <Mosaic color="#00786F" size="medium" />
        <p className="mt-4 text-lg font-semibold text-blue-600">
          Loading...
        </p>
      </div>
    );
  }

  // Redirect if user is not found
  if (!activeUser) {
    return <Navigate to="/login" />;
  }

  return children;
}

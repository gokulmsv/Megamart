import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { UserAuth } from "../Context/AuthContext";
import { Mosaic } from "react-loading-indicators";

export default function ProtectedRoute({ children }) {
  const { user, loading } = UserAuth();
  const [showLoader, setShowLoader] = useState(true);

  // Delay the loader for smooth transition
  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 2000); // 1.5s delay
    return () => clearTimeout(timer);
  }, []);

  if (loading || showLoader) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-white">
        <Mosaic color="#00786F" size="medium" />
        <p className="mt-4 text-lg font-semibold text-blue-600">
          Loading...
        </p>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}

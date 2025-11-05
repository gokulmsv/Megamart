import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Mosaic } from "react-loading-indicators";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function ProtectedRoute({ children }) {
  const [checking, setChecking] = useState(true);
  const [activeUser, setActiveUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setActiveUser(user);
      setChecking(false);
    });

    return () => unsub();
  }, []);

  if (checking) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-white">
        <Mosaic color="#00786F" size="medium" />
        <p className="mt-4 text-lg font-semibold text-blue-600">
          Loading...
        </p>
      </div>
    );
  }

  if (!activeUser) {
    return <Navigate to="/login" />;
  }

  return children;
}

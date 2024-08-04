/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Navigate } from "react-router-dom";
import useAuthStore from "../zustand/useAuthStore"; // Adjust the path as needed

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuthStore();

  if (isAuthenticated === undefined) {
    // Handle loading state or return a loading spinner
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;

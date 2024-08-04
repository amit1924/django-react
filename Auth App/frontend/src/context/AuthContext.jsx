/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode"; // Ensure this import is correct

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        if (decodedToken.exp * 1000 > Date.now()) {
          setUser(decodedToken.user_id);
          setIsAuthenticated(true);
        } else {
          logout();
        }
      } catch (error) {
        console.error("Token decoding error:", error);
        logout();
      }
    }
  }, []);

  const login = async (username, password) => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/auth/login/",
        {
          username,
          password,
        }
      );
      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);
      setUser(username);
      setIsAuthenticated(true);
      return true;
    } catch (error) {
      console.error(error);
      setError("Login failed. Please check your credentials.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const register = async (username, password) => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/auth/register/",
        {
          username,
          password,
        }
      );
    } catch (error) {
      console.error(error);
      if (error.response) {
        setError(error.response.data.error || "Registration failed.");
      }
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, register, logout, loading, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

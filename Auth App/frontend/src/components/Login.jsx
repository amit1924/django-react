/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import useAuthStore from "../zustand/useAuthStore"; // Adjust the path as needed
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { login, loading, error, isAuthenticated, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth(); // Check if the user is already authenticated on mount
  }, [checkAuth]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/"); // Redirect to home if already authenticated
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const success = await login(username, password);
    if (success) {
      navigate("/");
    } else {
      e.target.reset(); // Clear form inputs after failed login
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input type="text" name="username" required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;

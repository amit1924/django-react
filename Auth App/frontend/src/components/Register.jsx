/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import useAuthStore from "../zustand/useAuthStore"; // Adjust the path as needed

const Register = () => {
  const { register, loading, registerError } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    await register(username, password);
  };

  return (
    <div>
      <h2>Register</h2>
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
          {loading ? "Registering..." : "Register"}
        </button>
        {registerError && <p>{registerError}</p>}
      </form>
    </div>
  );
};

export default Register;

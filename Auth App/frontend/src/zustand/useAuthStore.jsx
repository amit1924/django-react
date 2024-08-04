import create from "zustand";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  registerError: null,
  login: async (username, password) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/auth/login/",
        { username, password }
      );
      const token = response.data.access;
      localStorage.setItem("access_token", token);

      // Decode token and set user state
      const decodedToken = jwtDecode(token);
      set({ user: decodedToken.user_id, isAuthenticated: true });
    } catch (error) {
      console.error(error);
      set({ error: "Login failed. Please check your credentials." });
    } finally {
      set({ loading: false });
    }
  },
  register: async (username, password) => {
    set({ loading: true, registerError: null });
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/auth/register/",
        { username, password }
      );
      // Optionally, you can automatically log in the user after registration
      // await login(username, password); // Uncomment if you want auto-login

      return response.data; // Return registration success message or data
    } catch (error) {
      console.error(error);
      set({
        registerError: error.response?.data?.error || "Registration failed.",
      });
    } finally {
      set({ loading: false });
    }
  },
  logout: () => {
    localStorage.removeItem("access_token");
    set({ user: null, isAuthenticated: false });
  },
  checkAuth: () => {
    const token = localStorage.getItem("access_token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        set({ user: decodedToken.user_id, isAuthenticated: true });
      } catch (error) {
        console.error("Token decoding error:", error);
        set({ user: null, isAuthenticated: false });
      }
    }
  },
}));

export default useAuthStore;

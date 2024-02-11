import React, { createContext, useContext, useEffect, useState } from "react";
import { account, ID } from "./authConfig";

// Define the interface for the User object
interface AuthUser {
  name: string;
  // Add other properties as needed
}

// Initialize Auth Context
const AuthContext = createContext<any>(null);

// Auth Provider Component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Check if there's a logged-in user stored in localStorage
  const checkLocalStorage = () => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  };

  // Login function
  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const session = await account.createEmailSession(email, password);
      const user = await account.get();
      setUser(user);
      // Store the logged-in user in localStorage
      localStorage.setItem("loggedInUser", JSON.stringify(user));
    } catch (error) {
      setError("Failed to login");
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Register function
  const register = async (email: string, password: string, name: string) => {
    setLoading(true);
    try {
      await account.create(ID.unique(), email, password, name);
      await login(email, password);
    } catch (error) {
      setError("Failed to register");
      console.error("Registration error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = async () => {
    setLoading(true);
    try {
      await account.deleteSession("current");
      setUser(null);
      // Remove the logged-in user from localStorage
      localStorage.removeItem("loggedInUser");
    } catch (error) {
      setError("Failed to logout");
      console.error("Logout error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Load user from localStorage on component mount
  useEffect(() => {
    checkLocalStorage();
  }, []);

  const contextData = { user, loading, error, login, register, logout };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

// Custom hook to use Auth context
export const useAuth = () => useContext(AuthContext);

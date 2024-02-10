// AuthContext.tsx
import React, { createContext, useContext, useState } from "react";
import { account } from "./authConfig";
import { useNavigate } from "react-router-dom";

// Initialize Auth Context
const AuthContext = createContext<any>(null);

// Auth Provider Component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<any>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const loadAccount = async () => {
    try {
      const loadedAccount = await account.get();
      setUser(loadedAccount);
    } catch (error) {
      console.error(error);
      setError("failed to load user");
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      await account.createEmailSession(email, password);
      console.log("not here");
      await loadAccount();
      navigate("/overview");
    } catch (error: any) {
      console.log("here");
      console.error(error);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await account.deleteSession("current");
      setUser(null);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const contextData = { user, loading, login, logout };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
export default AuthContext;
// Custom hook to use Auth context
export const useAuth = () => useContext(AuthContext);

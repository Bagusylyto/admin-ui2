import { createContext, useState, useEffect } from "react";

const INITIAL_STATE = localStorage.getItem("refreshToken") ? true : false;
const INITIAL_NAME = localStorage.getItem("username") || ""; // Ambil username dari localStorage

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(INITIAL_STATE);
  const [name, setName] = useState(INITIAL_NAME);

  // Simpan username ke localStorage setiap kali berubah
  useEffect(() => {
    if (name) {
      localStorage.setItem("username", name);
    }
  }, [name]);

  // Hapus data dari localStorage jika pengguna logout
  const logout = () => {
    setIsLoggedIn(false);
    setName("");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("username");
  };

  return <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, name, setName, logout }}>{children}</AuthContext.Provider>;
};

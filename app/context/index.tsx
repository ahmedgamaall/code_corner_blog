"use client";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext("");

export function AppWrapper({ children }: { children: React.ReactNode }) {
  let uid = "";
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(uid);
  useEffect(() => {
    uid = localStorage.getItem("uid") ?? "";
    setIsUserLoggedIn(uid);
  }, []);
  return (
    <UserContext.Provider value={isUserLoggedIn}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}

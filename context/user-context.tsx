"use client";

import { createContext, useContext, ReactNode } from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  imageUrl: string;
}

interface UserContextType {
  user: User | null;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
  initialUser: User | null;
}

export function UserProvider({ children, initialUser }: UserProviderProps) {
  return (
    <UserContext.Provider value={{ user: initialUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

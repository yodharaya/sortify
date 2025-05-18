"use client";

import { createContext, useContext, ReactNode, useState } from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  imageUrl: string;
  points: number;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
  initialUser: User | null;
}

export function UserProvider({ children, initialUser }: UserProviderProps) {
  const [user, setUser] = useState<User | null>(initialUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
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

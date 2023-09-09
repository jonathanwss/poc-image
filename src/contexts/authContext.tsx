import React, { createContext, useState, useContext, ReactNode } from "react";

export interface AuthContextData {
  isAuthenticated: boolean;
  user: {
    email: string;
    profilePictureUri?: string;
  } | null;
  login: (email: string, profilePictureUri?: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{
    email: string;
    profilePictureUri?: string;
  } | null>(null);

  const login = (email: string, profilePictureUri?: string) => {
    setIsAuthenticated(true);
    setUser({ email, profilePictureUri });
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
//const authContext = () => {}

import React from "react";
import AuthenticatedRoutes from "./AuthenticatedRoutes";
import UnauthenticatedRoutes from "./UnauthenticatedRoutes";
import { useAuth } from "@/contexts/authContext";

function Routes() {
  const { isAuthenticated, login, logout } = useAuth();

  return isAuthenticated ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />;
}

export default Routes;

import React from "react";
import { Navigate } from "react-router-dom";

interface AuthGuardProps {
  children: JSX.Element;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");

  if (username !== "ikmaslahat" || password !== "ikmaslahat123!") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AuthGuard;

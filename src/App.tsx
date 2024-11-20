import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./admin/Admin";
import Login from "./Login";
import AuthGuard from "./AuthGuard";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/admin/*"
          element={
            <AuthGuard>
              <Admin />
            </AuthGuard>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

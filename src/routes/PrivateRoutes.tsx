import { useLocation, Outlet, Navigate, Route, Routes } from "react-router-dom";

import Home from "@/app/private/home";
import { getToken } from "@/hooks/token";

const PrivateRoute = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  const location = useLocation();

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={`/login?callbackUrl=${location.pathname}`} />
  );
};

export function PrivateRoutes() {
  const isAuthenticated = !!getToken();

  return (
    <Routes>
      <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

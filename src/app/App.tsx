import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate
} from "react-router-dom";

import { SidebarProvider } from "../components/ui/sidebar";
import { getToken } from "../hooks/token";
import { PrivateRoutes } from "../routes/PrivateRoutes";
import PasswordRecovery from "./public/forget-password";
import Login from "./public/login";
import NotFound from "./public/NotFound";
import PasswordReset from "./public/reset-password";
import SignUp from "./public/signup";

import Modal from "@/components/ds/Modal";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Provider as ReduxProvider } from "@/providers/redux";
import { Theme } from "@radix-ui/themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "@radix-ui/themes/styles.css";
import "@/styles/global.css";

const PublicRoute = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
};

const queryClient = new QueryClient();

export default function App() {
  const isAuthenticated = !!getToken();
  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider>
        <TooltipProvider>
          <Theme
            accentColor="green"
            grayColor="sage"
            panelBackground="solid"
            radius="medium"
            scaling="100%"
          >
            <SidebarProvider>
              <Toaster />
              <Sonner />
              <Modal />
              <BrowserRouter>
                <Routes>
                  <Route
                    element={<PublicRoute isAuthenticated={isAuthenticated} />}
                  >
                    <Route path="/login" element={<Login />} />
                    <Route
                      path="/recuperar-senha"
                      element={<PasswordRecovery />}
                    />
                    <Route
                      path="/redefinir-senha"
                      element={<PasswordReset />}
                    />
                    <Route path="/cadastro" element={<SignUp />} />
                  </Route>
                  <Route path="/*" element={<PrivateRoutes />} />

                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </SidebarProvider>
          </Theme>
        </TooltipProvider>
      </ReduxProvider>
    </QueryClientProvider>
  );
}

// import { useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

import { Header } from "../Header";

// import { useAppSelector } from "@/hooks/redux";

export function PrivateLayout({ children }: { children: React.ReactNode }) {
  // const user = useAppSelector((state) => state.user);
  // const navigate = useNavigate();
  // const locale = useLocation();
  // const isOnboarding = locale.pathname.includes("/onboarding");

  // useEffect(() => {
  //   if (
  //     !user?.finishedOnboarding &&
  //     !isOnboarding &&
  //     user?.position === "owner"
  //   ) {
  //     navigate("/onboarding");
  //   }
  // }, [isOnboarding, navigate, user]);

  return (
    // <SidebarProvider>
    //   <AppSidebar />
    //   <SidebarInset>
    //     <Header />
    { children }
    //   </SidebarInset>
    // </SidebarProvider>
  );
}

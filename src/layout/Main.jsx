import { Outlet, useLocation } from "react-router-dom";
import NavMenu from "../components/header/NavMenu";
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import { ScrollShadow } from "@nextui-org/react";
import { useEffect } from "react";

const Main = () => {
  const loc = useLocation()
  useEffect(() => {
    if (location.pathname === "/") {
      document.title = `JobSensei`;
    } else {
      document.title = `JobSensi${loc.pathname.replace("/", " | ")}`;
    }
    if (loc.state) {
      document.title = `${loc.state}`;
    }
  }, [loc.pathname, loc.state]);
  return (
    
    <div className="dark bg-[#0D0D1F] min-h-screen text-foreground">
      <NavMenu />
      <div>
      <ScrollShadow className="h-full">
      <Outlet />
    </ScrollShadow>
        
      </div>
      <Footer/>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Main;

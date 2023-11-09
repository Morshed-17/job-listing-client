import { Outlet } from "react-router-dom";
import NavMenu from "../components/header/NavMenu";
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import { ScrollShadow } from "@nextui-org/react";

const Main = () => {
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

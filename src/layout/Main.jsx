import { Outlet } from "react-router-dom";
import NavMenu from "../components/header/NavMenu";
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Main = () => {
  return (
    <div className="dark bg-[#050819] min-h-screen text-foreground">
      <NavMenu />
      <div>
        <Outlet />
      </div>
      <Footer/>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Main;

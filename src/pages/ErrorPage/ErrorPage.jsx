import Lottie from "lottie-react";
import errorLottie from "../../assets/lottie/404-page.json";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="bg-slate-900 h-screen flex justify-center items-center px-5">
     <div className="text-center">
     <Lottie
        animationData={errorLottie}
        loop={true}
       
        className="max-w-[700px] h-[400px]" // Adjust the size here
      />
      <Link to='/'>
      <Button
        color="primary"
        className="font-semibold text-xl"
        
      >
        Go back to home
      </Button>
      </Link>
     </div>
    </div>
  );
};

export default ErrorPage;

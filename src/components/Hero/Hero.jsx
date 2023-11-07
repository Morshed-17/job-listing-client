import Lottie from "lottie-react";
import banner from "../../assets/images/pexels-jakub-novacek-924824.jpg";
import '../../aos/aosSetup.js'

const Hero = ({children}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover", // Ensure the background image covers the entire element
        backgroundPosition: "center", // Center the background image
        backgroundRepeat: "no-repeat", // Prevent the background from repeating
      }}
      className=""
    >
      <div className=" bg-slate-950 h-full bg-opacity-90 overflow-hidden">
        <div className=" mx-auto py-32 text-center">
          <div className=" px-5 space-y-6  ">
            <div
              className="text-6xl font-semibold "
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {children}
            </div>
          </div>
          <div className="" data-aos="fade-up" data-aos-duration="1000"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import banner from "../../assets/images/pexels-jakub-novacek-924824.jpg";
import Lottie from "lottie-react";
import jobSeker from "../../assets/lottie/jobseker.json";
import Search from "./Search";
import '../../aos/aosSetup.js'

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover", // Ensure the background image covers the entire element
        backgroundPosition: "center", // Center the background image
        backgroundRepeat: "no-repeat", // Prevent the background from repeating
        
      }}
      
    >
      <div className=" bg-slate-950 h-full bg-opacity-90 overflow-hidden">
        <div className="flex items-center flex-col gap-6 lg:flex-row justify-between max-w-screen-xl mx-auto py-32">
          <div className="max-w-2xl px-5 space-y-6 text-center lg:text-left " >
            <h2 className="text-6xl font-semibold " data-aos="fade-up" data-aos-duration="1000">
              Find Thousand <span className="text-blue-600">Job</span> If You’re
              Ready To Get.
            </h2>
            <p data-aos="fade-up" data-aos-duration="1200">
              We have 280,000+ live jobs adverts on our site, helping you to
              find any type of job
            </p>
            <Search />
          </div>
          <div className="" data-aos="fade-up" data-aos-duration="1000">
            <Lottie
              animationData={jobSeker}
              loop={true}
              style={{ width: "500px", height: "500px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

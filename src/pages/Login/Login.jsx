import { Button } from "@nextui-org/react";
import { FcGoogle } from "react-icons/fc";
import bg from "../../assets/images/pexels-jakub-novacek-924824.jpg";
import '../../aos/aosSetup.js'
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      {/* This is an example component */}
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover", // Ensure the background image covers the entire element
          backgroundPosition: "center", // Center the background image
          backgroundRepeat: "no-repeat", // Prevent the background from repeating
        }}
        className="h-screen font-sans login bg-cover relative"
      >
        
        <div className="bg-slate-950 h-full bg-opacity-75">
        <div className=" container mx-auto h-full flex flex-1 justify-center items-center">
          <div className="w-full max-w-lg">
            <div className="leading-loose">
              <form className="max-w-sm m-4 mx-auto  p-10 bg-white bg-opacity-25 rounded shadow-xl " data-aos="zoom-in">
                <p className="text-white  text-center text-lg font-bold">
                  LOGIN
                </p>
                <div className="">
                  <label className="block text-sm text-white" htmlFor="email">
                    E-mail
                  </label>
                  <input
                    className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                    type="email"
                    id="email"
                    placeholder="Write your email"
                    aria-label="email"
                    required=""
                  />
                </div>
                <div className="mt-2">
                  <label className="block  text-sm text-white">Password</label>
                  <input
                    className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                    type="password"
                    id="password"
                    placeholder="Write your password"
                    arial-label="password"
                    required=""
                  />
                </div>
                <div className="mt-4 items-center ">
                  <input
                    className="px-4 w-full py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                    type="submit"
                    value="Login"
                  />

                  <div className="flex items-center justify-center gap-3 mt-3">
                    <p>Dont have an account?</p>
                    <Link to='/sign-up'
                      className="inline-block right-0 align-baseline font-bold text-sm text-500 text-white hover:text-red-400"
                      
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
                <div className="text-center">
                  <Button className="mt-4">
                    <FcGoogle /> Sign in with Google
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Login;

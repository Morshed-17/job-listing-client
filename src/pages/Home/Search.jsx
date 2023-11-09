import { Button } from "@nextui-org/react";
import React from "react";
import { BsSearch } from "react-icons/bs";
import '../../aos/aosSetup.js'

const Search = () => {
  return (
    <div className="flex justify-center  lg:justify-start " data-aos="fade-up"  data-aos-duration="1500">
      <div className="bg-slate-700 rounded-lg flex justify-between overflow-hidden max-w-md ">
        <div className="flex items-center p-3">
          <BsSearch />
          <input className="bg-transparent focus:outline-none p-2 w-full " placeholder="Search jobs" type="text" />
        </div>
        <div>
        <Button size="lg" radius="none" className="bg-gradient-to-tr from-blue-700 to-purple-500 text-white shadow-lg h-full">
        Search
         </Button>
        </div>
      </div>
    </div>
  );
};

export default Search;

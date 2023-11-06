import { Button } from "@nextui-org/react";
import React from "react";

const JobListingCard = () => {
  return (
    <div className="w-full">
      <div className=" shadow-sm shadow-gray-100 max-w-full flex flex-col sm:flex-row gap-3 sm:items-center  justify-between px-5 py-4 rounded-md">
        <div>
          <span className="text-purple-800 text-sm">Engineering</span>
          <h3 className="font-bold mt-px">
            Senior Full Stack Backend Engineer
          </h3>
          <div className="flex items-center gap-3 mt-2">
            <span className="bg-purple-100 text-purple-700 rounded-full px-3 py-1 text-sm">
              Full-time
            </span>
            <span className="text-slate-200 text-sm flex gap-1 items-center">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>{" "}
              Remote, UK
            </span>
          </div>
        </div>
        <div>
          <Button color="secondary" variant="shadow">
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobListingCard;

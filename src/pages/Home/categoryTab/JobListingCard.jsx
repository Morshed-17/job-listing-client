import { Button } from "@nextui-org/react";
import React from "react";
import { Link } from "react-router-dom";

const JobListingCard = ({ job }) => {
  const {
    _id,
    job_banner,
    job_title,
    author_name,
    job_category,
    salary_range,
    job_description,
    deadline,
    post_date,
    applicants_number,
  } = job || {};
  return (
    <div className="w-full">
      <div className=" shadow-sm grid lg:grid-cols-3  shadow-gray-100 max-w-full  gap-3 sm:items-center  px-5 py-4 rounded-md">
        <div>
          <span className="text-purple-600 text-sm">{author_name}</span>
          <h3 className="font-bold mt-px">{job_title}</h3>
          <p className="font-semibold mt-px">{salary_range}$</p>
          <p className=" mt-px">Applicants: {applicants_number}</p>
          <div className="flex items-center gap-3 mt-2">
            <span className="bg-purple-100 text-purple-700 rounded-full px-3 py-1 text-sm">
              {job_category}
            </span>
          </div>
        </div>
        <div >
          <span className="text-slate-200 text-sm flex gap-1 items-center">
            <span className="text-white font-bold">Posted:</span> {deadline}
          </span>
          <span className="text-slate-200 text-sm flex gap-1 items-center">
            <span className="text-white font-bold">Deadline:</span> {deadline}
          </span>
          </div>
        <div className="text-right">
          
          <Link to={`/job/${_id}`}>
            <Button color="secondary" variant="shadow">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobListingCard;

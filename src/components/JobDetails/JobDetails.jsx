import { Button } from "@nextui-org/react";
import axios from "axios";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const JobDetails = () => {
  const [job, setJob] = useState({});
  const axiosSecure = useAxiosSecure();
  const param = useParams();

  
  axiosSecure
    .get(`/job/${param.id}`)
    .then((res) => setJob(res.data));
  const {
    _id,
    job_banner,
    job_title,
    author_name,
    job_category,
    salary_range,
    job_description,
    deadline,
    applicants_number,
  } = job || {};
  return (
    <div className="max-w-screen-2xl mx-auto px-5">
      <div>
        <div
            style={{
                backgroundImage: `url(${job_banner})`
            }}
         className="py-32 text-center ">
          <div>
            <h3  className="text-4xl font-bold bg-slate-900 w-fit mx-auto rounded-lg p-4">Job Details</h3>
          </div>
        </div>
        <div>
          <div className="">
            <div className="grid grid-cols-12 gap-6 my-32">
            <div className="col-span-12 lg:col-span-8">
                <h3 className="text-4xl font-semibold mb-3">Job Description</h3>
                <p>{job_description}</p>
              </div>
              <div className="col-span-12 lg:col-span-4 shadow-sm shadow-gray-100  flex flex-col sm:flex-row gap-3 sm:items-center  justify-between px-5 py-4 rounded-md">
                <div>
                  <span className="text-purple-600 text-sm">{author_name}</span>
                  <h3 className="font-bold mt-px">{job_title}</h3>
                  <p className="font-semibold mt-px">{salary_range}$</p>
                  <p className=" mt-px">Applicants: {applicants_number}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="bg-purple-100 text-purple-700 rounded-full px-3 py-1 text-sm">
                      {job_category}
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
                      {deadline}
                    </span>
                  </div>
                </div>
                <div>
                  <Link to={`/job/${_id}`}>
                    <Button color="secondary" variant="shadow">
                      Apply Now
                    </Button>
                  </Link>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

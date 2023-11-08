import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { BsCalendar, BsCalendar2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../Loading/Loading";

const AppliedJobCard = ({ job }) => {
  const [applied, setApplied] = useState({});
  const { _id } = job.job || {};
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axiosSecure(`/jobs/${_id}`).then((res) => {
      setApplied(res.data);
        setLoading(false)
    });
  }, []);
  const {
    job_banner,
    job_title,
    author_name,
    job_category,
    salary_range,
    job_description,
    deadline,
    post_date,
    applicants_number,
  } = applied || {};

  if(loading){
    return 
  }
  return (
    <div className="w-full">
      <div className=" shadow-sm shadow-gray-100 max-w-full flex flex-col sm:flex-row gap-3 sm:items-center  justify-between px-5 py-4 rounded-md">
        <div className="grid md:grid-cols-3 lg:grid-cols-8  w-full gap-3">
          <span className="text-purple-600 text-sm">{author_name}</span>
          <h3 className="font-bold mt-px">{job_title}</h3>
          <p className="font-semibold mt-px">{salary_range}$</p>
          <p className=" mt-px">Applicants: {applicants_number}</p>
          <div className="flex items-center gap-3 mt-2">
            <span className="bg-purple-100 text-purple-700 rounded-full px-3 py-1 text-sm">
              {job_category}
            </span>
          </div>
          <span className="text-slate-200 text-sm flex gap-1 items-center">
            Posted on: {post_date ? post_date : "No Date"}
          </span>
          <span className="text-slate-200 text-sm flex gap-1 items-center">
            Deadline: {deadline}
          </span>
          <div>
            <Link to={`/job/${_id}`}>
              <Button color="secondary" variant="shadow">
                View Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobCard;

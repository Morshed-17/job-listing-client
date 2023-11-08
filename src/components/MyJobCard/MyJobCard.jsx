import { Button } from "@nextui-org/react";
import { BsCalendar, BsCalendar2, BsPen, BsTrash2 } from "react-icons/bs";
import { Link } from "react-router-dom";

const MyJobCard = ({ job, handleDelete }) => {
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
      <div className=" shadow-sm shadow-gray-100 max-w-full flex flex-col sm:flex-row gap-3   justify-between px-5 py-4 rounded-md">
        <div className="grid md:grid-cols-3 lg:grid-cols-8 text-left w-full gap-3">
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
            <span className="font-bold text-white">Posted:</span> {post_date}
          </span>
          <span className="text-slate-200 text-sm flex gap-1 items-center">
            <span className="font-bold text-white">Deadline:</span> {post_date}
          </span>
          <div className="flex gap-3">
            <Button size="sm" onClick={() => handleDelete(_id)} color="danger">
              Delete <BsTrash2 />
            </Button>
            <Link to={`/update-job/${_id}`}>
              <Button size="sm" color="primary">
                Update <BsPen />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyJobCard;

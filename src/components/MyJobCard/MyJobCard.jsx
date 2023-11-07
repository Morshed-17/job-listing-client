import { Button } from "@nextui-org/react";
import { BsCalendar, BsCalendar2, BsPen, BsTrash2 } from "react-icons/bs";
import { Link } from "react-router-dom";


const MyJobCard = ({job}) => {
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
        
        <div className="w-full">
          <div className=" shadow-sm shadow-gray-100 max-w-full flex flex-col sm:flex-row gap-3 sm:items-center  justify-between px-5 py-4 rounded-md">
            <div className="grid md:grid-cols-3 lg:grid-cols-7 w-full gap-3">
              <span className="text-purple-600 text-sm">{author_name}</span>
              <h3 className="font-bold mt-px">
                {job_title}
              </h3>
              <p className="font-semibold mt-px">
                {salary_range}$
              </p>
              <p className=" mt-px">
                Applicants: {applicants_number}
              </p>
              <div className="flex items-center gap-3 mt-2">
                <span className="bg-purple-100 text-purple-700 rounded-full px-3 py-1 text-sm">
                {job_category}
                </span>
                
              </div>
              <span className="text-slate-200 text-sm flex gap-1 items-center">
                  <BsCalendar2/>
                  
                  {deadline}
                </span>
                <div className="flex gap-3">
                <Button color="danger">Delete <BsTrash2/></Button>
                <Button color="primary">Update <BsPen/></Button>
                </div>
            </div>
            
          </div>
        </div>
      );
};

export default MyJobCard;
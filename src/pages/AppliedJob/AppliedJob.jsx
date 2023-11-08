import { BsSearch } from "react-icons/bs";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Hero from "../../components/Hero/Hero";
import AllJobCard from "../../components/AllJobCard/AllJobCard";
import Loading from "../../components/Loading/Loading";
import UseAuth from "../../hooks/UseAuth";
import AppliedJobCard from "../../components/AppliedJobCard/AppliedJobCard";

const AppliedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const axiosSecure = useAxiosSecure();
  const [selectedValue, setSelectedValue] = useState(""); // Initialize with an empty string or any default value

  const [loading, setLoading] = useState(true);
  const { user } = UseAuth();
  // Function to handle the select change event
  const handleSelectChange = (e) => {
    console.log(e.target.value);
    setSelectedValue(e.target.value);
  };

  useEffect(() => {
    axiosSecure(`/applied?email=${user.email}`).then((res) => {
      setJobs(res.data);
      console.log("rendering");
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <Hero>Applied Jobs</Hero>
      <div className="max-w-screen-2xl mx-auto px-5 my-12">
        <div className="text-right flex justify-center items-center gap-3 my-6">
          <div>
            <select
              className="bg-transparent focus:outline-none  border-slate-600 border-1 p-3 mt-3 rounded-lg"
              name="job_category"
              id="job_category"
              value={selectedValue} // Make sure to set the selected value to the state variable
              onChange={handleSelectChange} // Attach the onChange event handler
            >
              <option className="bg-slate-900 " value="">
                All
              </option>
              <option className="bg-slate-900 " value="On-site">
                On-site
              </option>
              <option className="bg-slate-900 " value="Remote">
                Remote
              </option>
              <option className="bg-slate-900 " value="Hybrid">
                Hybrid
              </option>
              <option className="bg-slate-900 " value="Part-time">
                Part-time
              </option>
            </select>
          </div>
          <h3 className="text-xl font-semibold">Filter by Category</h3>
        </div>
        {loading ? (
          <Loading></Loading>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {jobs
              ?.filter((job) =>
                job.job.job_category.toLowerCase().includes(selectedValue.toLowerCase(selectedValue))
              )
              .map((job) => (
                <AppliedJobCard key={job._id} job={job} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AppliedJobs;

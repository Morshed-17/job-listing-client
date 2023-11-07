import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Hero from "../../components/Hero/Hero";
import { Button } from "@nextui-org/react";
import Loading from "../../components/Loading/Loading";

import { BsSearch } from "react-icons/bs";
import MyJobCard from "../../components/MyJobCard/MyJobCard";
import UseAuth from "../../hooks/UseAuth";

const MyJobs = () => {
  const [jobs, setJobs] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { user } = UseAuth();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    axiosSecure(`/my-jobs?email=${user.email}`).then((res) => {
      setJobs(res.data);
      console.log("rendering");
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <Hero>My Posted Jobs</Hero>
      <div className="max-w-screen-2xl mx-auto px-5 my-12">
        <div className="text-center"></div>
        {loading ? (
          <Loading></Loading>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {jobs?.map((job) => (
              <MyJobCard key={job._id} job={job} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyJobs;

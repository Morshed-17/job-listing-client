import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Hero from "../../components/Hero/Hero";

import Loading from "../../components/Loading/Loading";

import MyJobCard from "../../components/MyJobCard/MyJobCard";
import UseAuth from "../../hooks/UseAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const MyJobs = () => {
  const [jobs, setJobs] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { user } = UseAuth();
  const [loading, setLoading] = useState(true);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/jobs/${id}`)
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              toast.success("Product deleted");
            }
          });
      }
    });
  };
  const handleUpdate = (id) => {};

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
              <MyJobCard key={job._id} job={job} handleDelete={handleDelete}  />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyJobs;

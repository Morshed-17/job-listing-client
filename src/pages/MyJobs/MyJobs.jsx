import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Hero from "../../components/Hero/Hero";

import Loading from "../../components/Loading/Loading";

import MyJobCard from "../../components/MyJobCard/MyJobCard";
import UseAuth from "../../hooks/UseAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

const MyJobs = () => {
  // const [jobs, setJobs] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { user } = UseAuth();
  // const [loading, setLoading] = useState(true);
  const fetchMyJobs = async () => {
    const response = await axiosSecure.get(`/my-jobs?email=${user.email}`);
    return response.data;
  };

  const {
    data: jobs,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["my-jobs"],
    queryFn: fetchMyJobs,
    enabled: !!user.email
  });

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
        axiosSecure.delete(`/jobs/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            toast.success("Job deleted");
          }
        });
      }
    });
  };

  return (
    <div>
      <Hero>My Posted Jobs</Hero>
      <div className="max-w-screen-2xl mx-auto px-5 my-12">
        <div className="text-center">
          {jobs?.length === 0 ? (
            <p>No data found</p>
          ) : (
            <>
              {isLoading ? (
                <Loading></Loading>
              ) : (
                <div className="grid grid-cols-1 gap-6">
                  {jobs?.map((job) => (
                    <MyJobCard
                      key={job._id}
                      job={job}
                      handleDelete={handleDelete}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyJobs;

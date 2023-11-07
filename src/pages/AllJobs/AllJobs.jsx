import { BsSearch } from "react-icons/bs";
import banner from "../../assets/images/pexels-jakub-novacek-924824.jpg";
import { Button } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useInfiniteQuery } from '@tanstack/react-query'
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Hero from "../../components/Hero/Hero";
import AllJobCard from "../../components/AllJobCard/AllJobCard";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const axiosSecure = useAxiosSecure();
  const [search, setSearch] = useState('')

  // const {data, isLoading} = useQuery({
  //   queryKey: ['jobs'],
  //   queryFn: async () => {
  //     const data =  await fetch('http://localhost:5001/jobs')
  //     return await data.json()
  //   }
  // })
  
  const handleSubmit = e => {
    e.preventDefault()
    console.log(search);
  }
  
 const searchChange = e => {
    setSearch(e.target.value)
 }

  useEffect(() => {
    axiosSecure("/jobs").then((res) => {
      setJobs(res.data);
      console.log("rendering");
    });
  }, []);

  return (
    <div>
    <Hero>All Jobs</Hero>
    <div className="max-w-screen-2xl mx-auto px-5 my-12">
      
      <div className="text-center">
      <h3 className="text-xl font-semibold">Search Jobs</h3>
      <form onSubmit={handleSubmit} className="flex justify-between max-w-md bg-slate-700 rounded-lg   items-center overflow-hidden mx-auto my-6">
          <input onChange={searchChange} className="bg-transparent focus:outline-none p-3" type="text" placeholder="Search job" name="" id="" />
          <Button  type="submit" color="primary" size="lg" radius="none" className="">Search <BsSearch></BsSearch></Button>
      </form>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        {jobs?.filter(job => job.job_title.toLowerCase().includes(search.toLowerCase(search))).map((job) => (
          <AllJobCard key={job._id} job={job} />
        ))}
      </div>
      
    </div>
    </div>
  );
};

export default AllJobs;

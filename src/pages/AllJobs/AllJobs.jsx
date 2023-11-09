import { BsSearch } from "react-icons/bs";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Hero from "../../components/Hero/Hero";
import AllJobCard from "../../components/AllJobCard/AllJobCard";
import NoData from "../../components/NoData/NoData";


const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const axiosSecure = useAxiosSecure();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  // const {data, isLoading} = useQuery({
  //   queryKey: ['jobs'],
  //   queryFn: async () => {
  //     const data =  await fetch('https://job-listing-server-three.vercel.app/jobs')
  //     return await data.json()
  //   }

  // })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
  };

  const searchChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    axiosSecure("/jobs").then((res) => {
      setJobs(res.data);
      console.log("rendering");
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <Hero>All Jobs</Hero>
      <div className="max-w-screen-xl mx-auto px-5 my-12">
        <div className="text-center">
          <h3 className="text-xl font-semibold">Search Jobs</h3>
          <form
            onSubmit={handleSubmit}
            className="flex justify-between max-w-md bg-slate-700 rounded-lg   items-center overflow-hidden mx-auto my-6"
          >
            <input
              onChange={searchChange}
              className="bg-transparent focus:outline-none p-3"
              type="text"
              placeholder="Search job"
              name=""
              id=""
            />
            <Button
              type="submit"
              color="primary"
              size="lg"
              radius="none"
              className=""
            >
              Search <BsSearch></BsSearch>
            </Button>
          </form>
        </div>
       

        {loading ? (
          <loading/>
          
        ) : (
          
          <>
            {
              jobs.length === 0?
              <NoData/>
              :
              <div className="grid grid-cols-1 gap-6">
            {jobs
              ?.filter((job) =>
                job.job_title.toLowerCase().includes(search.toLowerCase(search))
              )
              .map((job) => (
                <AllJobCard key={job._id} job={job} />
              ))}
          </div>
            }
          </>
        )}
      </div>
    </div>
  );
};

export default AllJobs;

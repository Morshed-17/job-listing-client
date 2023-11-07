import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobListingCard from "./JobListingCard";

import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@nextui-org/react";

const CategoryTab = () => {

  const [jobs, setJobs] = useState([]);
  useEffect(() =>{
    axios.get("http://localhost:5001/jobs").then((res) => {
    setJobs(res.data);
    console.log('rendering');
  });
  } , [])

  return (
    <div className="max-w-screen-2xl mx-auto px-5 my-12">
      <div className="">
        <SectionTitle text={"Desire Jobs"}>Job You Will Love</SectionTitle>
        <div className="mt-6 mb-6">
          <Tabs>
            <TabList className="text-xl mb-6 lg:text-right">
              <Tab>All</Tab>
              <Tab>Remote</Tab>
              <Tab>On-Site</Tab>
              <Tab>Hybrid</Tab>
              <Tab>Part Time</Tab>
            </TabList>

            <TabPanel>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {jobs?.slice(0, 4).map((job) => (
                  <JobListingCard key={job._id} job={job}></JobListingCard>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
              jobs?.filter(job => job.job_category === 'Remote').slice(0,4).map(job => <JobListingCard key={job._id} job={job}></JobListingCard>)
              }
              </div>
            </TabPanel>
            <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
              jobs?.filter(job => job.job_category === 'On-site').slice(0,4).map(job => <JobListingCard key={job._id} job={job}></JobListingCard>)
              }
              </div>
            </TabPanel>
            <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
              jobs?.filter(job => job.job_category === 'Hybrid').slice(0,4).map(job => <JobListingCard key={job._id} job={job}></JobListingCard>)
              }
              </div>
            </TabPanel>
            <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
              jobs?.filter(job => job.job_category === 'Part-time').slice(0,4).map(job => <JobListingCard key={job._id} job={job}></JobListingCard>)
              }
              </div>
            </TabPanel>
          </Tabs>
        </div>
        <Button color="primary" className="text-lg block mx-auto ">
          Browse All
        </Button>
      </div>
    </div>
  );
};

export default CategoryTab;

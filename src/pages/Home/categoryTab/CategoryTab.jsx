import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobListingCard from "./JobListingCard";

const CategoryTab = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-5 my-12">
      <div className="">
      <SectionTitle text={"Desire Jobs"}>Job You Will Love</SectionTitle>
      <div className="mt-6">
      <Tabs>
        <TabList className='text-xl mb-6 lg:text-right'>
          <Tab>All</Tab>
          <Tab>Remote</Tab>
          <Tab>On-Site</Tab>
          <Tab>Hybrid</Tab>
          <Tab>Part Time</Tab>
        </TabList>

        <TabPanel>
            <JobListingCard></JobListingCard>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
      </div>
      </div>
    </div>
  );
};

export default CategoryTab;

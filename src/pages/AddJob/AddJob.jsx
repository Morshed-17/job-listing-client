import { Button } from "@nextui-org/react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AddJobBanner from "../../assets/images/pexels-photo-927451.webp";
import AddJobLottie from "../../assets/lottie/addJob.json";
import Lottie from "lottie-react";
import "../../aos/aosSetup.js";

const AddJob = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="max-w-screen-2xl px-5 mx-auto my-32 flex  flex-col lg:flex-row items-center gap-6">
      <form
        className="max-w-3xl   shadow-2xl rounded-lg border-1 bg-slate-900  bg-opacity-25 border-slate-700  shadow-slate-800 px-6 py-12 mx-auto"
        data-aos="zoom-in"
      >
        <div>
          <h2 className="text-center text-5xl font-semibold pb-6">Post Job</h2>
        </div>
        {/* row */}
        <div className="flex justify-between flex-col lg:flex-row gap-6 mt-6">
          {/* col */}
          <div className="flex flex-col w-full">
            <label className="font-semibold text-lg" htmlFor="text">
              Picture URL
            </label>
            <input
              className="bg-transparent  focus:outline-none border-slate-600 border-1 p-3 mt-3  rounded-lg "
              type="text"
              placeholder="Paste a picture URL"
              name="author_name"
              id=""
            />
          </div>
          {/* col */}
          <div className="flex flex-col w-full">
            <label className="font-semibold text-lg" htmlFor="text">
              Job Title
            </label>
            <input
              className="bg-transparent focus:outline-none border-slate-600 border-1 p-3 mt-3  rounded-lg "
              type="text"
              name="title"
              placeholder="Write job title"
              id=""
            />
          </div>
        </div>
        {/* row */}
        <div className="flex justify-between flex-col lg:flex-row gap-6 mt-6">
          {/* col */}
          <div className="flex flex-col w-full">
            <label className="font-semibold text-lg" htmlFor="text">
              Author Name
            </label>
            <input
              className="bg-transparent  focus:outline-none border-slate-600 border-1 p-3 mt-3  rounded-lg "
              type="text"
              placeholder="Write author name"
              name="author_name"
              id=""
            />
          </div>
          {/* col */}
          <div className="flex flex-col w-full">
            <label className="font-semibold text-lg" htmlFor="job_category">
              Job Category
            </label>
            <select
              className="bg-transparent focus:outline-none  border-slate-600 border-1 p-3 mt-3 rounded-lg"
              name="job_category"
              id="job_category"
            >
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
        </div>
        {/* row */}
        <div className="flex justify-between flex-col lg:flex-row gap-6 mt-6">
          {/* col */}
          <div className="flex flex-col w-full">
            <label className="font-semibold text-lg" htmlFor="text">
              Salary range
            </label>
            <div className="flex gap-3">
              <input
                className="bg-transparent w-full   focus:outline-none border-slate-600 border-1 p-3 mt-3  rounded-lg "
                type="number"
                placeholder="Minimum"
                name="salary_max"
                id=""
              />
              <input
                className="bg-transparent w-full  focus:outline-none border-slate-600 border-1 p-3 mt-3  rounded-lg "
                type="number"
                placeholder="Maximum"
                name="salary_max"
                id=""
              />
            </div>
          </div>
          {/* col */}
          <div className="flex flex-col w-full">
            <label className="font-semibold text-lg" htmlFor="text">
              Post Date
            </label>

            <DatePicker
              className="bg-transparent w-full focus:outline-none border-slate-600 border-1 p-3 mt-3  rounded-lg "
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </div>
        <div className="flex justify-between flex-col lg:flex-row gap-6 mt-6">
          {/* col */}
          <div className="flex flex-col w-full">
            <label className="font-semibold text-lg" htmlFor="text">
              Application Deadline
            </label>

            <DatePicker
              className="bg-transparent w-full focus:outline-none border-slate-600 border-1 p-3 mt-3  rounded-lg "
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          {/* col */}
          <div className="flex flex-col w-full">
            <label className="font-semibold text-lg" htmlFor="text">
              Job Applicants Number
            </label>
            <input
              className="bg-transparent focus:outline-none border-slate-600 border-1 p-3 mt-3  rounded-lg "
              type="number"
              defaultValue={0}
              name="title"
              id=""
            />
          </div>
        </div>
        {/* row */}
        <div className="flex flex-col w-full mt-6">
          <label className="font-semibold text-lg" htmlFor="text">
            Job Description
          </label>
          <textarea
            className="bg-transparent focus:outline-none border-slate-600 border-1 p-3 mt-3  rounded-lg "
            placeholder="Enter the job description here."
          />
        </div>
        <Button
          className="w-full text-xl mt-6"
          size="lg"
          variant="shadow"
          color="secondary"
        >
          Add Now
        </Button>
      </form>

      <div>
     
      <Lottie
        className="h-[400px] mb-6"
        animationData={AddJobLottie}
        loop={true}
      ></Lottie>
       <h3 className="text-2xl font-semibold text-center">Carefully fill all the information.</h3>
      </div>
    </div>
  );
};

export default AddJob;

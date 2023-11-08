import { Button } from "@nextui-org/react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, parse } from "date-fns";
import AddJobLottie from "../../assets/lottie/addJob.json";
import Lottie from "lottie-react";
import "../../aos/aosSetup.js";
import UseAuth from "../../hooks/UseAuth.jsx";
import useAxiosSecure from "../../hooks/useAxiosSecure.jsx";
import toast from "react-hot-toast";

const AddJob = () => {
  const [startDate, setStartDate] = useState(new Date());
  const formattedStartDate = format(startDate, "yyyy-MM-dd");
  const { user } = UseAuth();
  const axiosSecure = useAxiosSecure()
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const job = {
      job_banner: form.picture.value,
      job_title: form.title.value,
      author_name: form.author_name.value,
      job_category: form.job_category.value,
      salary_range: `${form.salary_min.value}-${form.salary_max.value}`,
      job_description: form.description.value,
      post_date: format(new Date(), "yyyy-MM-dd"),
      deadline: formattedStartDate,
      applicants_number: +form.applicants.value,
      email: user.email
    };

    axiosSecure.post('/jobs', job)
    .then(res => {
      toast.success('Job added successfully')
      form.reset()
    })
    .catch(err => console.error(err))
    
  };

  return (
    <div className="max-w-screen-2xl px-5 mx-auto my-32 flex  flex-col lg:flex-row items-center gap-6">
      <form
        onSubmit={handleSubmit}
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
              name="picture"
              required
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
              required
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
              required
              disabled
              placeholder="Write author name"
              name="author_name"
              defaultValue={user?.displayName}
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
                required
                className="bg-transparent w-full   focus:outline-none border-slate-600 border-1 p-3 mt-3  rounded-lg "
                type="number"
                placeholder="Minimum"
                name="salary_min"
                id=""
              />
              <input
                className="bg-transparent w-full  focus:outline-none border-slate-600 border-1 p-3 mt-3  rounded-lg "
                type="number"
                required
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
              disabled
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
              required
              name="deadline"
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
              name="applicants"
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
            required
            name="description"
            className="bg-transparent focus:outline-none border-slate-600 border-1 p-3 mt-3  rounded-lg "
            placeholder="Enter the job description here."
          />
        </div>
        <Button
          className="w-full text-xl mt-6"
          size="lg"
          variant="shadow"
          color="secondary"
          type="submit"
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
        <h3 className="text-2xl font-semibold text-center">
          Carefully fill all the information.
        </h3>
      </div>
    </div>
  );
};

export default AddJob;

import React from "react";
import { FiCalendar, FiCheck, FiCheckCircle, FiCreditCard, FiFile, FiMail, FiUser, FiUsers } from "react-icons/fi";
import Card from "./Card";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { BsSafe, BsSafeFill } from "react-icons/bs";
const Features = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-8">
      <div className="px-5 max-w-screen-xl mx-auto my-32">
        <SectionTitle text={'Features'}>Features of JobSensei</SectionTitle>
        <div className="grid gap-6 grid-cols-2 lg:grid-cols-4 mt-6">
          <Card
            title="Thouseds of job"
            subtitle="Endless opportunity"
            href="#"
            Icon={FiFile}
          />
          <Card title="Active" subtitle="Active employers" Icon={FiCalendar} />
          <Card title="Job Post" subtitle="Effortless job posting"  Icon={FiCheckCircle} />
          <Card
            title="Safe info"
            subtitle="All the postings are verified"
            href="#"
            Icon={BsSafe}
          />
        </div>
      </div>
    </div>
  );
};

export default Features;

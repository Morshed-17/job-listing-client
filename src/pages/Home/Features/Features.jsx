import React from "react";
import { FiCreditCard, FiMail, FiUser, FiUsers } from "react-icons/fi";
import Card from "./Card";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
const Features = () => {
  return (
    <div>
      <div className="px-5 max-w-screen-xl mx-auto my-32">
        <SectionTitle text={'Features'}>Features of JobSensei</SectionTitle>
        <div className="grid gap-6 grid-cols-2 lg:grid-cols-4 mt-6">
          <Card
            title="Account"
            subtitle="Manage profile"
            href="#"
            Icon={FiUser}
          />
          <Card title="Email" subtitle="Manage email" href="#" Icon={FiMail} />
          <Card title="Team" subtitle="Manage team" href="#" Icon={FiUsers} />
          <Card
            title="Billing"
            subtitle="Manage cards"
            href="#"
            Icon={FiCreditCard}
          />
        </div>
      </div>
    </div>
  );
};

export default Features;

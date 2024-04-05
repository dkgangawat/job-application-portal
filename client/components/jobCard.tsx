import Image from "next/image";
import React from "react";

type JobCardProps = {
  title: string;
  company: string;
  location: string;
  salary: number;
};

const JobCard: React.FC<JobCardProps> = ({ title, company, location, salary }) => {
  return (
    <>
      <div className=" border shadow-md rounded-md p-4 flex flex-col gap-4">
        <div className=" w-14 h-14 rounded-[50%] bg-gray-3 flex justify-center items-center">
          <Image
            src="/google.png"
            draggable={false}
            alt="job"
            width={30}
            height={30}
          />
        </div>
        <div className=" font-semibold">
          <h2 className="text-xl font-bold">{title}</h2>
          <div className=" flex gap-2">
            <span className="text-gray-1">{location}</span>
            <span className="text-gray-1">•</span>
            <span className="text-gray-1">{company}</span>
          </div>
        </div>
        <div>
          <span className=" px-4 py-1 rounded-[20px] bg-gray-3 text-center border">
            <span className=" font-bold">{`$ ${salary}/month`}</span>
          </span>
        </div>
      </div>
    </>
  );
};


export default JobCard;

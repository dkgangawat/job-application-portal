import Image from "next/image";
import React from "react";

const JobCard: React.FC = () => {
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
          <h2 className="text-xl font-bold">Job title</h2>
          <div className=" flex gap-2">
            <span className="text-gray-1">Location</span>
            <span className="text-gray-1">•</span>
            <span className="text-gray-1">Company name</span>
          </div>
        </div>
        <div>
          <span className=" px-4 py-1 rounded-[20px] bg-gray-3 text-center border">
            <span className=" font-bold">Full-time</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default JobCard;

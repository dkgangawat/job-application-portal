"use client";
import OverlayModel from "@/components/OverlayModel";
import JobCard from "@/components/jobCard";
import JobSearchCard from "@/components/jobSearchCard";
import { useQuery } from "@tanstack/react-query";
import React, { Key, useState } from "react";
import { getJobs } from "../api/jobs";

const Page: React.FC = () => {
  const [openJobModel, setOpenJobModel] = useState(false);
  const [overLayJob, setOverLayJob] = useState<Job>({title:"", company:"", location:"", salary:0, description:"", _id:""});

  const {data, isLoading, isError , error} = useQuery({
    queryKey:["jobs"],
    queryFn: getJobs
  })

  if(isLoading) return <p>Loading...</p>

  return (
    <>
      <div>
        {/* gradient div from let to right with 3 colors */}
        <div className="w-full mb-20 sm:mb-10 h-80 bg-gradient-to-r rounded-xl p-2 from-[#8ccab5] from-10% via-40% via-[#fcc550]  to-[#e9420e] to-100% relative">
          <div className="flex flex-col justify-center items-center h-full text-center gap-4">
            <h1 className="text-4xl font-bold text-white">
              Search for your next job
            </h1>
            <p className="text-white text-center">
              When you`&apos;`re searching for a job, there are a few things you
              can do to get the most out of your search
            </p>

            {/* search bar  */}
            <div className="flex flex-col sm:flex-row sm:min-w-[70%] sm:justify-between justify-center absolute bottom-0 translate-y-[50%] font-bold text-gray-2 bg-white px-4 items-center gap-4 shadow-md rounded-[40px] py-2">
              <div className="flex flex-1 items-center">
                <div className=" rounded-[50%] bg-[#03d167] ">
                  <img src="/search.svg" width={20} height={20} />
                </div>
                <input
                  type="text"
                  placeholder="Job title, keyword or company"
                  className="p-2 flex-1 outline-none border-none bg-transparent min-w-0"
                />
              </div>

              <button className="bg-gray-3 p-2 px-4 rounded-[20px] flex gap-1 items-center">
                <img src="/location.svg" width={20} height={20} />
                Any Location
              </button>
            </div>
          </div>
        </div>

        <p className=" text-gray-2 w-full text-center font-bold">
          You can also
          <span className="mx-2  text-black">Post a job</span>
          or
          <span className=" mx-2  text-black">Post your resume</span>
        </p>
      </div>
      <section className=" mb-10">
        <h5 className=" font-semibold my-4">Suggested job searches</h5>
        <div className=" flex justify-center flex-wrap gap-2 font-bold ">
          {Array.from({ length: 10 }).map((_, i) => (
            <JobSearchCard key={i} />
          ))}
        </div>
      </section>
      <section className="">
        <h5 className=" font-semibold my-4">Recommended for you</h5>
        <ul className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.jobs.map((job:Job, index:Key) => (
            <li
              key={job._id}
              onClick={() => {
                setOpenJobModel(true);
                setOverLayJob(job);
              }}
            >
              <JobCard title={job.title} company={job.company} salary={job.salary} location={job.location} />
            </li>
          ))}
        </ul>
      </section>
      {openJobModel && <OverlayModel location={overLayJob.location}  title={overLayJob.title} description={overLayJob.description} company={overLayJob.company} setClose={setOpenJobModel} />}
    </>
  );
};

type Job = {
  title: string;
  company: string;
  location: string;
  salary: number;
  description: string;
  _id : string;
};


export default Page;

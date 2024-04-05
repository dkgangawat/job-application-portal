"use client";
import OverlayModel from "@/components/OverlayModel";
import JobCard from "@/components/jobCard";
import JobSearchCard from "@/components/jobSearchCard";
import { useQuery } from "@tanstack/react-query";
import React, { Key, useState } from "react";
import { getJobs } from "../api/jobs";
import SearchBar from "@/components/searchBar";
import ShowJobs from "@/components/showJobs";

const Page: React.FC = () => {
 

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
            <SearchBar/>
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
        <ShowJobs jobs={data?.jobs}/>
      </section>
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

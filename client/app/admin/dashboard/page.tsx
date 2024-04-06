"use client";
import {  getJobs } from "@/app/api/jobs";
import JobTable from "@/components/admin/table";
import Pagination from "@/components/pagination";
import {  useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const [page, setPage] = React.useState(1);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["jobs", page],
    queryFn: () => getJobs(page),
  });

 

 

  const router = useRouter()
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something went wrong...</div>;
  return (
    <div>
      {/* card to show total number of jobs */}
      <div className=" text-gray-2 shadow border rounded-lg p-4 max-w-[300px]">
        <h2 className=" text-lg font-bold ">Total Jobs</h2>
        <h3 className=" font-bold text-4xl mt-2">{data.totalJobs}</h3>
      </div>

      {/* search bar and button to add new job */}
      <div className="flex justify-between gap-4 mt-4">
        <form className="flex-1 flex items-center  border rounded-lg pr-4">
          <input
            type="text"
            placeholder="Search for jobs"
            className="p-2 w-full outline-none"
          />
          <button>
            {" "}
            <Image
              src="/search.svg"
              width={25}
              height={25}
              alt="search"
              draggable="false"
            />
          </button>
        </form>
        <button
          className=" bg-green-600 text-white p-2 px-4 rounded-lg"
          onClick={() => router.push("/admin/create-job")}
        >
          Add Job
        </button>
      </div>

      <JobTable jobs={data.jobs} page={page} />
      <Pagination totalPage={data.pages} currentPage={page} setPage={setPage}/>
    
    </div>
  );
};

export default Page;

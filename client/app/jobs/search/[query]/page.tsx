"use client";

import { searchJobs } from "@/app/api/jobs";
import Pagination from "@/components/pagination";
import ShowJobs from "@/components/showJobs";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  const [page, setPage] = useState(1);

  const params = useParams<{ query: string }>();
  const query = params?.query ?? "";

  const { data, isLoading } = useQuery({
    queryKey: ["search", query, page],
    queryFn: () => searchJobs(query, page),
  });

  if (isLoading) {
    return <p className=" w-full text-center">Loading...</p>;
  }
  console.log(data);

  return (
    <>
      <div className=" my-4">
        <h1 className=" text-md font-bold text-gray-2 mb-4">
          Showing results for {query}
        </h1>
        <ShowJobs jobs={data?.jobs} />
      </div>
      <Pagination
        totalPage={data.totalPages}
        currentPage={page}
        setPage={setPage}
      />    
    </>
  );
};

export default Page;

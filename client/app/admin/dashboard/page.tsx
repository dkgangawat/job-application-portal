"use client";
import { deleteJob, getJobs } from "@/app/api/jobs";
import AddJob from "@/components/admin/addJob";
import EditJob from "@/components/admin/editJob";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";

const Page = () => {
  const [page, setPage] = React.useState(1);
  const [addJopPopup, setAddJobPopup] = React.useState(false);
  const [editJobPopup, setEditJobPopup] = React.useState(false);
  const [jobToEdit, setJobToEdit] = React.useState({} as Job);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["jobs", page],
    queryFn: () => getJobs(page),
  });

  const handlePrevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const [deleteJobId, setDeleteJobId] = React.useState("" as string)
  const queryClient = useQueryClient()
  const {mutate:deleteJobM } = useMutation({
    mutationFn: () =>deleteJob(deleteJobId),
    onSuccess:()=>{
        queryClient.invalidateQueries({
            queryKey:["jobs",page]
        })
    }
  })
  if (isLoading) return <div>Loading...</div>;

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
          onClick={() => setAddJobPopup(true)}
        >
          Add Job
        </button>
      </div>

      {/* table to perform CRUD operations on jobs */}
      <div className="mt-4">
        <table className="w-full  ">
          <thead className=" text-left bg-gray-3 h-10">
            <tr>
              <th>Job Title</th>
              <th>Company</th>
              <th>Location</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.jobs?.map((job: Job) => (
              <tr
                key={job._id}
                className="border-b hover:bg-gray-3  cursor-pointer"
              >
                <td>{job.title}</td>
                <td>{job.company}</td>
                <td>{job.location}</td>
                <td>{job.salary}</td>
                <td>
                  <button
                    className="bg-green-500 text-white p-2 rounded-lg"
                    onClick={() => {
                      setJobToEdit(job);
                      setEditJobPopup(true);
                    }}
                  >
                    Edit
                  </button>
                  <button className="bg-red-500 text-white p-2 rounded-lg"
                  onClick={()=>{
                        setDeleteJobId(job._id)
                        deleteJobM()
                    
                  }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* pagination */}
        <div className="flex justify-center gap-4 mt-4 ">
          <button
            className="p-2 px-4 rounded-lg bg-gray-3"
            disabled={page === 1}
            onClick={handlePrevPage}
          >
            Prev
          </button>

          <button
            className={`p-2 px-4 rounded-lg bg-gray-2 text-white
                            }`}
          >
            {page}
          </button>
          <button
            className="p-2 px-4 rounded-lg bg-gray-3"
            disabled={page === data.pages}
            onClick={handleNextPage}
          >
            Next
          </button>
        </div>
        {addJopPopup && <AddJob setClose={setAddJobPopup} />}
        {editJobPopup && <EditJob job={jobToEdit} setClose={setEditJobPopup} />}
      </div>
    </div>
  );
};

type Job = {
  _id: string;
  title: string;
  company: string;
  location: string;
  salary: number;
  description: string;
};

export default Page;

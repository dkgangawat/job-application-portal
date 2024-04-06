"use client";
import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {  updateJob } from "@/app/api/jobs";
import { useRouter } from "next/navigation";

type AddJobProps = {
  job: Job;
};

const EditJob: React.FC<AddJobProps> = ({ job }) => {
  const [jobToUpdated, setjobToUpdated] = React.useState({} as Job);
  const router = useRouter()
  const queryClient = useQueryClient()
  const { mutate, isPending } = useMutation({
    mutationKey: ["jobs", jobToUpdated],
    mutationFn: () => updateJob(jobToUpdated),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["jobs"],
      });
      router.push("/admin/dashboard");
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const jobData: Job = {
        _id: job._id,
      title: formData.get("title") as string,
      company: formData.get("company") as string,
      location: formData.get("location") as string,
      salary: Number(formData.get("salary")),
      description: formData.get("description") as string,
      createdAt: job.createdAt,
    };
    setjobToUpdated(jobData);
    mutate();
  };

  const formatDate = (date: string) => {
    const d = new Date(date);
    return  d.toLocaleDateString() + " at " + d.toLocaleTimeString();
  };

  return (
    <>
        <div className=" mx-auto">
          <h1 className="text-xl font-bold  text-gray-2 mb-4">
            Edit Job
          </h1>
          <div className=" flex gap-4 text-gray-2 font-semibold justify-between mb-4">
            <div className="flex-1">
              <span>Job ID</span>
              <p className=" p-2 border border-gray-300 rounded w-full">{job._id}</p>
            </div>
            <div className=" flex-1"> 
                 <span>Created At</span>
              <p className="p-2 border border-gray-300 rounded w-full">{ formatDate(job.createdAt)}</p>
            </div>
           
          </div>
          <form onSubmit={handleSubmit} className="flex flex-wrap gap-2 text-gray-2 font-semibold">
            <label htmlFor="title">Job Title</label>
            <input
              type="text"
              placeholder="Job Title"
              name="title"
              defaultValue={job.title}
              className="p-2 border border-gray-300 rounded w-full "
            />
            <label htmlFor="company">Company</label>
            <input
              type="text"
              placeholder="Company"
              name="company"
              defaultValue={job.company}
              className="p-2 border border-gray-300 rounded w-full"
            />
            <label htmlFor="location">Location</label>
            <input
              type="text"
              placeholder="Location"
              name="location"
              defaultValue={job.location}
              className="p-2 border border-gray-300 rounded w-full"
            />
            <label htmlFor="salary">Salary in $ per month</label>
            <input
              type="number"
              placeholder="Salary"
              min={0}
              name="salary"
              defaultValue={job.salary}
              className="p-2 border border-gray-300 rounded w-full"
            />
            <label htmlFor="description">Description</label>
            <textarea
              placeholder="Description"
              name="description"
              defaultValue={job.description}
              className="p-2 border border-gray-300 rounded w-full min-h-32 resize-y"
            ></textarea>
            <button
              type="submit"
              disabled={isPending}
              className="bg-[#000012] text-white p-2 rounded w-20"
            >
              {isPending ? "Saving..." : "Save"}
            </button>
          </form>
        </div>
    </>
  );
};

type Job = {
  _id: string;
  title: string;
  company: string;
  location: string;
  salary: number;
  description: string;
  createdAt: string;
};

export default EditJob;

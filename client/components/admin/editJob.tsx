"use client";
import React from "react";
import Overlay from "./overlay";
import { useMutation } from "@tanstack/react-query";
import {  updateJob } from "@/app/api/jobs";

type AddJobProps = {
  setClose: (value: boolean) => void;
  job: Job;
};

const EditJob: React.FC<AddJobProps> = ({ setClose, job }) => {
  const [jobToUpdated, setjobToUpdated] = React.useState({} as Job);
  const { mutate, isPending, isSuccess } = useMutation({
    mutationKey: ["jobs", jobToUpdated],
    mutationFn: () => updateJob(jobToUpdated),
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
    };
    setjobToUpdated(jobData);
    mutate();
  };

  return (
    <>
      <Overlay setClose={setClose}>
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-xl font-bold text-center text-gray-2 mb-4">
            Edit Job
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-wrap gap-2">
            <input
              type="text"
              placeholder="Job Title"
              name="title"
              defaultValue={job.title}
              className="p-2 border border-gray-300 rounded w-full "
            />
            <input
              type="text"
              placeholder="Company"
              name="company"
              defaultValue={job.company}
              className="p-2 border border-gray-300 rounded w-full"
            />
            <input
              type="text"
              placeholder="Location"
              name="location"
              defaultValue={job.location}
              className="p-2 border border-gray-300 rounded w-full"
            />
            <input
              type="number"
              placeholder="Salary"
              min={0}
              name="salary"
              defaultValue={job.salary}
              className="p-2 border border-gray-300 rounded w-full"
            />
            <textarea
              placeholder="Description"
              name="description"
              defaultValue={job.description}
              className="p-2 border border-gray-300 rounded w-full h-32 resize-none"
            ></textarea>
            <button
              type="submit"
              disabled={isPending}
              className="bg-[#000012] text-white p-2 rounded w-full"
            >
              {isPending ? "Adding Job..." : "Add Job"}
            </button>
          </form>
        </div>
      </Overlay>
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
};

export default EditJob;


'use client'
import React from "react";
import Overlay from "./overlay";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addJob } from "@/app/api/jobs";

type AddJobProps = {
    setClose: (value: boolean) => void;
    };

const AddJob:React.FC<AddJobProps> = ({setClose}) => {
    const queryClient = useQueryClient()
    const [jobToAdd, setJobToAdd] = React.useState({})
    const {mutate, isPending , isSuccess} = useMutation({
        mutationKey: ['jobs'],
        mutationFn: () => addJob(jobToAdd),
        onSuccess:()=>{
            queryClient.invalidateQueries({
                queryKey:['jobs']
            })
        }
    })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const job: Job = {
      title: formData.get("title") as string,
      company: formData.get("company") as string,
      location: formData.get("location") as string,
      salary: Number(formData.get("salary")),
      description: formData.get("description") as string,
    };
    setJobToAdd(job)
    mutate()
  };

    console.log(isPending)

  return (
    <>
      <Overlay setClose={setClose}>
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-xl font-bold text-center text-gray-2 mb-4">
            Add Job
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-wrap gap-2">
            <input
              type="text"
              placeholder="Job Title"
              name="title"
              className="p-2 border border-gray-300 rounded w-full "
            />
            <input
              type="text"
              placeholder="Company"
              name="company"
              className="p-2 border border-gray-300 rounded w-full"
            />
            <input
              type="text"
              placeholder="Location"
              name="location"
              className="p-2 border border-gray-300 rounded w-full"
            />
            <input
              type="number"
              placeholder="Salary"
              min={0}
              name="salary"
              className="p-2 border border-gray-300 rounded w-full"
            />
            <textarea
              placeholder="Description"
              name="description"
              className="p-2 border border-gray-300 rounded w-full h-32 resize-none"
            ></textarea>
            <button
              type="submit"
                disabled={isPending}
              className="bg-[#000012] text-white p-2 rounded w-full"
            >
                {isPending ? 'Adding Job...' : 'Add Job'}
            </button>
          </form>
        </div>
      </Overlay>
    </>
  );
};

type Job = {
  title: string;
  company: string;
  location: string;
  salary: number;
  description: string;
};

export default AddJob;

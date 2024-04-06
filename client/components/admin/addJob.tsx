
'use client'
import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addJob } from "@/app/api/jobs";
import { useRouter } from "next/navigation";


const AddJob:React.FC = () => {
    const queryClient = useQueryClient()
    const [jobToAdd, setJobToAdd] = React.useState({})

    const router = useRouter()
    const {mutate, isPending } = useMutation({
        mutationKey: ['jobs'],
        mutationFn: () => addJob(jobToAdd),
        onSuccess:()=>{
            queryClient.invalidateQueries({
                queryKey:['jobs']
            })
            router.push('/admin/dashboard')
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


  return (
    <>
        <div className=" mx-auto">
          <h1 className="text-xl font-bold  text-gray-2 mb-4">
            Add Job
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-wrap gap-2 text-gray-2 font-semibold">
            <label htmlFor="title">Job Title</label>
            <input
              type="text"
              placeholder="Job Title"
              name="title"
              className="p-2 border border-gray-300 rounded w-full outline-none"
            />
            <label htmlFor="company">Company</label>
            <input
              type="text"
              placeholder="Company"
              name="company"
              className="p-2 border border-gray-300 rounded w-full outline-none"
            />
            <label htmlFor="location">Location</label>
            <input
              type="text"
              placeholder="Location"
              name="location"
              className="p-2 border border-gray-300 rounded w-full outline-none"
            />
            <label htmlFor="salary">Salary in $ per month</label>
            <input
              type="number"
              placeholder="Salary"
              min={0}
              name="salary"
              className="p-2 border border-gray-300 rounded w-full outline-none"
            />
            <label htmlFor="description">Description</label>
            <textarea
              placeholder="Description"
              name="description"
              className="p-2 border border-gray-300 rounded w-full h-32 resize-y"
            ></textarea>
            <button
              type="submit"
                disabled={isPending}
              className="bg-[#000012] max-w-20 text-white p-2 rounded w-full outline-none"
            >
                {isPending ? 'Adding Job...' : 'Add Job'}
            </button>
          </form>
        </div>
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

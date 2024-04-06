import { deleteJob } from '@/app/api/jobs';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'


type JobTableProps = {
    jobs: Job[];
    page: number;
  };

const JobTable: React.FC<JobTableProps> = ({jobs, page}) => {
  const [deleteJobId, setDeleteJobId] = React.useState("" as string)

  const queryClient = useQueryClient()
  const {mutate:deleteJobM } = useMutation({
    mutationFn: () =>deleteJob(deleteJobId),
    onSuccess:()=>{
        queryClient.invalidateQueries({
            queryKey:["jobs", page]
        })
    }
  })

    const router = useRouter();

  return (
    <>
      <div className="mt-4">
        <table className="w-full  ">
          <thead className=" text-left bg-gray-3 h-10">
            <tr>
              <th>Job Title</th>
              <th>Company</th>
              <th>Location</th>
              <th>Salary</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {jobs?.map((job: Job) => (
              <tr
                key={job._id}
                className="border-b hover:bg-gray-3  cursor-pointer"
              >
                <td className=" md:columns-2 ">{job.title}</td>
                <td>{job.company}</td>
                <td>{job.location}</td>
                <td>{job.salary}</td>
                <td>
                  <button
                    className=" text-white p-2 rounded-lg"
                    onClick={() => {
                      router.push(`/admin/update/${job._id}`);
                    }}
                  >
                    <Image
                      src="/edit.svg"
                      width={25}
                      height={25}
                      alt="edit"
                      draggable="false"
                    />
                  </button>
                  <button className=" text-white p-2 rounded-lg"
                  onClick={()=>{
                        setDeleteJobId(job._id)
                        deleteJobM()
                    
                  }}
                  >
                    <Image
                      src="/delete.svg"
                      width={25}
                      height={25}
                      alt="delete"
                      draggable="false"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

type Job = {
    _id: string;
    title: string;
    company: string;
    location: string;
    salary: number;
    description: string;
  };
  

export default JobTable
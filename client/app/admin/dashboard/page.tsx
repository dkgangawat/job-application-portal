"use client";
import { getJobs } from '@/app/api/jobs';
import { useQuery } from '@tanstack/react-query';
import React from 'react'

const Page = () => {
    const [page, setPage] = React.useState(1)
    const { data, isLoading, isError } = useQuery({
        queryKey: ['jobs', page],
        queryFn: () => getJobs(page)
    })

    const handlePrevPage = () => {
        setPage((prevPage) => prevPage - 1);
    };

    const handleNextPage = () => {
        setPage((prevPage) => prevPage + 1);
    };

    if (isLoading) return <div>Loading...</div>

    return (
        <div>
            {/* card to show total number of jobs */}
            <div className=' text-gray-2 shadow border rounded-lg p-4 max-w-[300px]'>
                <h2 className=' text-lg font-bold '>Total Jobs</h2>
                <h3 className=' font-bold text-4xl mt-2'>{data.totalJobs}</h3>
            </div>

            {/* table to perform CRUD operations on jobs */}
            <div className='mt-4'>
                <table className='w-full  '>
                    <thead className=' text-left bg-gray-3 h-10'>
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
                            <tr key={job.id}>
                                <td>{job.title}</td>
                                <td>{job.company}</td>
                                <td>{job.location}</td>
                                <td>{job.salary}</td>
                                <td>
                                    <button className='bg-green-500 text-white p-2 rounded-lg'>Edit</button>
                                    <button className='bg-red-500 text-white p-2 rounded-lg'>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* pagination */}
                <div className='flex justify-center gap-4 mt-4 '>
                    <button
                        className='p-2 px-4 rounded-lg bg-gray-3'
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
                        className='p-2 px-4 rounded-lg bg-gray-3'
                        disabled={page === data.pages                        }
                        onClick={handleNextPage}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

type Job = {
    id: string;
    title: string;
    company: string;
    location: string;
    salary: number;
    description: string;
}

export default Page

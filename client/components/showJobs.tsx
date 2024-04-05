
'use client'
import React, { useState } from 'react'
import JobCard from './jobCard';
import OverlayModel from './OverlayModel';

const ShowJobs:React.FC<{jobs:Job[]}> = ({jobs}) => {
    const [openJobModel, setOpenJobModel] = useState(false);
    const [overLayJob, setOverLayJob] = useState<Job>({title:"", company:"", location:"", salary:0, description:"", _id:""});
  return (
    <>
    <ul className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {jobs.map((job:Job) => (
            <li
              key={job._id}
              onClick={() => {
                setOpenJobModel(true);
                setOverLayJob(job);
              }}
            >
              <JobCard title={job.title} company={job.company} salary={job.salary} location={job.location} />
            </li>
          ))}
        </ul>
      {openJobModel && <OverlayModel location={overLayJob.location}  title={overLayJob.title} description={overLayJob.description} company={overLayJob.company} setClose={setOpenJobModel} />}
    </>
  )
}

type Job = {
    title: string;
    company: string;
    location: string;
    salary: number;
    description: string;
    _id : string;
  };

export default ShowJobs
'use client'

import { getJob } from '@/app/api/jobs'
import EditJob from '@/components/admin/editJob'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import React from 'react'


const Page = () => {
    const params = useParams<{ jobid: string }>(); 
    const jobid = params?.jobid ?? '';

    const {data , isLoading , isError, error} = useQuery({
        queryKey: ['updateJob', jobid],
        queryFn: () => getJob(jobid)
    });

    if(isLoading){
        return <p>Loading...</p>
    }

    if(isError){
        return <p>something went wrong... {error.message}</p>
    }

    return (
        <>
            <EditJob job={data?.job} />
        </>
    );
}

export default Page
'use client'

import { searchJobs } from '@/app/api/jobs'
import ShowJobs from '@/components/showJobs'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import React from 'react'

const Page = () => {

        const params = useParams<{query:string}>()
        const query = params?.query ?? ''

        const { data, isLoading } = useQuery({
            queryKey:['search', query],
            queryFn: () => searchJobs(query)})

    if(isLoading){
        return <p className=' w-full text-center'>Loading...</p>
    }
    console.log(data)

    return (
        <>
        <div className=' my-4'>
            <h1 className=' text-md font-bold text-gray-2 mb-4'>Showing results for {query}</h1>
            <ShowJobs jobs={data?.jobs}/>
        </div>
        </>
    )
}

export default Page
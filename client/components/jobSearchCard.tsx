import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const JobSearchCard: React.FC<{query:string}> = ({query}) => {

  const router = useRouter()

  return (
    <>
      <button className=" rounded-[20px] border flex items-center gap-2 py-2 px-4"
      onClick={()=>{router.push(`/jobs/search/${query}`)}}
      >
        <span>{query}</span>
        <Image
          alt="suggest search"
          src="/search.svg"
          width={20}
          height={20}
          className=" bg-blend-overlay bg-cover rounded-[20px]"
        />
      </button>
    </>
  );
};

export default JobSearchCard;

import Image from "next/image";
import React from "react";

const JobSearchCard: React.FC = () => {
  return (
    <>
      <div className=" rounded-[20px] border flex items-center gap-2 py-2 px-4">
        <span>brand name</span>
        <Image
          alt="suggest search"
          src="/search.svg"
          width={20}
          height={20}
          className=" bg-blend-overlay bg-cover rounded-[20px]"
        />
      </div>
    </>
  );
};

export default JobSearchCard;

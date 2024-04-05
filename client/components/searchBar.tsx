"use client";

import { useRouter } from "next/navigation";
import React from "react";

const SearchBar = () => {
  const [search, setSearch] = React.useState("");

  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/jobs/search/${search}`);
  };
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:min-w-[70%] sm:justify-between justify-center absolute bottom-0 translate-y-[50%] font-bold text-gray-2 bg-white px-4 items-center gap-4 shadow-md rounded-[40px] py-2">
        <div className="flex flex-1 items-center">
          <div className=" rounded-[50%] bg-[#03d167] ">
            <img src="/search.svg" width={20} height={20} />
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Job title, keyword or company"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="p-2 flex-1 outline-none border-none bg-transparent min-w-0"
            />
          </form>
        </div>

        <button className="bg-gray-3 p-2 px-4 rounded-[20px] flex gap-1 items-center">
          <img src="/location.svg" width={20} height={20} />
          Any Location
        </button>
      </div>
    </>
  );
};

export default SearchBar;

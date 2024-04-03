import React from "react";

const page: React.FC = () => {
  return (
    <div>
      {/* gradient div from let to right with 3 colors */}
      <div className="w-full mb-10 h-80 bg-gradient-to-r rounded-xl p-2 from-[#8ccab5] from-10% via-40% via-[#fcc550]  to-[#e9420e] to-100% relative">
        <div className="flex flex-col justify-center items-center h-full text-center gap-4">
          <h1 className="text-4xl font-bold text-white">
            Search for your next job
          </h1>
          <p className="text-white text-center">
            When you're searching for a job, there are a few things you can do
            to get the most out of your search
          </p>

          {/* search bar  */}
          <div className="flex flex-col sm:flex-row sm:min-w-[70%] sm:justify-between justify-center absolute bottom-0 translate-y-[50%] font-bold text-gray-2 bg-white px-4 items-center gap-4 shadow-md rounded-[40px] py-2">
            <div className="flex flex-1 items-center">
              <div className=" rounded-[50%] bg-[#03d167] ">
                <img src="/search.svg" width={20} height={20} />
              </div>
              <input
                type="text"
                placeholder="Job title, keyword or company"
                className="p-2 flex-1 outline-none border-none bg-transparent min-w-0"
              />
            </div>

            <button className="bg-gray-3 p-2 px-4 rounded-[20px] flex gap-1 items-center">
              <img src="/location.svg" width={20} height={20} />
              Any Location
            </button>
          </div>
        </div>
      </div>

      <p className=" text-gray-2 w-full text-center font-bold">
        You can also
        <span className="mx-2  text-black">Post a job</span>
        or
        <span className=" mx-2  text-black">Post your resume</span>
      </p>
    </div>
  );
};

export default page;

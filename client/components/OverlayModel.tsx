import Image from "next/image";
import React from "react";

const OverlayModel = ({ setClose }: any) => {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white p-6 rounded-lg flex flex-col gap-4 sm:max-w-[50%] h-[80vh] overflow-y-auto relative">
          <button
            onClick={() => {
              setClose(false);
            }}
            className="absolute top-4 right-4"
          >
            X
          </button>
          <div className=" flex gap-2">
            <div className=" w-14 h-14  bg-gray-3 flex justify-center items-center">
              <Image
                src="/google.png"
                draggable={false}
                alt="job"
                width={30}
                height={30}
              />
            </div>
            <div>
              <h2 className="text-xl font-bold">Job title</h2>
              <div className=" flex gap-2">
                <span className="text-gray-1">Location</span>
                <span className="text-gray-1">•</span>
                <span className="text-gray-1">Company name</span>
              </div>
            </div>
          </div>
          <h1 className=" font-bold">Description</h1>
          <p className=" text-gray-2 font-bold flex-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            repudiandae accusantium aut velit eum, non cum itaque maiores
            molestiae est delectus voluptatum libero sapiente possimus iure
            deserunt quae quisquam ipsam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Numquam repudiandae accusantium aut velit eum, non
            cum itaque maiores molestiae est delectus voluptatum libero sapiente
            possimus iure deserunt quae quisquam ipsam. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Numquam repudiandae accusantium
            aut velit eum, non cum itaque maiores molestiae est delectus
            voluptatum libero sapiente possimus iure deserunt quae quisquam
            ipsam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div>
            <button className="bg-orange-1 block rounded-[20px] mx-auto text-white px-4 py-2 font-bold text-xl">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverlayModel;

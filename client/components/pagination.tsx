import React from "react";
  

type PaginationProps = {
    setPage: React.Dispatch<React.SetStateAction<number>>;
    currentPage: number;
    totalPage: number;
  };

const Pagination:React.FC<PaginationProps> = ({
    setPage,
    currentPage,
    totalPage,
}) => {


  const handlePrevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <div className="flex justify-center gap-4 mt-4 ">
        <button
          className="p-2 px-4 rounded-lg bg-gray-3"
          disabled={currentPage === 1}
          onClick={handlePrevPage}
        >
          Prev
        </button>

        <button
          className={`p-2 px-4 rounded-lg bg-gray-2 text-white
                  }`}
        >
          {currentPage}
        </button>
        <button
          className="p-2 px-4 rounded-lg bg-gray-3"
          disabled={currentPage === totalPage}
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    <p className=" text-gray-2 text-sm  text-center font-bold my-1">showing {currentPage} of {totalPage} </p>
    </>
  );
};

export default Pagination;

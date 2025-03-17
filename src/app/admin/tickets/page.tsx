"use client";
import { useState } from "react";

const Ticket = () => {
  const [page, setPage] = useState<number>(1);
  return (
    <div className="flex flex-col gap-7 h-[90vh] p-4">
      <div className="flex justify-between items-center ">
        <div className=" flex flex-col gap-5">
          <div className="flex items-center gap-5">
            <div className="relative flex items-center border border-gray-500 rounded-md p-2">
              <svg
                className="text-gray-400 absolute left-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                type="text"
                className="pl-8 w-full outline-none border-none bg-transparent text-white placeholder-gray-400"
                placeholder="Search by name"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-full grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <div
              className="relative mb-5 card hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer"
              key={i}
            >
              <img
                src="https://i.pinimg.com/736x/e3/09/e9/e309e958c468ae8fd90bed43ca18f1cf.jpg"
                alt="img"
                className="w-full object-cover rounded-md aspect-[4/3] sm:aspect-[5/3]"
              />
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute inset-0 bg-black/40"></div>

              <div className="absolute bottom-0 left-0 w-full h-1/3 z-10 text-white p-3 sm:p-5 flex items-center backdrop-blur-md">
                <h1 className="text-sm sm:text-lg font-semibold uppercase leading-tight">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente, molestias.
                </h1>
              </div>
            </div>
          ))}
      </div>

      <div className="join justify-end">
        <button
          className={`join-item btn text-white border-neutral-800 hover:bg-red-600 ${
            page === 1 ? "bg-red-600" : "bg-neutral-800"
          }`}
          onClick={() => setPage(1)}
        >
          1
        </button>
        <button
          className={`join-item btn text-white border-neutral-800 hover:bg-red-600 ${
            page === 2 ? "bg-red-600" : "bg-neutral-800"
          }`}
          onClick={() => setPage(2)}
        >
          2
        </button>
        <button
          className={`join-item btn text-white border-neutral-800 hover:bg-red-600 ${
            page === 3 ? "bg-red-600" : "bg-neutral-800"
          }`}
          onClick={() => setPage(3)}
        >
          3
        </button>
        <button
          className={`join-item btn text-white border-neutral-800 hover:bg-red-600 ${
            page === 4 ? "bg-red-600" : "bg-neutral-800"
          }`}
          onClick={() => setPage(4)}
        >
          4
        </button>
      </div>
    </div>
  );
};

export default Ticket;

"use client";

import { useEffect, useRef, useState } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css";
import "flatpickr/dist/themes/dark.css";

const History = () => {
  const fromDateRef = useRef<HTMLInputElement | null>(null);
  const toDateRef = useRef<HTMLInputElement | null>(null);
  const [page, setPage] = useState<number>(1);
  const [type, setType] = useState<string>("earn");

  useEffect(() => {
    if (fromDateRef.current) {
      flatpickr(fromDateRef.current, {
        dateFormat: "d-m-Y",
        allowInput: true,
        minDate: "1900-01-01",
        maxDate: "today",
      });
    }

    if (toDateRef.current) {
      flatpickr(toDateRef.current, {
        dateFormat: "d-m-Y",
        allowInput: true,
        minDate: "1900-01-01",
        maxDate: "today",
      });
    }
  }, []);

  return (
    <>
      <div className="flex flex-col gap-5 h-[90vh] p-4">
        <div className="grid grid-cols-12 gap-5 items-center mb-5">
          <div className="col-span-5 flex flex-col gap-5">
            <div className="flex items-center gap-5">
              <label className="w-1/5">From</label>
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
                    d="M3 9H21M17 13.0014L7 13M10.3333 17.0005L7 17M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input
                  type="text"
                  className="pl-8 w-full outline-none border-none bg-transparent text-white placeholder-gray-400"
                  placeholder="Select Date"
                  ref={fromDateRef}
                />
              </div>
            </div>

            <div className="flex items-center gap-5">
              <label className="w-1/5">To</label>
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
                    d="M3 9H21M17 13.0014L7 13M10.3333 17.0005L7 17M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input
                  type="text"
                  className="pl-8 w-full outline-none border-none bg-transparent text-white placeholder-gray-400"
                  placeholder="Select Date"
                  ref={toDateRef}
                />
              </div>
            </div>
          </div>
          <div className="col-span-4 flex flex-col gap-10">
            <div className="flex items-center gap-1">
              <input
                type="radio"
                name="radio-2"
                className="peer hidden"
                id="radioType1"
                value="female"
                checked={type === "earn"}
                onChange={() => setType("earn")}
              />
              <label
                className="cursor-pointer text-base flex items-center gap-2 peer-checked:text-red-500"
                htmlFor="radioType1"
              >
                <span className="w-4 h-4 border-2 border-red-500 rounded-full flex items-center justify-center">
                  {type === "earn" && (
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  )}
                </span>
                Earn Points History
              </label>
            </div>
            <div className="flex items-center gap-1">
              <input
                type="radio"
                name="radio-2"
                className="peer hidden"
                id="radioType2"
                value="female"
                checked={type === "use"}
                onChange={() => setType("use")}
              />
              <label
                className="cursor-pointer text-base flex items-center gap-2 peer-checked:text-red-500"
                htmlFor="radioType2"
              >
                <span className="w-4 h-4 border-2 border-red-500 rounded-full flex items-center justify-center">
                  {type === "use" && (
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  )}
                </span>
                Transaction Points History
              </label>
            </div>
          </div>
          <div className="col-span-3 flex flex-col gap-5">
            <button
              type="submit"
              className="block bg-red-600 py-4 rounded-2xl hover:bg-red-800 hover:-translate-y-1 transition-all duration-500 font-semibold "
            >
              🔍 Search
            </button>
          </div>
        </div>
        <div className="overflow-x-auto rounded-md mb-2">
          <table className="table bg-neutral-900 text-white">
            <thead className="bg-red-800 text-white text-lg font-bold text-center">
              <tr>
                <th></th>
                <th>Date</th>
                <th>Movie Title</th>
                <th>Bonus Point</th>
              </tr>
            </thead>
            <tbody>
              {Array(8)
                .fill(null)
                .map((_, index) => (
                  <tr
                    key={index}
                    className="hover:bg-red-700/30 transition duration-200 text-center"
                  >
                    <th>{index + 1}</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                  </tr>
                ))}
            </tbody>
          </table>
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
    </>
  );
};

export default History;

"use client";

import ConfirmModal from "@/components/confirm.modal";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Employee = () => {
  const fromDateRef = useRef<HTMLInputElement | null>(null);
  const toDateRef = useRef<HTMLInputElement | null>(null);
  const [page, setPage] = useState<number>(1);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    toast.success("Delete staff success");
    setIsOpen(false);
  };
  return (
    <>
      <div className="flex flex-col gap-5 h-[90vh] p-4">
        <div className="flex justify-between items-center mb-5">
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

          <div className=" flex  flex-col gap-5">
            <button
              type="submit"
              className="block  bg-red-600 py-3 px-8 rounded-2xl hover:bg-red-800 hover:-translate-y-1 transition-all duration-500 font-semibold "
            >
              ➕ Create Staff
            </button>
          </div>
        </div>
        <div className="overflow-x-auto rounded-md mb-1">
          <table className="table bg-neutral-900 text-white">
            <thead className="bg-red-800 text-white text-lg font-bold text-center">
              <tr>
                <th></th>
                <th>Name Staff</th>
                <th>ID Card </th>
                <th>Email </th>
                <th>Phone Number</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Array(7)
                .fill(null)
                .map((_, index) => (
                  <tr
                    key={index}
                    className="hover:bg-red-700/30 transition duration-200 text-center"
                  >
                    <th>{index + 1}</th>
                    <td>Brice Swyre</td>
                    <td>123432425</td>
                    <td>ngocthbse183850@fpt.edu.vn</td>
                    <td>0129298317</td>
                    <td>Ha Noi</td>
                    <td className="flex justify-center gap-2">
                      <button className="px-4 rounded-lg py-2 bg-neutral-600  hover:bg-red-800 hover:-translate-y-1 transition-all duration-500 ">
                        🖋️ Edit
                      </button>
                      <button
                        className="px-4 rounded-lg py-2 bg-neutral-600  hover:bg-red-800 hover:-translate-y-1 transition-all duration-500"
                        onClick={() => setIsOpen(true)}
                      >
                        🗑️ Delete
                      </button>
                    </td>
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

      <ConfirmModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirm}
        text="Do you want delete this staff"
        icon="warning"
      />
    </>
  );
};

export default Employee;

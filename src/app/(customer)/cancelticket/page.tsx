"use client";

import { useState } from "react";
import { Ticket } from "@/types/ticket";
import MyTicketModal from "@/components/ticket.modal";
const dummyTicket: Ticket = {
  id: 1,
  image:
    "https://i.pinimg.com/736x/e3/09/e9/e309e958c468ae8fd90bed43ca18f1cf.jpg",
  date: "2025-03-10",
  title: "Avengers: Endgame",
  seat: ["A5", "A6", "B7"],
  time: "19:30",
  screen: "Screen 3",
  totalPrice: 450000,
};

const CanceledTicket = () => {
  const [status, setStatus] = useState<boolean>(true);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <div className="flex flex-col gap-5 h-[90vh] ">
        <div className="h-full grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 ">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <div
                className="card hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer"
                key={i}
                onClick={() => setIsOpenModal(true)}
              >
                {/* <div className="absolute inset-0 bg-black opacity-60"></div> */}
                <img
                  src="https://i.pinimg.com/736x/e3/09/e9/e309e958c468ae8fd90bed43ca18f1cf.jpg"
                  alt="img"
                  className="absolute inset-0 w-full h-full object-cover rounded-md"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute inset-0 bg-black/80"></div>
                <div className="relative z-10 card-body text-white p-5 flex flex-col justify-between">
                  <h2 className="card-title text-lg font-semibold line-clamp-3 mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita, maiores? Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Ab, ullam adipisci minus itaque illum quia
                    sint repellendus ea fugiat reiciendis soluta blanditiis,
                    maxime, aliquam deserunt autem enim eligendi nam iste!
                  </h2>
                  {/* <p className="font-bold">
                  📅 Date : <span className="font-light">22 / 07 / 2014</span>
                </p>
                <p className="font-bold">
                  💰 Total Money : <span className="font-light">200.000</span>
                </p> */}

                  <div className="card-actions justify-end">
                    <h1 className="px-4  py-2 rounded-md bg-red-600">Cancel</h1>
                  </div>
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
      <MyTicketModal
        isOpenModal={isOpenModal}
        onClose={handleCloseModal}
        ticket={dummyTicket}
      />
    </>
  );
};
export default CanceledTicket;

import React from "react";
import { useRouter } from "next/navigation";
import { Ticket } from "../types/ticket";

interface ConfirmModalTicketProps {
  isOpenModal: boolean;
  onClose: () => void;
  ticket: Ticket | null;
  onConfirm: () => void;
}

const ConfirmModalTicket: React.FC<ConfirmModalTicketProps> = ({
  isOpenModal,
  onClose,
  ticket,
  onConfirm,
}) => {
  if (!isOpenModal || !ticket) return null;
  const router = useRouter();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 ">
      <div className="bg-neutral-950 rounded-lg shadow-lg max-w-2xl w-full relative border-2 border-gray-800">
        <button
          onClick={onClose}
          className="absolute py-2 px-4 rounded-full bg-transparent z-10 text-3xl top-3 right-3 text-gray-200  hover:bg-gray-50/10"
        >
          ✖
        </button>
        <div className="relative">
          <img src={ticket.image} alt="movie" className="w-full rounded-t-md" />

          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-x-0 bottom-0 -1/2 h-1/3 bg-gradient-to-t from-black/100 to-transparent rounded-t-md"></div>
          <h1 className="absolute bottom-5 w-2/3 left-3 text-left text-white text-xl font-bold uppercase px-3 ">
            {ticket.title}lorem ipsum dolor sit amet, consectetur adipiscing
            elit lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h1>
        </div>
        <div className="px-6 py-4">
          <div className="grid grid-cols-3 justify-between pb-4 border-b-2 border-gray-800">
            <div className="col-span-1 space-y-3">
              <p className="text-lg  font-bold">
                Date :{" "}
                <span className="text-neutral-400 font-semibold">
                  {ticket.date}
                </span>
              </p>
              <p className="text-lg  font-bold">
                Time :{" "}
                <span className="text-neutral-400 font-semibold">
                  {" "}
                  {ticket.time}
                </span>
              </p>
              <p className="text-lg  font-bold">
                Seat :{" "}
                <span className="text-neutral-400 font-semibold">
                  {ticket.seat.join(" ")}
                </span>
              </p>
              <p className="text-lg  font-bold">
                Screen :{" "}
                <span className="text-neutral-400 font-semibold">
                  {ticket.screen}
                </span>
              </p>
            </div>
            <div className="col-span-2 space-y-3">
              <p className="text-lg  font-bold">
                Name :{" "}
                <span className="text-neutral-400 font-semibold">
                  consectetur adipiscing elit lorem
                </span>
              </p>
              <p className="text-lg  font-bold">
                Email :{" "}
                <span className="text-neutral-400 font-semibold">
                  consectetur adipiscing elit lorem
                </span>
              </p>
              <p className="text-lg  font-bold">
                ID :{" "}
                <span className="text-neutral-400 font-semibold">
                  1233232435436
                </span>
              </p>
              <p className="text-lg  font-bold">
                Phone number :{" "}
                <span className="text-neutral-400 font-semibold">1234567</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between px-10 pb-6  mt-2 space-x-3">
          <p className="text-2xl uppercase font-bold">
            Total :{" "}
            <span className="text-neutral-400 font-semibold">
              {ticket.totalPrice}
            </span>
          </p>
          <button
            className="px-6 py-2 bg-red-700 uppercase font-bold text-white rounded-md hover:bg-red-900"
            onClick={() => {
              onConfirm();
              router.push("/");
            }}
          >
            Booking Now ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModalTicket;

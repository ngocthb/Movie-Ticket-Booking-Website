import React from "react";
import { useRouter } from "next/navigation";
import { Ticket } from "../types/ticket";

interface MyTicketProps {
  isOpenModal: boolean;
  onClose: () => void;
  ticket: Ticket | null;
}

const MyTicket: React.FC<MyTicketProps> = ({
  isOpenModal,
  onClose,
  ticket,
}) => {
  if (!isOpenModal || !ticket) return null;
  const router = useRouter();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="bg-white rounded-xl shadow-lg max-w-sm w-full relative">
        {/* Nút đóng */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 py-2 px-4 rounded-full bg-gray-200 text-gray-800 z-10 text-2xl hover:bg-gray-300"
        >
          ✖
        </button>

        <div className="text-white rounded-t-lg flex flex-col items-center relative">
          <div className="absolute inset-0 bg-black opacity-50 rounded-t-xl"></div>
          <img
            src={ticket.image}
            alt="movie"
            className="w-full object-cover rounded-t-xl"
          />
          <p className="absolute bottom-2 text-center text-lg font-semibold z-10">
            {ticket.title}
          </p>
        </div>

        <div className="p-8 mb-5 text-gray-900 relative">
          <div className="flex w-full justify-between gap-10">
            <div className="flex w-1/2 flex-col items-start  justify-between">
              <p className="text-sm text-neutral-400 font-semibold">Screen :</p>
              <p className="text-lg font-semibold">{ticket.screen}</p>
            </div>
            <div className="flex w-1/2 flex-col items-start  justify-between">
              <p className="text-sm text-neutral-400 font-semibold">Date :</p>
              <p className="text-lg font-semibold">{ticket.date}</p>
            </div>
          </div>
          <div className="flex w-full justify-between gap-10">
            <div className="flex w-1/2 flex-col items-start  justify-between">
              <p className="text-sm text-neutral-400 font-semibold">Time :</p>
              <p className="text-lg font-semibold">{ticket.time}</p>
            </div>
            <div className="flex w-1/2 flex-col items-start  justify-between">
              <p className="text-sm text-neutral-400 font-semibold">Seat :</p>
              <p className="text-lg font-semibold">{ticket.seat.join(" - ")}</p>
            </div>
          </div>
        </div>

        <div className="relative flex items-center">
          <div className="w-full border-t-2 border-dashed border-gray-400"></div>
          <div
            className="absolute -left-12 w-24 h-24 bg-black rounded-full "
            style={{ clipPath: "inset(0 0 0 50% )" }}
          ></div>
          <div
            className="absolute -right-12 w-24 h-24 bg-black rounded-full "
            style={{ clipPath: "inset( 0 50% 0 0)" }}
          ></div>
        </div>

        <div className="flex justify-center p-4">
          <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
            qr
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyTicket;

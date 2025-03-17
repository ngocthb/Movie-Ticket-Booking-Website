"use client";

import { useState, useRef, useEffect } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css";
import "flatpickr/dist/themes/dark.css";
import { Ticket } from "@/types/ticket";
import ConfirmModalTicket from "@/components/ticket.confirmModal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const dummyTickets: Ticket = {
  id: 1,
  image:
    "https://i.pinimg.com/736x/3e/4e/ef/3e4eef6c5dee91668b870828b9cff1d4.jpg",
  date: "2025-03-10",
  title: "Avengers: Endgame",
  seat: ["A5", "A6", "B5"],
  time: "19:30",
  screen: "Screen 2",
  totalPrice: 1500,
};

const Booking = () => {
  const seatLayout = [8, 10, 12, 12, 12, 12];
  const [type, setType] = useState<string>("3D");
  const [selectedSeats, setSelectedSeats] = useState<
    { row: string; seat: number }[]
  >([]);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const handleConfirm = () => {
    toast.success("Booking successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setSelectedDate(today);
  }, []);

  const datepickerRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (datepickerRef.current) {
      flatpickr(datepickerRef.current, {
        dateFormat: "d-m-Y",
        allowInput: true,
        minDate: "1900-01-01",
        maxDate: "today",
        onReady: () => {
          const style = document.createElement("style");
          style.innerHTML = `
            .flatpickr-day.selected, .flatpickr-day.selected:hover {
              background: #ff0000 !important; 
              color: white !important;
              border-color: #ff0000 !important;
            }
          `;
          document.head.appendChild(style);
        },
      });
    }
  }, []);

  const toggleSeat = (row: string, seatIndex: number) => {
    const seat = { row, seat: seatIndex + 1 };

    setSelectedSeats((prev) => {
      const exists = prev.some(
        (s) => s.row === seat.row && s.seat === seat.seat
      );
      return exists
        ? prev.filter((s) => !(s.row === seat.row && s.seat === seat.seat))
        : [...prev, seat];
    });
  };

  return (
    <div>
      <div className="relative w-full">
        <img
          src="https://i.pinimg.com/736x/3e/4e/ef/3e4eef6c5dee91668b870828b9cff1d4.jpg"
          className="w-full h-full object-cover shadow-lg transition duration-300"
          alt="banner"
        />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute inset-0 bg-black/80">
          <div className="absolute w-4/5 mx-auto inset-0 grid grid-cols-2 justify-center items-center -translate-y-1/4 gap-2">
            <div className="col-span-1 pr-4">
              <h1 className="text-3xl font-bold mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
              <p className="font-semibold">Session start time at 9:40</p>
              <div className="flex gap-2 mt-4">
                <button
                  className={`rounded-md py-2 px-4 ${
                    type === "3D" ? "bg-red-600" : "bg-neutral-200 text-black"
                  }`}
                  onClick={() => setType("3D")}
                >
                  3D
                </button>
                <button
                  className={`rounded-md py-2 px-4 ${
                    type === "2D" ? "bg-red-600" : "bg-neutral-200 text-black"
                  }`}
                  onClick={() => setType("2D")}
                >
                  2D
                </button>
              </div>
            </div>
            <div className="col-span-1 flex flex-col items-end">
              <div className="flex w-1/3 justify-end items-center border-2 bg-black/50 border-gray-800 mb-8 py-2 px-3 rounded-md ml-auto relative">
                <input
                  ref={datepickerRef}
                  type="text"
                  className="pl-2 w-full outline-none border-none bg-transparent text-white placeholder-gray-400 font-semibold"
                  placeholder="Choose a date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-400 absolute right-3 cursor-pointer"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>

              <div className="flex gap-2 items-center justify-end w-full ml-auto flex-wrap">
                {Array.from({ length: 5 }).map((_, index) => (
                  <p
                    key={index}
                    className="p-2 bg-neutral-600 rounded-md hover:bg-neutral-700 hover:-translate-y-1 transition-all duration-500 font-semibold mb-2"
                  >
                    11:40 PM
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute w-4/5 mx-auto left-1/2 top-2/3 transform -translate-x-1/2 -translate-y-1/2 grid grid-cols-12 justify-center items-center bg-neutral-950 rounded-2xl p-4 gap-10">
            <div className="col-span-6 py-4 px-8 ">
              <h1 className="text-2xl font-bold mb-5">Choose a place</h1>
              <div className="overflow-y-auto h-44">
                {selectedSeats.length > 0 ? (
                  selectedSeats.map((s, index) => (
                    <div
                      key={index}
                      className="flex justify-between border-b-2 pb-4 pr-2 border-neutral-700 mb-10"
                    >
                      <div className="flex gap-10  items-end">
                        <h1 className="font-semibold text-neutral-400">Row:</h1>
                        <span className=" text-5xl font-bold">{s.row}</span>
                      </div>
                      <div className="flex gap-10  items-end">
                        <h1 className="font-semibold text-neutral-400">
                          Place:
                        </h1>
                        <span className=" text-5xl font-bold">{s.seat}</span>
                      </div>
                      <div className="flex gap-10  items-end">
                        <h1 className="font-semibold text-neutral-400">
                          Price:
                        </h1>
                        <span className=" text-5xl font-bold">500$</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col justify-center items-center h-44">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="90px"
                      height="90px"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M10.9023 19.8701H17.3723C21.0723 19.8701 21.9923 18.9501 21.9923 15.2501C20.7123 15.2501 19.6823 14.2101 19.6823 12.9401C19.6823 11.6601 20.7123 10.6201 21.9923 10.6201V9.70008C21.9923 6.00008 21.0723 5.08008 17.3723 5.08008H10.9923V11.8701"
                        stroke="#6E717A"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        opacity="0.4"
                        d="M10.9936 16.87V19.87H8.22356C6.74356 19.87 5.87357 18.86 4.91357 16.54L4.73356 16.09C5.94356 15.61 6.53357 14.21 6.02357 13C5.53357 11.79 4.14357 11.21 2.92357 11.71L2.75357 11.28C1.31356 7.76 1.81357 6.53 5.33357 5.08L7.97357 4L10.9936 11.32V13.87"
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.16219 19.8701H7.99219"
                        stroke="#292D32"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p> No Ticket Found</p>
                  </div>
                )}
              </div>

              <h1 className="text-2xl font-bold mb-5">Summary </h1>
              <div className="flex justify-between  pb-4 pr-2 mb-10">
                <div className="flex w-1/2 gap-5  items-end">
                  <h1 className="font-semibold text-neutral-400">Total:</h1>
                  <span className=" text-5xl font-bold">
                    {selectedSeats.length * 500}$
                  </span>
                </div>
                <button
                  onClick={() => setIsOpenModal(true)}
                  disabled={selectedSeats.length === 0}
                  className={`block w-1/2 bg-red-600 mt-5 py-2 rounded-2xl font-semibold mb-2 transition-all duration-500 
  ${
    selectedSeats.length === 0
      ? "cursor-not-allowed opacity-50"
      : "hover:bg-red-800 hover:-translate-y-1"
  }`}
                >
                  Continue
                </button>
              </div>
            </div>
            <div className="col-span-6 py-4 px-8">
              <div className="flex flex-col items-center">
                <div className="text-center  mb-10 py-2 bg-gray-700 rounded-md w-64 mx-auto font-semibold">
                  🎬 SCREEN 🎬
                </div>

                <div className="space-y-4 mb-6">
                  {seatLayout.map((seats, rowIndex) => (
                    <div
                      key={rowIndex}
                      className="flex justify-center space-x-2"
                    >
                      {Array.from({ length: seats }).map((_, seatIndex) => {
                        const isSelected = selectedSeats.some(
                          (s) =>
                            s.row.charCodeAt(0) - 65 === rowIndex &&
                            s.seat === seatIndex + 1
                        );
                        return (
                          <button
                            key={seatIndex}
                            className={`w-6 h-6 rounded-full ${
                              isSelected
                                ? "bg-green-500 text-white"
                                : "bg-gray-500 hover:bg-gray-400 font-semibold items-center text-xs"
                            }`}
                            onClick={() =>
                              toggleSeat(
                                String.fromCharCode(65 + rowIndex),
                                seatIndex
                              )
                            }
                          >
                            {rowIndex === 2 || rowIndex === 3 ? "V" : ""}
                          </button>
                        );
                      })}
                    </div>
                  ))}
                </div>
                <div className="flex justify-center space-x-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-500 w-6 h-6 rounded-full"></div>
                    <span className="font-semibold">Selecting</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-red-500 w-6 h-6 rounded-full"></div>
                    <span className="font-semibold">Selected</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-gray-500 w-6 h-6 rounded-full text-center text-xs font-bold flex justify-center items-center">
                      V
                    </div>
                    <span className="font-semibold">VIP</span>
                  </div>
                </div>
              </div>

              {/* <div className="text-white mt-6">
                <h2 className="text-xl font-bold">Selected Seats:</h2>
                {selectedSeats.length > 0 ? (
                  <p>{selectedSeats.map((s) => `S${s + 1}`).join(", ")}</p>
                ) : (
                  <p>No seat selected</p>
                )}
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <ConfirmModalTicket
        isOpenModal={isOpenModal}
        onClose={handleCloseModal}
        ticket={dummyTickets}
        onConfirm={handleConfirm}
      />
    </div>
  );
};

export default Booking;

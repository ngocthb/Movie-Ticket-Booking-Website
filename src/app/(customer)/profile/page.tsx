"use client";

import { useState, useEffect, useRef } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css";
import "flatpickr/dist/themes/dark.css";

const Profile = () => {
  const datepickerRef = useRef<HTMLInputElement | null>(null);
  const [gender, setGender] = useState<string>("male");

  useEffect(() => {
    if (datepickerRef.current) {
      flatpickr(datepickerRef.current, {
        dateFormat: "d-m-Y",
        allowInput: true,
        minDate: "1900-01-01",
        maxDate: "today",
        onReady: () => {
          // Inject CSS để đổi màu ngày chọn thành đỏ
          const style = document.createElement("style");
          style.innerHTML = `
              .flatpickr-day.selected, .flatpickr-day.selected:hover {
                background: #ff0000 !important; /* Ngày chọn màu đỏ */
                color: white !important;
                border-color: #ff0000 !important;
              }
            `;
          document.head.appendChild(style);
        },
      });
    }
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-[90vh] gap-4">
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-6 p-4 mb-5 rounded-md bg-neutral-900 w-full">
            <div className="flex justify-center md:col-span-2">
              <img
                className="w-24 h-24 md:w-44 md:h-44 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1msDTt.img"
                alt="User Avatar"
              />
            </div>
            <div className="col-span-4 p-4 md:p-8 text-center">
              <h1 className="font-bold text-xl md:text-2xl">Michee Jacksn</h1>
              <h3 className="text-sm md:text-base">Member</h3>
              <h3 className="font-bold text-sm md:text-base mt-4">
                Point : 120 🪙
              </h3>
            </div>
          </div>
        </div>

        {/* Login Information */}
        <div className="bg-neutral-900 w-full p-4 rounded-md">
          <h1 className="font-bold text-xl md:text-2xl mb-2">
            Login Information
          </h1>
          <div className="flex flex-col gap-4 p-3">
            {[
              { label: "Member Card", value: "12345", readOnly: true },
              { label: "User Name", value: "", readOnly: false },
              { label: "Old Password", value: "", readOnly: false },
              { label: "New Password", value: "", readOnly: false },
              { label: "Confirm New Password", value: "", readOnly: false },
            ].map(({ label, value, readOnly }, index) => (
              <div
                className="flex flex-col md:flex-row justify-between items-center gap-2"
                key={index}
              >
                <label className="w-full md:w-2/5">{label}</label>
                <input
                  type="text"
                  defaultValue={value}
                  readOnly={readOnly}
                  placeholder={readOnly ? "" : "Type here"}
                  className={`input input-ghost w-full md:max-w-xs caret-red-500 ${
                    readOnly
                      ? "pointer-events-none bg-neutral-700/50"
                      : "focus:bg-neutral-700"
                  }`}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="w-full md:w-auto bg-red-600 mt-2 px-6 py-2 rounded-2xl hover:bg-red-800 hover:-translate-y-1 transition-all duration-500 font-semibold">
              🔒 Change Password
            </button>
          </div>
        </div>
      </div>

      {/* Cột phải (Thông tin người dùng) */}
      <div className="bg-neutral-900 w-full md:w-1/2 p-4 rounded-md">
        <h1 className="font-bold text-xl md:text-2xl mb-4 md:mb-4">
          User Information
        </h1>
        <div className="flex flex-col gap-6 p-3">
          {[
            { label: "Full Name", value: "" },
            { label: "Birthday", value: "" },
            { label: "Email", value: "" },
            { label: "ID", value: "" },
            { label: "Phone Number", value: "" },
            { label: "Address", value: "" },
          ].map(({ label, value }, index) => (
            <div
              className="flex flex-col md:flex-row justify-between items-center gap-2"
              key={index}
            >
              <label className="w-full md:w-2/5">{label}</label>
              <input
                type="text"
                defaultValue={value}
                placeholder="Type here"
                className="input input-ghost w-full md:max-w-xs focus:bg-neutral-700 caret-red-500"
              />
            </div>
          ))}

          {/* Birthday Field */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <label className="w-full md:w-2/5">Birthday</label>
            <input
              ref={datepickerRef}
              type="text"
              className="input input-ghost w-full md:max-w-xs focus:bg-neutral-700 caret-red-500"
              placeholder="Birthdate"
            />
          </div>

          {/* Gender Selection */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <label className="w-full md:w-2/5">Gender</label>
            <div className="flex gap-8 md:gap-20">
              {["male", "female"].map((type) => (
                <label
                  key={type}
                  className="flex items-center gap-2 cursor-pointer text-base peer-checked:text-red-500"
                >
                  <input
                    type="radio"
                    name="gender"
                    value={type}
                    checked={gender === type}
                    onChange={() => setGender(type)}
                    className="peer hidden"
                  />
                  <span className="w-4 h-4 border-2 border-red-500 rounded-full flex items-center justify-center">
                    {gender === type && (
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    )}
                  </span>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="w-full md:w-auto bg-red-600 px-6 py-2 rounded-2xl hover:bg-red-800 hover:-translate-y-1 transition-all duration-500 font-semibold">
            🔏 Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

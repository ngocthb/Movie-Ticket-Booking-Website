"use client";

import { useState, useEffect, useRef } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css";
import "flatpickr/dist/themes/dark.css";

const SignIn = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
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
    <div className=" w-dvw max-h-[80rem] flex overflow-hidden relative">
      <div
        className="flex w-[200%] transition-transform duration-700 ease-in-out"
        style={{ transform: isSignUp ? "translateX(-50%)" : "translateX(0%)" }}
      >
        <div className="w-dvw h-[74vh] flex">
          <div
            className="hidden lg:flex w-full lg:w-1/2 login_img_section justify-around items-center relative bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://techbit.pt/wp-content/uploads/2021/01/disney-catalogo-filmes-series-star.jpg')",
            }}
          >
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black to-transparent"></div>

            <div className="relative w-full mx-auto px-20 flex-col items-center space-y-6">
              <h1 className="text-white font-bold text-4xl font-sans">
                Endless Entertainment, Anytime, Anywhere!
              </h1>
              <p className="text-white mt-1">
                Binge-watch the latest blockbusters, timeless classics, and
                exclusive originals – all in one place!
              </p>
            </div>
          </div>

          <div className="flex w-full lg:w-1/2 justify-center items-center space-y-8 mt-5">
            <div className="w-full mt-10 px-8 md:px-32 lg:px-24">
              <form className="bg-neutral-950 rounded-md shadow-2xl p-5">
                <h1 className="font-bold text-2xl mb-1">Sign In</h1>
                <p className="text-sm font-normal text-gray-400 mb-8">
                  Welcome Back
                </p>
                <div className="flex items-center border-2 border-gray-800 mb-8 py-2 px-3 rounded-md">
                  <input
                    id="email"
                    className="pl-2 w-full outline-none border-none bg-transparent text-white placeholder-gray-400"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                  />
                </div>
                <div className="flex items-center border-2 border-gray-800 mb-12 py-2 px-3 rounded-md ">
                  <input
                    className="pl-2 w-full outline-none border-none bg-transparent text-white placeholder-gray-400"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <button
                  type="submit"
                  className="block w-full bg-red-600 mt-5 py-2 rounded-2xl hover:bg-red-800 hover:-translate-y-1 transition-all duration-500 font-semibold mb-2"
                >
                  Login
                </button>
                <div className="flex justify-between mt-4">
                  <span className="text-sm ml-2 hover:text-red-800 cursor-pointer hover:-translate-y-1 duration-500 transition-all">
                    Forgot Password?
                  </span>

                  <span
                    onClick={() => setIsSignUp(true)}
                    className="text-sm ml-2 hover:text-red-800 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
                  >
                    Don't have an account yet?
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="w-dvw  flex">
          <div className="flex w-full lg:w-1/2 justify-center items-center space-y-8 mt-5">
            <div className="w-full px-8 mt-20 md:px-32 lg:px-24">
              <form className="bg-neutral-950 rounded-md shadow-2xl p-5">
                <h1 className="font-bold text-2xl mb-1">Sign Up</h1>
                <p className="text-sm font-normal text-gray-400 mb-8">
                  Join With Us
                </p>
                <div className="flex justify-between">
                  <div className="flex items-center border-2 border-gray-800 mb-8 py-2 px-3 rounded-md">
                    <input
                      id="username"
                      className="pl-2 w-full outline-none border-none bg-transparent text-white placeholder-gray-400"
                      type="text"
                      name="username"
                      placeholder="User Name"
                    />
                  </div>
                  <div className="flex items-center border-2 border-gray-800 mb-8 py-2 px-3 rounded-md">
                    <input
                      id="email"
                      className="pl-2 w-full outline-none border-none bg-transparent text-white placeholder-gray-400"
                      type="text"
                      name="email"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center border-2 border-gray-800 mb-8 py-2 px-3 rounded-md ">
                    <input
                      className="pl-2 w-full outline-none border-none bg-transparent text-white placeholder-gray-400"
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="flex items-center  gap-20  mb-8 py-2 px-3 rounded-md">
                    <div className="flex items-center gap-1">
                      <input
                        type="radio"
                        name="radio-2"
                        className="peer hidden"
                        id="radioType1"
                        value="male"
                        checked={gender === "male"}
                        onChange={() => setGender("male")}
                      />
                      <label
                        className="cursor-pointer text-base flex items-center gap-2 peer-checked:text-red-500"
                        htmlFor="radioType1"
                      >
                        <span className="w-4 h-4 border-2 border-red-500 rounded-full flex items-center justify-center">
                          {gender === "male" && (
                            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                          )}
                        </span>
                        Male
                      </label>
                    </div>

                    <div className="flex items-center gap-1">
                      <input
                        type="radio"
                        name="radio-2"
                        className="peer hidden"
                        id="radioType2"
                        value="female"
                        checked={gender === "female"}
                        onChange={() => setGender("female")}
                      />
                      <label
                        className="cursor-pointer text-base flex items-center gap-2 peer-checked:text-red-500"
                        htmlFor="radioType2"
                      >
                        <span className="w-4 h-4 border-2 border-red-500 rounded-full flex items-center justify-center">
                          {gender === "female" && (
                            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                          )}
                        </span>
                        Female
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center border-2 border-gray-800 mb-8 py-2 px-3 rounded-md">
                    <input
                      id="fullname"
                      className="pl-2 w-full outline-none border-none bg-transparent text-white placeholder-gray-400"
                      type="text"
                      name="fullname"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="flex items-center border-2 border-gray-800 mb-8 py-2 px-3 rounded-md">
                    <input
                      id="phone"
                      className="pl-2 w-full outline-none border-none bg-transparent text-white placeholder-gray-400"
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center border-2 border-gray-800 mb-8 py-2 px-3 rounded-md">
                    <input
                      ref={datepickerRef}
                      type="text"
                      className="pl-2 w-full outline-none border-none bg-transparent text-white placeholder-gray-400"
                      placeholder="Birthdate"
                    />
                  </div>
                  <div className="flex items-center border-2 border-gray-800 mb-8 py-2 px-3 rounded-md">
                    <input
                      id="id"
                      className="pl-2 w-full outline-none border-none bg-transparent text-white placeholder-gray-400"
                      type="text"
                      name="id"
                      placeholder="ID Number"
                    />
                  </div>
                </div>
                <div className="flex items-center border-2 border-gray-800 mb-8 py-2 px-3 rounded-md">
                  <input
                    id="address"
                    className="pl-2 w-full outline-none border-none bg-transparent text-white placeholder-gray-400"
                    type="text"
                    name="address"
                    placeholder="Address"
                  />
                </div>

                <button
                  type="submit"
                  className="block w-full bg-red-600 mt-5 py-2 rounded-2xl hover:bg-red-800 hover:-translate-y-1 transition-all duration-500 font-semibold mb-2"
                >
                  Register
                </button>
                <div className="flex justify-between mt-4">
                  <span
                    className="text-sm ml-2 hover:text-red-800 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
                    onClick={() => setIsSignUp(false)}
                  >
                    Already have an account?
                  </span>
                </div>
              </form>
            </div>
          </div>
          <div
            className="hidden lg:flex w-full lg:w-1/2 login_img_section justify-around items-center relative bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://techbit.pt/wp-content/uploads/2021/01/disney-catalogo-filmes-series-star.jpg')",
            }}
          >
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black to-transparent"></div>

            <div className="relative w-full mx-auto px-20 flex-col items-center space-y-6">
              <h1 className="text-white font-bold text-4xl font-sans">
                The Easiest Way to Book Your Next Movie Night!
              </h1>
              <p className="text-white mt-1">
                Never miss a blockbuster! Get instant access to showtimes,
                exclusive deals, and the latest movie releases.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

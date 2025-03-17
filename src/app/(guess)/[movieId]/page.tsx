"use client";

import { useState, useRef } from "react";
import { useRouter, useParams } from "next/navigation";

const MovieDetails = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<number>(today.getDate());
  const router = useRouter();
  const { movieId } = useParams();

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  const dayOfWeek = today.getDay();
  const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  const startOfThisWeek = new Date(today);
  startOfThisWeek.setDate(today.getDate() + mondayOffset);

  const weekDays = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() + index);

    return {
      day: date.toLocaleDateString("en-US", { weekday: "long" }),
      date: date.getDate(),
      month: date.toLocaleDateString("en-US", { month: "short" }),
      isToday: date.toDateString() === today.toDateString(),
    };
  });

  const timeSlots = [
    "02:30 AM",
    "06:00 AM",
    "07:45 AM",
    "08:15 AM",
    "11:30 AM",
    "02:00 PM",
    "03:45 PM",
    "05:00 PM",
    "07:30 PM",
    "09:15 PM",
    "11:45 PM",
  ];

  const categorizeTimes = (times: string[]) => {
    const morning: string[] = [];
    const afternoon: string[] = [];
    const evening: string[] = [];

    times.forEach((time) => {
      const [hour, minute, period] = time.split(/[: ]/);
      let hour24 = parseInt(hour, 10);

      if (period === "PM" && hour24 !== 12) hour24 += 12;
      if (period === "AM" && hour24 === 12) hour24 = 0;

      if (hour24 >= 0 && hour24 < 8) {
        morning.push(time);
      } else if (hour24 >= 8 && hour24 < 16) {
        afternoon.push(time);
      } else {
        evening.push(time);
      }
    });

    return { morning, afternoon, evening };
  };

  const { morning, afternoon, evening } = categorizeTimes(timeSlots);

  return (
    <>
      <div className="relative w-full h-screen">
        <video
          ref={videoRef}
          className="w-full h-full object-cover shadow-lg transition duration-300"
          onEnded={handleEnded}
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
        </video>

        {!isPlaying && <div className="absolute inset-0 bg-black/60"></div>}

        {!isPlaying && (
          <div className="absolute w-2/5 bottom-20 left-20  text-3xl font-bold uppercase">
            Movie Name: The Great Adventure of Life 2024 - IMDB 7.8 Lorem ipsum
            dolor sit, amet consectetur adipisicing elit
          </div>
        )}

        <button
          className="absolute inset-0 flex justify-center items-center"
          onClick={togglePlay}
        >
          {!isPlaying && (
            <div className="w-24 h-24 bg-black/50 rounded-full flex justify-center items-center hover:bg-black/70 transition duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="white"
                className="ml-1"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          )}
        </button>
      </div>

      <div className="flex relative w-4/5 justify-center mx-auto mt-10">
        <div className="grid grid-cols-12 gap-4 w-full">
          <div className="col-span-3 p-2">
            <h1 className="text-xl font-bold uppercase mb-5">
              Lorem ipsum dolor sit amet consectetur
            </h1>
            <p className="text-neutral-500">Action / Dramatic</p>
            <img
              src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA12rZ8k.img"
              alt="banner"
              className="w-full h-96 object-cover mt-5 rounded-md"
            />
            <button
              type="submit"
              className="block w-full bg-red-600 mt-5 py-4 rounded-2xl hover:bg-red-800 hover:-translate-y-1 transition-all duration-500 font-semibold mb-2"
              onClick={() => router.push(`/${movieId}/booking`)}
            >
              Booking Now
            </button>
          </div>
          <div className="col-span-9 p-2">
            <h1 className="text-right text-xl font-bold uppercase mb-14">
              IMDB 7.8
            </h1>
            <div className="flex">
              {weekDays.map((day, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedDate(day.date)} // Xử lý sự kiện click
                  className={`flex flex-col w-1/7 gap-2 items-center p-3 cursor-pointer
                    ${
                      selectedDate === day.date
                        ? ""
                        : "border-b-2 hover:bg-red-700 rounded-t-md"
                    }
                  `}
                >
                  {selectedDate === day.date ? (
                    <div>🔴</div>
                  ) : (
                    <div className="text-black"> . </div>
                  )}
                  <p className="text-neutral-500">{day.day}</p>
                  <h1 className="font-bold text-6xl">{day.date}</h1>
                  <p className="text-neutral-500">{day.month}</p>
                </div>
              ))}
            </div>

            <div>
              <div className="gap-5">
                <div>
                  <h3 className="text-sm mt-2 font-semibold text-neutral-500">
                    0:00 AM - 8:00 AM
                  </h3>
                  <div className="flex gap-2 flex-wrap border-b-2 border-neutral-800 p-4">
                    {morning.map((time, index) => (
                      <p
                        key={index}
                        className="p-2 bg-neutral-600 rounded-md hover:bg-neutral-700 hover:-translate-y-1 transition-all duration-500 font-semibold mb-2 cursor-pointer"
                      >
                        {time}
                      </p>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm mt-2 font-semibold text-neutral-500">
                    8:00 AM - 4:00 PM
                  </h3>
                  <div className="flex gap-2 flex-wrap border-b-2 border-neutral-800 p-4">
                    {afternoon.map((time, index) => (
                      <p
                        key={index}
                        className="p-2 bg-neutral-600 rounded-md hover:bg-neutral-700 hover:-translate-y-1 transition-all duration-500 font-semibold mb-2 cursor-pointer"
                      >
                        {time}
                      </p>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm mt-2 font-semibold text-neutral-500">
                    4:00 PM - 12:00 AM
                  </h3>
                  <div className="flex gap-2 flex-wrap border-b-2 border-neutral-800 p-4">
                    {evening.map((time, index) => (
                      <p
                        key={index}
                        className="p-2 bg-neutral-600 rounded-md hover:bg-neutral-700 hover:-translate-y-1 transition-all duration-500 font-semibold mb-2 cursor-pointer"
                      >
                        {time}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-4/5 mx-auto mt-20">
        <div className="flex-1 flex flex-col">
          <h1 className="text-left pb-4 text-xl font-bold uppercase mb-5 border-b-2 border-red-500">
            Details
          </h1>
          <div className="flex justify-between gap-2 pr pb-2 w-4/5 border-b-2 border-neutral-700 mb-5">
            <label className="w-2/5 text-sm text-neutral-300">
              RELEASE DATE
            </label>
            <p className="font-semibold text-sm uppercase"> 14 JAN 2024 </p>
          </div>
          <div className="flex justify-between gap-2 pr pb-2 w-4/5 border-b-2 border-neutral-700 mb-5">
            <label className="w-2/5 text-sm text-neutral-300">DURATION</label>
            <p className="font-semibold text-sm uppercase"> 125 MINUTES </p>
          </div>
          <div className="flex justify-between gap-2 pr pb-2 w-4/5 border-b-2 border-neutral-700 mb-5">
            <label className="w-2/5 text-sm text-neutral-300">DIRECTOR</label>
            <p className="font-semibold text-sm uppercase"> NGOC THB </p>
          </div>
          <div className="flex justify-between gap-2 pr pb-2 w-4/5 border-b-2 border-neutral-700 mb-5">
            <label className="w-2/5 text-sm text-neutral-300">STUDIO</label>
            <p className="font-semibold text-sm uppercase"> DISNEY</p>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <h1 className="text-left pb-4  text-xl font-bold uppercase mb-5 border-b-2 border-red-500">
            STORYLINES
          </h1>
          <p className="mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit ex
            maiores illum dignissimos debitis? Laudantium cumque officiis
            deleniti praesentium deserunt sunt sint itaque aliquid libero.
            Temporibus dolores similique aliquam beatae! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Et quos repudiandae atque maiores
            suscipit neque doloremque maxime eveniet quaerat totam, ut,
            blanditiis beatae provident! Quia repellat at mollitia amet cumque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            dignissimos odit corrupti recusandae officiis, unde numquam non
            neque sunt deserunt expedita, eos sit nisi aut voluptatem ex qui
            dolor iure! Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Nisi illum delectus quis provident eligendi minus in dolore
            dicta autem dolor cum voluptatem quas similique magnam, molestias
            ducimus consequatur debitis obcaecati.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 w-4/5 mx-auto mt-20 mb-10">
        <div className="col-span-1 flex flex-col">
          <h1 className="text-left text-xl pb-4  font-bold uppercase mb-5 border-b-2 border-red-500">
            Casts
          </h1>
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <div className="flex items-center gap-10 mt-5 " key={index}>
                <img
                  src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1msOOU.img"
                  alt="actor"
                  className="w-16 h-16 object-cover rounded-full"
                />
                <p className="text-start uppercase  text-sm text-neutral-300">
                  Lorem ipsum dolor Lorem ipsum dolor
                </p>
              </div>
            ))}
        </div>
        <div className="col-span-2 flex flex-col">
          <h1 className="text-left text-xl font-bold uppercase  pb-4 mb-5 border-b-2 border-red-500">
            Photo gallery
          </h1>
          <div className="carousel w-full mx-auto my-auto rounded-md">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1msOOU.img"
                className="w-full object-cover"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                className="w-full object-cover"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                className="w-full object-cover"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                className="w-full object-cover"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;

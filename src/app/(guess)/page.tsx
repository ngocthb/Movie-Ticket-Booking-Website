"use client";

import Banner from "@/components/app.banner";
import Carousel from "@/components/app.carousel";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  return (
    <div>
      <Banner />
      <div className="p-4">
        <h1 className="text-xl font-bold uppercase p-4">Hot Topic</h1>
        <Carousel />
        <h1 className="text-xl font-bold uppercase p-4">Voucher</h1>

        <div className="flex flex-wrap justify-start">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 lg:w-1/3 p-4 cursor-pointer group"
              onClick={() => router.push(`/voucher/${index}`)}
            >
              <div className="flex items-center bg-red-700 rounded-md overflow-hidden relative">
                <div className="w-20 sm:w-24 flex justify-center items-center ">
                  <p className="-rotate-90 text-white font-bold text-sm tracking-wider">
                    DISCOUNT
                  </p>
                </div>

                <div className="flex-1 relative overflow-hidden">
                  <img
                    src="https://i.pinimg.com/736x/f6/02/47/f60247c291ea413cd17783484c8ea9c3.jpg"
                    alt="voucher"
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                  />

                  <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h2 className="text-2xl font-bold pb-4">Discount 30%</h2>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Similique soluta voluptatem cupiditate aliquid
                      reprehenderit culpa quisquam dolor commodi, repellendus
                      sunt, blanditiis officiis nam fuga ratione accusantium
                      inventore pariatur neque fugit.
                    </p>
                    <p className="text-md mt-2">Date: 15/03/2025 </p>
                    <p className="text-md mt-2">EXP: 15/05/2025 </p>
                  </div>
                </div>

                <div className="absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 w-12 h-12 bg-black rounded-full z-10"></div>
                <div className="absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 w-12 h-12 bg-black rounded-full z-10"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

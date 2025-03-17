"use client";
import { useState, useEffect } from "react";
import ViewDetails from "./view.modal";
import { Movie } from "../types/movie";

export default function Carousel() {
  const movies: Movie[] = [
    {
      id: 1,
      image:
        "https://i.pinimg.com/736x/78/6b/c1/786bc14e84f97529621bdc083709f0f9.jpg",
      title: "Inception",
      description:
        "Một bộ phim về giấc mơ và thực tại, nơi những tên trộm xâm nhập vào tiềm thức của người khác.",
      tag: ["Sci-Fi", "Action", "Thriller"],
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/736x/f0/92/42/f092423b13b780ff1f5c1739045db610.jpg",
      title: "Avatar",
      description:
        "Hành trình khám phá hành tinh Pandora và cuộc chiến bảo vệ nền văn hóa bản địa.",
      tag: ["Sci-Fi", "Adventure", "Fantasy"],
    },
    {
      id: 3,
      image:
        "https://i.pinimg.com/736x/b3/fd/3f/b3fd3f402e2cf64fc8e6c4d35042cc90.jpg",
      title: "Jurassic Park",
      description:
        "Công viên khủng long trở thành một cơn ác mộng khi mọi thứ vượt khỏi tầm kiểm soát.",
      tag: ["Adventure", "Sci-Fi", "Thriller"],
    },
    {
      id: 4,
      image:
        "https://i.pinimg.com/736x/90/d6/16/90d616365c29d7cad0949d26ee585060.jpg",
      title: "Pulp Fiction",
      description:
        "Một câu chuyện đan xen giữa các tên cướp, sát thủ và những kẻ ngoài vòng pháp luật.",
      tag: ["Crime", "Drama", "Dark Comedy"],
    },
    {
      id: 5,
      image:
        "https://i.pinimg.com/736x/47/a0/e9/47a0e998904f3d084b1d0bee60c7e7d9.jpg",
      title: "The Lord of the Rings",
      description:
        "Một cuộc hành trình vĩ đại để tiêu diệt chiếc nhẫn quyền năng và đánh bại Sauron.",
      tag: ["Fantasy", "Adventure", "Action"],
    },
    {
      id: 6,
      image:
        "https://i.pinimg.com/736x/cb/28/2c/cb282c35fc6d6c630f8f98dcc4e1728a.jpg",
      title: "The Lord of the Rings",
      description:
        "Một cuộc hành trình vĩ đại để tiêu diệt chiếc nhẫn quyền năng và đánh bại Sauron.",
      tag: ["Fantasy", "Adventure", "Action"],
    },
    {
      id: 7,
      image:
        "https://i.pinimg.com/736x/80/98/e2/8098e266edb70f8c6e8d9f603e67aa59.jpg",
      title: "The Lord of the Rings",
      description:
        "Một cuộc hành trình vĩ đại để tiêu diệt chiếc nhẫn quyền năng và đánh bại Sauron.",
      tag: ["Fantasy", "Adventure", "Action"],
    },
    {
      id: 8,
      image:
        "https://i.pinimg.com/736x/fe/4f/91/fe4f919b8d4207e147cfc2b2e6d3f45f.jpg",
      title: "The Lord of the Rings",
      description:
        "Một cuộc hành trình vĩ đại để tiêu diệt chiếc nhẫn quyền năng và đánh bại Sauron.",
      tag: ["Fantasy", "Adventure", "Action"],
    },
  ];
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [slidesPerPage, setSlidesPerPage] = useState(5);
  const totalPages = Math.ceil(movies.length - slidesPerPage + 1);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const updateSlidesPerPage = () => {
      if (window.innerWidth < 640) {
        setSlidesPerPage(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerPage(3);
      } else {
        setSlidesPerPage(4);
      }
    };

    updateSlidesPerPage();
    window.addEventListener("resize", updateSlidesPerPage);
    return () => window.removeEventListener("resize", updateSlidesPerPage);
  }, []);

  const nextSlide = () => {
    setCurrentPage((prev) => (prev + 1 < totalPages ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentPage((prev) => (prev - 1 >= 0 ? prev - 1 : totalPages - 1));
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      {" "}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex flex-nowrap gap-3 transition-transform duration-500 ease-in-out p-2"
          style={{
            transform: `translateX(-${currentPage * (100 / slidesPerPage)}%)`,
          }}
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div key={pageIndex} className="flex min-w-full gap-3 ">
              {movies
                .slice(
                  pageIndex * slidesPerPage,
                  (pageIndex + 1) * slidesPerPage
                )
                .map((item) => (
                  <div
                    onClick={() => {
                      setSelectedMovie(item);
                      setIsOpenModal(true);
                    }}
                    key={item.id}
                    className="w-[calc(100%)] sm:w-[calc(100%_/_3)] lg:w-[calc(100%_/_4)] flex items-center justify-center  text-white text-2xl  sm:text-4xl hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt="slide "
                      className="rounded-md  aspect-[4/3] object-cover w-full"
                    />
                  </div>
                ))}
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          ❮
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          ❯
        </button>

        {/* <div className="absolute bottom-3 flex justify-center w-full space-x-2">
    {Array.from({ length: totalPages }).map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentPage(index)}
        className={`h-3 w-3 rounded-full ${
          index === currentPage ? "bg-white" : "bg-gray-500"
        }`}
      ></button>
    ))}
  </div> */}
      </div>
      <ViewDetails
        isOpenModal={isOpenModal}
        onClose={handleCloseModal}
        movie={selectedMovie}
      />
    </>
  );
}

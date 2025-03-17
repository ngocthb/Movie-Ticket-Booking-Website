import React from "react";
import { useRouter } from "next/navigation";
import { Movie } from "../types/movie";

interface ViewDetailsProps {
  isOpenModal: boolean;
  onClose: () => void;
  movie: Movie | null;
}

const ViewDetails: React.FC<ViewDetailsProps> = ({
  isOpenModal,
  onClose,
  movie,
}) => {
  if (!isOpenModal || !movie) return null;
  const router = useRouter();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 ">
      <div className="bg-neutral-950 rounded-lg shadow-lg max-w-xl w-full relative border-2 border-gray-800">
        <button
          onClick={onClose}
          className="absolute py-2 px-4 rounded-full bg-transparent z-10 text-3xl top-3 right-3 text-gray-200  hover:bg-gray-50/10"
        >
          ✖
        </button>
        <div className="relative">
          <img src={movie.image} alt="movie" className="w-full rounded-t-md" />

          <div className="absolute inset-x-0 bottom-0 -1/2 h-1/3 bg-gradient-to-t from-black/100 to-transparent rounded-t-md"></div>
        </div>

        <h1 className="text-xl font-bold uppercase flex-wrap px-6 pt-4  line-clamp-2">
          {movie.title}
        </h1>

        <div className="flex flex-wrap space-x-2 px-6 py-4 pt-2 max-h-[4rem] overflow-hidden">
          {movie.tag.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="bg-gray-50 text-black px-2 py-1 rounded-md hover:bg-gray-400 "
            >
              {tag}
            </span>
          ))}

          {movie.tag.length > 5 && (
            <span className="bg-gray-400 text-black px-2 py-1 rounded-md">
              +{movie.tag.length - 6} more...
            </span>
          )}
        </div>

        <p className="text-gray-300 px-6 mt-2 line-clamp-5">
          {movie.description}
        </p>

        <div className="flex justify-start px-6 pb-6  mt-4 space-x-3">
          <button
            className="px-4 py-2 bg-red-700 text-white rounded-md hover:bg-red-900"
            onClick={() => router.push(`/${movie.id}`)}
          >
            See More ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;

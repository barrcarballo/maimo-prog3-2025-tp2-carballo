'use client';
import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "@/app/context/AppContext";

const MovieCard = ({ name, image, id }) => {
  const {handleAddToFavorites} = useAppContext();

  return (
    <Link href={`/movie/${id}`} className="block">
      <div className="bg-rose-200 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col cursor-pointer">
        <div className="relative w-auto h-96">
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain"
          />
        </div>

        <div className="p-4 flex flex-col flex-grow justify-between">
          <h3 className="text-lg font-semibold mb-3 ">{name}</h3>
        </div>
        <button
        onClick={() =>handleAddToFavorites(movie.title, movie.poster_path, movie.id)}
        >
          Add to favorites
        </button>
      </div>
    </Link>
  );
};

export default MovieCard;




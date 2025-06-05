'use client';
import Image from "next/image";
import Link from "next/link";

const MovieCard = ({ name, image, id }) => {
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
          <h3 className="text-lg font-semibold mb-2">{name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;




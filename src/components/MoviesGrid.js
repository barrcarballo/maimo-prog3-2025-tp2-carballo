import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "@/app/context/AppContext";

const MoviesGrid = ({ movies, imageBase }) => {
  const { favorites, handleAddToFavorites } = useAppContext(); // Get favorites and handleAddToFavorites

  // Heart icon for the cards - now handles click and filled state based on context
  const HeartIconFill = ({ filled, onClick }) => (
    <svg onClick={onClick} className={`w-6 h-6 absolute top-2 right-2 cursor-pointer ${filled ? 'text-red-500' : 'text-white/70 hover:text-red-400'}`} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
  );

  // Dummy Link and Image components for standalone React context
  const Link = ({ children, href, className }) => (
    <a href={href} className={className}>
      {children}
    </a>
  );

  const Image = ({ src, alt, fill, className }) => (
    <img src={src} alt={alt} className={className} style={{ width: fill ? '100%' : 'auto', height: fill ? '100%' : 'auto', objectFit: 'cover' }} />
  );

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {movies.map((movie) => {
        const isFavorited = favorites.some(fav => fav.id === movie.id);
        return (
          <Link
            key={movie.id}
            href={`/movie/${movie.id}`} // Corrected to use href for next/link
            className="relative bg-slate-800 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 text-left shadow-lg"
          >
            <div className="relative w-full h-48">
              <Image
                src={`${imageBase}${movie.poster_path}`}
                alt={movie.title}
                fill
                className="object-cover"
              />
              <HeartIconFill
                filled={isFavorited}
                onClick={(e) => {
                  e.preventDefault(); // Prevent navigation when clicking the heart
                  e.stopPropagation(); // Stop event from bubbling to the parent link
                  handleAddToFavorites(movie.title, `${imageBase}${movie.poster_path}`, movie.id);
                }}
              />
            </div>
            <div className="p-3">
              <h4 className="text-sm font-semibold text-white truncate">{movie.title}</h4>
              <p className="text-xs text-slate-400">
                {movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default MoviesGrid;

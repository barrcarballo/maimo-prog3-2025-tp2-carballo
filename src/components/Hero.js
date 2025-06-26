import React, { useState } from "react";
import Image from "next/image";
import MoviesGrid from "./MoviesGrid";

const Hero = ({ movies }) => {
  const [featuredMovie, setFeaturedMovie] = useState(movies[0]);
  const IMAGE_BASE = `https://image.tmdb.org/t/p/original/`;

  // Image and Link components
  const Image = ({ src, alt, fill, className }) => (
    <img src={src} alt={alt} className={className} style={{ width: fill ? '100%' : 'auto', height: fill ? '100%' : 'auto', objectFit: 'cover' }} />
  );
  const Link = ({ children, href, className }) => (
    <a href={href} className={className}>
      {children}
    </a>
  );

  const handleMovieClick = (moviePosition) => {
    setFeaturedMovie(movies[moviePosition]);
  };

  // icons
  const SearchIcon = () => (
    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
  );
  const BellIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
  );
  const UserCircleIcon = () => (
    <svg className="w-8 h-8 rounded-full bg-slate-700 p-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
  );


  return (
    <section className="ml-64 w-[calc(100%-16rem)] min-h-screen bg-gradient-to-r from-slate-800 to-slate-900 text-white p-8">
      {/* Header Section */}
      <header className="flex justify-between items-center mb-8">
        <div className="relative w-96">
          <input
            type="text"
            placeholder="Search for movies, series, etc..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <SearchIcon />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <BellIcon className="w-6 h-6 text-slate-300 cursor-pointer hover:text-amber-400 transition-colors" />
          <UserCircleIcon />
        </div>
      </header>

      {/* Featured Movie */}
      <div className="relative w-full h-[400px] overflow-hidden rounded-xl shadow-lg mb-8">
        <Image
          src={`${IMAGE_BASE}${featuredMovie.backdrop_path}`}
          alt={featuredMovie.title}
          fill
          className="object-cover rounded-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col justify-end p-8 rounded-xl">
          <p className="text-sm text-slate-300 mb-1">Adventure</p> 
          <h2 className="text-4xl font-bold mb-2">{featuredMovie.title}</h2>
          <p className="max-w-xl text-sm text-slate-200">{featuredMovie.overview}</p>
        </div>
      </div>

      {/* Movies Section */}
      <div className="p-0"> 
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-semibold">Movies</h3>
        </div>
        <MoviesGrid
          movies={movies}
          imageBase={IMAGE_BASE}
        />
      </div>
    </section>
  );
};

export default Hero;

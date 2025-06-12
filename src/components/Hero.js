import React from "react";
import { useState } from "react";
import Image from 'next/image';

const Hero = ({ movies }) => {
  const [featuredMovie, setFeaturedMovie] = useState(movies[0]);
  const IMAGE_BASE = `https://image.tmdb.org/t/p/original/`;

  const handleMovieClick = () => {
    console.log("click click");
  }; // evento -> siempre se llaman handle

  return (
    <section
      style={{
        backgroundImage: `url(${IMAGE_BASE}${featuredMovie.backdrop_path})`,
      }}
      className={`w-full min-h-[600px] bg-cover bg-no-repeat bg-center`}
    >
      <div className="text-amber-50 h-full min-h-[600px] flex flex-col justify-center items-start px-[50px] bg-black/60">
         <div className="content">
        <h2 className=" text-5xl mb-6">{featuredMovie.title}</h2>
        <p className="max-w-[500px] ">{featuredMovie.overview}</p>
        <div/>

        <div className=" movies w-full flex flex-wrap justify-start items-center gap-2">
          {movies.slice(0, 5).map((movie) => {
            //const firstMovies = movies.slice(0,5);
            return (<div key={movie.id} className="">
               <div className="bg-green-600 p-3" onClick={handleMovieClick}>
              </div>
               <Image className= "bg-amber-50 p-2"src={`${IMAGE_BASE}${movie.poster_path}`} width={200} height={200} alt={movie.title}/>
               <h3>{movie.title}</h3>
            </div>)
})};
        </div>
      </div>
      </div>
     
    </section>
  );
};

export default Hero;
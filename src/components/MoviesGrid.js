'use client'

import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import axios from 'axios';

const MoviesGrid = () => {
  const [data1, setData1] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=8d155a452063365b70d7e38e2609b662`);
        const responseData = response.data.results;
        setData1(responseData);
        setLoading(false);
      } catch (error) {
        console.log('mi error fue', error);
        setError(true);
      }
    };

    getData();
  }, []);

  return (
    <div className="px-6 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Trending Movies</h2>

      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-600">Hubo un error cargando los datos.</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data1.map((movie) => (
            <MovieCard
              key={movie.id}
              name={movie.title}
              image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              id={movie.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MoviesGrid;

'use client'
import axios from "axios"
import {useState,useEffect } from "react"
//import MoviesGrid from "./MoviesGrid"
import Hero from "./Hero"


const HomeContainer = () => {
  
  const API_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=5d9c2af1944cf22642d69124e01aa3d8`;

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      // hace el fetch
      try {
        const response = await axios.get(API_URL);
        const moviesData = response.data.results;
        setMovies(moviesData);
        setLoading(false);
      } catch (error) {
        console.log('mi error fue', error);
        setError(true);
      }
    };

    getMovies();
  }, []);

  return (
   <>
   {!loading && <Hero movies={movies}/>}
   {loading && "Loading..."}
   </>
  )
}

export default HomeContainer

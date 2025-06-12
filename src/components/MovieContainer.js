"use client";

import { useState, useEffect } from "react"; // son hooks de react
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
//import Loading from "./Loading";

const MovieContainer = ({ id }) => {
  const [data1, setData1] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=5d9c2af1944cf22642d69124e01aa3d8`);
        const responseData = response.data;
        setData1(responseData);
        setLoading(false);
      } catch (error) {
        console.log("mi error fue", error);
        setError(true);
      }
    };

    getData();
  }, []);

  return (
  <div>
    {loading && "Loading..."}
    {error && "hubo un error"}
    {!loading && data1 && (
      <div className="m-auto">
      <h1>{data1.title}</h1>
      <p>{data1.overview}</p>
      <Image src={`https://image.tmdb.org/t/p/w500${data1.poster_path}`} alt={data1.title} width={"300"} height={"100"}/>
      <Link 
  href="/" 
  className="inline-block mt-4 px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition"
>
  Back
</Link>
    </div>
    )}
  </div>
);
};

export default MovieContainer;
"use client";

import MovieContainer from "@/app/components/MovieContainer";

export default function MoviePage({ params }) {
  const { id } = params;

  return (
    <main className="min-h-screen p-8 text-white">
      <MovieContainer id={id} />
    </main>
  );
}

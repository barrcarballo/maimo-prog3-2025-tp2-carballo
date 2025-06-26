'use client';
import { useAppContext } from "@/app/context/AppContext";

const Navbar = () => {
  const { favoritesQty } = useAppContext(); // Get favoritesQty from context

  // Home icon
  const HomeIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2 2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
  );
  // Film icon (for Movies)
  const FilmIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h18M3 16h18M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path></svg>
  );
  // Heart icon (for Favorites)
  const HeartIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
  );

  return (
    <aside className="w-64 h-screen fixed top-0 left-0 flex flex-col p-6 bg-slate-900/80 backdrop-blur-md border-r border-slate-700 text-white z-50">
      <h1 className="text-2xl font-bold mb-10 text-amber-400">GII</h1>
      <nav className="flex flex-col gap-2 flex-1">
        <button className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors">
          <HomeIcon /> Home
        </button>
        <button className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors">
          <FilmIcon /> Movies
        </button>
        <button className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors">
          <HeartIcon /> Favourites ({favoritesQty()}) {/* Updated to use favoritesQty() */}
        </button>
      </nav>
    </aside>
  );
};

export default Navbar;

'use client'
import React from "react";
import { useState, useEffect, useContext, createContext } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const handleAddToFavorites = (title, image, id) => {
    // Check if the movie is already in favorites to prevent duplicates
    if (!favorites.some(fav => fav.id === id)) {
      setFavorites(prevFavorites => [...prevFavorites, { title, image, id }]);
      console.log(`Added to favorites: ${title}`);
    } else {
      // Optional: Remove from favorites if already present
      setFavorites(prevFavorites => prevFavorites.filter(fav => fav.id !== id));
      console.log(`Removed from favorites: ${title}`);
    }
  };

  useEffect(() => {
    console.log("Current Favorites:", favorites);
  }, [favorites]);

  const favoritesQty = () => favorites.length;

  return (
    <AppContext.Provider
      value={{
        favorites,
        handleAddToFavorites,
        favoritesQty
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext: must be used within a AppContextProvider");
  }
  return context;
};
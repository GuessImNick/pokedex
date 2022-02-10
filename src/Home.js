import React, { useEffect, useState } from "react";
import { API_CALLS } from "./API";
import { Header } from "./Components/header/Header";
import { PokemonList } from "./Components/pokemon/PokemonList";

export const Home = () => {
  const [pokemon, setPokemon] = useState({
    count: 0,
    next: "",
    previous: "",
    results: []
  });

  const getPokemon = async () => {
    return API_CALLS.fetchPokemon(setPokemon);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div>
      <Header />
      <PokemonList pokeData={pokemon} />
    </div>
  );
};

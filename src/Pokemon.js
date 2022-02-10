import React, { useEffect, useState } from 'react';
import { Header } from './Components/header/Header.js'
import { useParams } from 'react-router-dom';
import { API_CALLS } from './API.js';
import PokemonDetails from './Components/pokemon/PokemonDetails.js';

const Pokemon = () => {
  const [poke, setPoke] = useState({
    id: 0,
    name: '',
    sprites: [],
    types: [],
    stats: []
  })
  const { pokeId } = useParams()

  const getPoke = async () => {
    return API_CALLS.fetchPoke(setPoke, pokeId)

  }

  useEffect(() => {
    getPoke()
  }, [pokeId])

  return(
      <>
          <Header />
          <PokemonDetails data={poke} />
      </>
  );
};

export default Pokemon;

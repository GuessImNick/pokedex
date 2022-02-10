import React, { useRef } from "react";
import './PokemonList.css'
import { Link,  } from 'react-router-dom'

export const PokemonList = ({ pokeData }) => {

let i = 1

  return (
    <div className="poke-container">
      <ul className="poke-list">
        {pokeData.results.map((d) => {
          return <Link key={d.name} to={`/${i}`}>
          <li className="poke-list-item"><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`} alt="" className="poke-img" /><p className="poke-name">{d.name.toUpperCase()} {i++}</p></li>
          </Link>
        })}
      </ul>
    </div>
  );
};

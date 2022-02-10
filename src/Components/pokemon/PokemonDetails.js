import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./PokemonDetails.css";

const PokemonDetails = ({ data }) => {
  return (
    <div className="body">
      <div className="poke-card" key={data.id}>
        <div className="name-photo">
          <img src={data.sprites.front_default} className="poke-photo" />
          <h2 className="poke-name">{data.name.toUpperCase()}</h2>
        </div>
        <div className="poke-types">
          {data.types.map((type) => {
            return (
              <div className={`${type.type.name} type`} key={type.type.name}>
                {type.type.name.toUpperCase()}
              </div>
            );
          })}
        </div>
        <div className="stats">
          {data.stats.map((stat) => {
            return(
              <div key={stat.stat.name} className="stat-container">
                <p className="stat-name">{stat.stat.name.toUpperCase()}</p>
                <div className="stat-stat">{stat.base_stat}</div>
              </div>
            )
          })
          }
        </div>
        <div className="nav-div">
          <div className="nav">
            <div className="poke-last">
              <Link to={`/${data.id === 1 ? 151 : data.id - 1}`}>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    data.id === 1 ? 151 : data.id - 1
                  }.png`}
                  className="poke-nav"
                />
              </Link>
            </div>
            <div className="poke-next poke-nav">
              <Link to={`/${data.id === 151 ? 1 : data.id + 1}`}>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    data.id === 151 ? 1 : data.id + 1
                  }.png`}
                  className="poke-nav"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;

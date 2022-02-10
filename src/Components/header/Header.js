import React from "react";
import Logo from "../../images/pokeLogo.png";
import "./Header.css";
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className="header-container">
    <Link to="/" className='header-link'>
      <img src={Logo} className="header-img" />
      
      <h1 className="header-name">Kanto Pokedex</h1>
      </Link>
    </div>
  );
};

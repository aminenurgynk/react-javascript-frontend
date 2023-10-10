/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";

import Card from "../../components/Card";

import { getCharacters } from "../../services";

import "./index.scss";

const Chars = () => {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    getCharacters().then((response) => {
      console.log(response);
      setChars(response);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="main">
      <header className="head">
      
      <nav className="head-nav">
      <a className="head-nav-icon" href="/">
      <img src="https://logowik.com/content/uploads/images/cute-cat-clipart712.logowik.com.webp" width="40" height="40"></img>
      </a> 

      <ul className="head-nav-list">
        <li><a href="https://rickandmortyapi.com">Docs</a></li>
        <li><a href="https://rickandmortyapi.com">About</a></li>
        <li><a href="https://rickandmortyapi.com">Support Us</a></li>
      </ul>

       </nav>
      
      </header>

      <div className="chars">

      <section className="chars-section1">
      <h1 className="chars-section1-title">The Rick and Morty API</h1>
      </section>
        {chars.map((char) => (
          <Card {...char} />
        ))}
      </div>
      <footer className="foot">Bu bir foot</footer>
    </div>
  );
};

export default Chars;

import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import './index.css';
import './styles/nav.css';


function Navbar() {
    return (
      <header class="header">
      <h1 class="logo"><a href="#"> EXAM </a></h1>
      <nav>
        <ul className="main-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          
          <li>
            <Link to="/Reducer"> Use Reducer </Link>
          </li>
          <li>
            <Link to="/seo"> SEO </Link>
          </li>
          <li>
            <Link to="/boundary"> Error Boundary </Link>
          </li>
        </ul>
      </nav>
      </header>
    );
  }


export default Navbar;

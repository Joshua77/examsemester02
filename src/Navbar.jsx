import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import './index.css';


function Navbar() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          
          <li>
            <Link to="/Reducer"> Use Reducer </Link>
          </li>
          <li>
            <Link to="/Reducer"> Use Reducer </Link>
          </li>
        </ul>
      </nav>
    );
  }


export default Navbar;


//<li>
//<Link to="/Errorpage">Error Page</Link>
//</li>
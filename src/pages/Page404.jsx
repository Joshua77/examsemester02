import React from "react";
import { Link } from "react-router-dom";
// Check the import folder structure for the CSS files properly
import "../App.css";
import "../styles/404page.css"

export default function NotFound(){
    return(
        <div className="not-found">
            <h1> 404 </h1>
            <p>We can't find the page you're looking for! </p>
            <p> Go back to Home Page </p>
            <Link to='/'> Home Page </Link>
        </div>
        
    );
}
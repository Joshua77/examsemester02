import React from "react";
// Check the import folder structure for the CSS files properly
import "./App.css"; 
import "./styles/404page.css";

export default function NotFound(){
    return(
        <div className="not-found">
            <h3> Oops Page not Found! </h3>
            <h1> 404 </h1>
            <p>We can't find the page you're looking for! </p>
            <p> Go back to Home Page </p>
            <a href="#"> Home Page </a>
            ADD LINK OR ROUTE TO HOME PAGE HERE, USE THE SAME CSS AS THAT OF THE NAVIGATION CSS CLASS HERE
        </div>
        
    );
}
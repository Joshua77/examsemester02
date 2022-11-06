import React from "react";
import '../App.css';
import { ErrorBoundary } from "react-error-boundary";
import { ClickCounter } from "./clickcounter";
import { Fallback } from "./Fallback.jsx";


//check the classname APP here
export default function Error(){
    const errorHandler = (error, errorInfo) =>{
        console.log(error, errorInfo)
    return(
        <div className="App">
            <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
                <ClickCounter />
            </ErrorBoundary>
        </div>
    )
    }

}
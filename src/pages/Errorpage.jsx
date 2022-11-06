import React from "react";
import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useErrorHandler } from "react-error-boundary";
//import { ErrorPage } from './Errorpage'
//import { ClickCounter } from "./clickcounter";
import { Fallback } from "./Fallback.jsx";


const MAX_COUNT_ALLOWED = 4

export const ClickCounter = ()=> {
    const [count, setCount] = useState(0)
    const handleError = useErrorHandler()

    const handleClick = ()=>{
        try{
            if(count=== MAX_COUNT_ALLOWED){
                throw new Error('Count Limit Exceeded')
            }
            else {setCount((c) => c+1)}
        }
        catch (e){
            handleError(e)
            //console.log("clickCounter error", e)
        }

}}




function ErrorPage() {
 

  const errorHandler = (error, errorInfo) =>{
  console.log(error, errorInfo)}

  return (
    <>
      <h1>Welcome to Error Page</h1>
      <div className="app">
        <div className="page-design">
            <p>Click Button to Increase Number</p>
            <p> Error Occurs when count reaches 4!</p>
            <button onClick={<handleClick />}> Counter: {count} </button>
            
          </div>
        </div>
    </>
  );
}

export default ErrorPage;

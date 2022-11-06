import React from 'react';
import { Helmet } from "react-helmet";
import '../App.css';
import MyReact from '../react.jpeg';
  
const Library = () => (
    <div>
        <Helmet>
  
            <title>React Ebook Library </title>
            <meta
                name="description"
                content="Get React js books for free from this plaform"
            />
            <meta
                name="keywords"
                content="Rect, Reactjs, Full stack developer, framweorks, Fallback Component, Components"
            />
        </Helmet>
        <div className='app'>
            <div className='count-card-seo'>
                <h2>Library</h2>
                    <div className='seo-container'>
                    <div className='image'>
                    <img src={MyReact} style={{ width: 180, height: 180 }}alt='book on react'></img>
                    </div>
                    <div className='book-description'>React (also known as React.js or ReactJS) is a free and open-source front-end
                         JavaScript library for building user interfaces based on UI components. It 
                         is maintained by Meta (formerly Facebook) and a community of individual
                          developers and companies. React can be used as a base in the development
                           of single-page, mobile, or server-rendered applications with frameworks
                            like Next.js. </div>
                    </div>
                    
                        
            </div>  
        </div>
        
    </div>
);
  
export default Library;
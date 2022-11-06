import React from 'react';
import { Helmet } from "react-helmet";
  
const Library = () => (
    <div>
        <Helmet>
  
            <title>Music Lyrics</title>
            <meta
                name="description"
                content="Get lyrics of every music for free"
            />
            <meta
                name="keywords"
                content="Music, Audio, Lyrics"
            />
        </Helmet>
        <h2>Library</h2>
    </div>
);
  
export default Library;
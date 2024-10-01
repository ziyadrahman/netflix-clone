import React, { useEffect, useState } from 'react';  // **Added React hooks**
import axios from 'axios';  // **Added axios for API requests**
import './Banner.css';
import { base_url, banner_size,api_key } from '../../Constants/Constants'; // Corrected path

function Banner() {
    const [movie, setMovie] = useState({});  // **State to store the movie data**

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
            );
            setMovie(response.data.results[
                Math.floor(Math.random() * response.data.results.length)  // **Randomly pick a movie**
            ]);
        };
        fetchData();
    }, []);

    return (
        <div 
        className='banner' 
        style={{
          backgroundImage: `url(${base_url}${banner_size}${movie.backdrop_path})`
        }}>
            <div className='content'>
                <h1 className='title'>{movie.title || movie.name || movie.original_name}</h1>  
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My list</button>
                </div>
                <h1 className='description'>
                    {movie.overview}
                </h1>  
            </div>
        <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner;

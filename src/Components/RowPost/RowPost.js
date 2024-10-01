import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './RowPost.css';
import { base_url, api_key,poster_size } from '../../Constants/Constants'; // Corrected path


const RowPost = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.log("Error fetching the movies: ", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className='row'>
      <div className='posters'>
        {movies.map((movie) => (
          <div key={movie.id} className='poster'>
           <img src={`${base_url}${poster_size}${movie.poster_path}`} alt={movie.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RowPost;

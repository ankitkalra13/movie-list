import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from '../services/movieService';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';


const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const data = await getMovieById(id);
        setMovie(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);


  return (
    <>
    <Loader loading={loading} />
    <div className="mx-auto py-8">
      {movie ? (
        <>
          <nav className="flex px-6 w-full" aria-label="Breadcrumb">
            <ol className="list-none p-0 w-full">
              <li>
              <Link to={'/'} className='text-blue-500 flex items-center w-full'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="#3B82F6"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.707 4.293a1 1 0 0 1 1.414 1.414L8.414 10l4.707 4.293a1 1 0 1 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5z"
                    clipRule="evenodd"
                  />
                </svg>
                  <span className="h-6 inline-block"> Back </span> 
                 </Link>
              </li>
            </ol>
          </nav>
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold">{movie.Title}</h2>
            </div>
              <img
                className=" h-full w-[450px] mb-4"
                src={movie.Poster}
                alt={movie.Title}
              />
              <p>
                <strong>Genre:</strong> {movie.Genre}
              </p>
              <p>
                <strong>Director:</strong> {movie.Director}
              </p>
              <p> 
                <strong>Release Year:</strong> {movie.Year}
              </p>
        
              <p className="mt-4">{movie.Plot}</p>
          </div>
        </>
        
      ) : (
        ''
      )}
    </div>
    </>
  );
};

export default MovieDetailsPage;

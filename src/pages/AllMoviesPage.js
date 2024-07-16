import React, { useState, useEffect, useCallback } from 'react';
import { getDefaultMovies } from '../services/movieService';
import Pagination from '../components/Pagination';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';



const AllMoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false); 

  const fetchMovies = useCallback(async (page) => {
    try {
      setIsLoading(true); 
      const fetchedMovies = await getDefaultMovies(page);
      setMovies(fetchedMovies.movies);
      setTotalResults(parseInt(fetchedMovies.totalResults, 10));
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }, []);

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage, fetchMovies]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  return (
    <div className="mx-auto py-8">
      {isLoading && <Loader loading={isLoading} />}
      {movies.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {movies.map((movie) => (
                <Link to={`/movies/${movie.imdbID}`} key={movie.imdbID}>
                <div className="bg-white shadow-md rounded-lg overflow-hidden h-full">
                <img
                    className="w-full h-64 object-cover object-center"
                    src={movie.Poster}
                    alt={movie.Title}
                />
                <div className="p-4">
                    <h2 className="text-lg font-semibold">{movie.Title}</h2>
                    <p className="text-gray-600">{movie.Year}</p>
                </div>
                </div>
            </Link>
            ))}
            </div>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(totalResults / 20)} // 20 results per page
            onPageChange={handlePageChange}
          />
        </>
      ) : (
        <p className="text-center">No movies found.</p>
      )}
    </div>
  );
};

export default AllMoviesPage;

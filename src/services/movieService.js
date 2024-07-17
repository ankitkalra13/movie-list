const API_KEY = '50131afd';
const BASE_URL = 'http://www.omdbapi.com';

export const searchMovies = async (query, page = 1) => {
  const response = await fetch(
    `${BASE_URL}/?apikey=${API_KEY}&s=${encodeURIComponent(query)}&page=${page}&type=movie`
  );
  const data = await response.json();
  if (data.Response === 'True') {
    return { totalResults: data.totalResults, movies: data.Search };
  } else {
    throw new Error(data.Error);
  }
};

export const getDefaultMovies = async (page = 1) => {
  const response = await fetch(`${BASE_URL}/?apikey=${API_KEY}&s=movie&type=movie&page=${page}`);
  const data = await response.json();

  if (data.Response === 'True') {
    const totalResults = parseInt(data.totalResults);
    const totalPages = Math.ceil(totalResults / 10); 

    // pages for 20 movies
    let movies = data.Search;
    let currentPage = page;

    while (movies.length < 20 && currentPage < totalPages) {
      currentPage++;
      const nextPageResponse = await fetch(`${BASE_URL}/?apikey=${API_KEY}&s=movie&type=movie&page=${currentPage}`);
      const nextPageData = await nextPageResponse.json();
      movies = movies.concat(nextPageData.Search);
    }

    // Slice 20 movies 
    movies = movies.slice(0, 20);

    return { totalResults, movies };
  } else {
    throw new Error(data.Error);
  }
};


export const getMovieById = async (id) => {
  const response = await fetch(`${BASE_URL}/?apikey=${API_KEY}&i=${id}`);
  const data = await response.json();
  if (data.Response === 'True') {
    return data;
  } else {
    throw new Error(data.Error);
  }
};

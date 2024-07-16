import React, { useState } from 'react';
import AllMoviesPage from './AllMoviesPage';
import SearchResultsPage from './SearchResultsPage';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="container mx-auto py-8">
      <SearchBar onSearch={handleSearch} onClearSearch={handleClearSearch} />
      {searchQuery ? (
        <SearchResultsPage searchQuery={searchQuery} />
      ) : (
        <AllMoviesPage />
      )}
    </div>
  );
};

export default HomePage;

import React, { useState, useEffect, useRef } from 'react';

const SearchBar = ({ onSearch, onClearSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debounceTimeout = useRef(null);

  useEffect(() => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = setTimeout(() => {
      onSearch(searchTerm);
    }, 500);

    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, [searchTerm, onSearch]);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    onClearSearch();
  };

  return (
    <div className="flex justify-center mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        className="w-full max-w-lg px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search for movies..."
      />
      <button
        onClick={handleClearSearch}
        className={`ml-2 px-4 py-2 rounded-lg ${searchTerm ? 'bg-red-500 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
        disabled={!searchTerm}
      >
        Clear Search
      </button>
    </div>
  );
};

export default SearchBar;

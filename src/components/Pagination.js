import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pagesToShow = 5;
  const halfPagesToShow = Math.floor(pagesToShow / 2);

  let startPage, endPage;
  if (totalPages <= pagesToShow) {
    startPage = 1;
    endPage = totalPages;
  } else if (currentPage <= halfPagesToShow) {
    startPage = 1;
    endPage = pagesToShow;
  } else if (currentPage + halfPagesToShow >= totalPages) {
    startPage = totalPages - pagesToShow + 1;
    endPage = totalPages;
  } else {
    startPage = currentPage - halfPagesToShow;
    endPage = currentPage + halfPagesToShow;
  }

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1) {
      pageNumber = 1;
    } else if (pageNumber > totalPages) {
      pageNumber = totalPages;
    }
    onPageChange(pageNumber);
  };

  return (
    <nav className="flex justify-center my-4">
      <ul className="flex">
        <li
          className={`mx-1 px-3 py-2 rounded-lg cursor-pointer ${
            isFirstPage ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-200'
          }`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={isFirstPage}
        >
          &laquo;
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`mx-1 px-3 py-2 rounded-lg cursor-pointer ${
              currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => handlePageChange(number)}
          >
            {number}
          </li>
        ))}
        <li
          className={`mx-1 px-3 py-2 rounded-lg cursor-pointer ${
            isLastPage ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-200'
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={isLastPage}
        >
          &raquo;
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

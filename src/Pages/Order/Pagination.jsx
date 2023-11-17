import React from 'react';

const Pagination = ({ currentPage, itemsPerPage, totalItems, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumbers.map((number) => (
        <li
          key={number}
          className={`page-item ${currentPage === number ? 'active' : ''}`}
        >
          <button
            className="page-link"
            onClick={() => onPageChange(number)}
          >
            {number}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;

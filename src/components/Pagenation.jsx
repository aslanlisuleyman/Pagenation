

import React from 'react';

const Pagenation = ({ data, postsPerPage, setCurrentPage, currentPage }) => {
  const pages = [];
  for (let index = 1; index <= Math.ceil(data.length / postsPerPage); index++) {
    pages.push(index);
  }
  return (
    <div>
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            style={{
              padding: '8px', margin: '10px', backgroundColor: index + 1 === currentPage ? '#007bff' : '#ccc', color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={() => {
              setCurrentPage(index + 1);
            }}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
};

export default Pagenation;

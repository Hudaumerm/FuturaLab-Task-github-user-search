import React, { useState } from 'react'
import Pagin from './Pagin';
import { Pagination } from 'react-bootstrap';

function PaginData() {
    const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Total number of pages
  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Add your logic here to fetch data for the new page
  };
  return (
    <div>
             <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export default PaginData
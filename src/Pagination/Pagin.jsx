import React from 'react'
import Pagination from 'react-bootstrap/Pagination';
import './Pagin.css'
function Pagin() {
  return (
    <div className='pagination'>
         <Pagination className='pagin-wrapper'>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
     
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item active>{4}</Pagination.Item>
     

      
    </Pagination>
    </div>
  )
}

export default Pagin
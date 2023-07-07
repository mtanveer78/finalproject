import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { Pagination } from 'react-bootstrap';


const Reviews = () => {


  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 5;
  const transactions = [
    {
      id: 1,
      date: '2023-05-01',
      rate: 3,
      name: 'tanveer',
      review: 'Amazing product thanks for seller short time me delever kia he or quality be buhot achi he'

    },
    {
      id: 2,
      date: '2023-05-02',
      rate: 3,
      name: 'tanveer',
      review: 'Amazing product thanks for seller short time me delever kia he or quality be buhot achi he'
    },
    {
      id: 3,
      date: '2023-05-02',
      rate: 3,
      name: 'tanveer',
      review: 'Amazing product thanks for seller short time me delever kia he or quality be buhot achi he'
    },
    {
      id: 4,
      date: '2023-05-02',
      rate: 3,
      name: 'tanveer',
      review: 'Amazing product thanks for seller short time me delever kia he or quality be buhot achi he'
    },
    {
      id: 5,
      date: '2023-05-02',
      rate: 3,
      name: 'tanveer',
      review: 'Amazing product thanks for seller short time me delever kia he or quality be buhot achi he'
    },
    {
      id: 6,
      date: '2023-05-02',
      rate: 3,
      name: 'tanveer',
      review: 'Amazing product thanks for seller short time me delever kia he or quality be buhot achi he'
    },
    {
      id: 7,
      date: '2023-05-02',
      rate: 3,
      name: 'tanveer',
      review: 'Amazing product thanks for seller short time me delever kia he or quality be buhot achi he'
    },
    // Add more dummy transactions here...
  ];

  // Logic to calculate pagination
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

  const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderTransactions = () => {
    return currentTransactions.map((transaction) => (
      <div className="review-component">
        <ReactStars

          count={transaction.rate}
         value = {transaction.rate}
          size={30}
         
          edit= {false}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
        />
        <div className="reviewer">
          <strong>by </strong> {transaction.name}
          <i className="float-right" >{transaction.date}</i>
        </div>
        <div className="review">
          {transaction.review}
        </div>
        <div className="image">
          {transaction.image?.map(image => {
				return (
					<image className="review-image" src={`http://localhost:5000/images/${image}`} />
				);
			})}
        </div>
        <hr/>
      </div>
    ));
  };

  return (
    <div className="container">

      {/* Transaction History */}

      <div>{renderTransactions()}</div>
      {transactions.length > transactionsPerPage && (
        <div className="d-flex justify-content-center mt-3">
          <Pagination>
            {Array.from({ length: Math.ceil(transactions.length / transactionsPerPage) }, (_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => handlePaginationClick(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </div>
      )}
    </div>

  );
};

export default Reviews;
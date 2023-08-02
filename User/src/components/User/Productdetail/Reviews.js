import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { Pagination } from 'react-bootstrap';


const Reviews = (props) => {


  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 5;
  const transactions = props.transactions

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
        {/* {console.log(transaction.user_rate)} */}
        <ReactStars

          count={transaction.user_rate}
          value={transaction.user_rate}
          size={30}

          edit={false}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
        />
        <strong>{transaction.sentiment===1?"Positve Review":"Negative Review"} </strong>
        <div className="reviewer">
          By {transaction.user_name}
          <i className="float-right" >{transaction.date.split("T")[0]}<strong> At </strong>{transaction.date.split("T")[1].split(".")[0]}</i>
        </div>
        <div className="review">
          {transaction.user_review}
        </div>
        <div className="image">
          {transaction.images?.map(image => {
            return (
              <img className="review-image" src={`http://localhost:5000/images/${image}`} alt=""/>
            );
          })}
        </div>
        <hr />
      </div>
    ));
  };

  return (
    <>
      <div className="title-name" >{transactions.length} review for <strong>{props.prod_name}</strong></div>
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
    </>
  );
};

export default Reviews;
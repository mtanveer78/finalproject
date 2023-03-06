import React, { useContext, useEffect } from 'react';
import ProductContext from "../../context/product/ProductContext";
import { useParams,Link } from "react-router-dom";
import Adminlayout from './Adminlayout';
import moment from 'moment';

function Review() {
  const { prod_id } = useParams()
  const context = useContext(ProductContext);
  const { review, getReview } = context;

  useEffect(() => {
    /* eslint-disable-next-line */
    getReview(prod_id)
    /* eslint-disable-next-line */
  }, [])
  return (
    <>
      <Adminlayout>

        <div className="card">
          <div className="card-header bg-primary">
            <h4 className="text-white"> Reviews 
            <Link to="/review" className="btn btn-warning float-right">Back</Link>
            </h4>
          </div>
          <div className="row">
            <div className=" col-md-6">
              <h3 className="m-3 text-center text-primary">Positve Review</h3>
              <table className="table table-bordered ">
                <thead>
                  <tr>
                    <th>Review Date</th>
                    <th>User Name</th>
                    <th>Review</th>
                    <th>Rate</th>
                    <th>Sentiment</th>
                  </tr>
                </thead>
                <tbody>
                  {review?.map(reviewitem => {
                    return (
                      <tr>
                        <td>{moment(reviewitem.date).utc().format('DD-MM-YY')}</td>
                        <td>{reviewitem.user}</td>
                        <td>{reviewitem.user_review}</td>
                        <td>{reviewitem.user_rate}</td>
                        <td>Positive</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className=" col-md-6">
            <h3 className="m-3 text-center text-primary">Negative Review</h3>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Review Date</th>
                    <th>User Name</th>
                    <th>Review</th>
                    <th>Rate</th>
                    <th>Sentiment</th>
                  </tr>
                </thead>
                <tbody>
                  
                  {review?.map(reviewitem => {
                    return (
                      <tr>
                        <td>{moment(reviewitem.date).utc().format('DD-MM-YY')}</td>
                        <td>{reviewitem.user}</td>
                        <td>{reviewitem.user_review}</td>
                        <td>{reviewitem.user_rate}</td>
                        <td>Positive</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>


            </div>
          </div>
        </div>

      </Adminlayout>
    </>
  )
}

export default Review

import React, { useContext, useEffect } from 'react';
import ProductContext from "../../../context/product/ProductContext";
import { useParams, Link } from "react-router-dom";
import Adminlayout from '../Adminlayout/Adminlayout';
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
        <div className='br'></div>
        <h4> <strong>Reviews </strong>
          <Link to="/review" className="btn btn-primary float-right">Back</Link>
        </h4>
        <div className="row">
          <div className=" col-md-6">
            <h3 className="m-3 text-center">Positve Review</h3>
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
                      <td id="simple-text">{moment(reviewitem.date).utc().format('DD-MM-YY')}</td>
                      <td id="simple-text">{reviewitem.user}</td>
                      <td id="simple-text">{reviewitem.user_review}</td>
                      <td id="simple-text">{reviewitem.user_rate}</td>
                      <td id="simple-text">Positive</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className=" col-md-6">
            <h3 className="m-3 text-center">Negative Review</h3>
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
                      <td id="simple-text">{moment(reviewitem.date).utc().format('DD-MM-YY')}</td>
                      <td id="simple-text">{reviewitem.user}</td>
                      <td id="simple-text">{reviewitem.user_review}</td>
                      <td id="simple-text">{reviewitem.user_rate}</td>
                      <td id="simple-text">Positive</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>


          </div>
        </div>
        {/* </div> */}

      </Adminlayout>
    </>
  )
}

export default Review

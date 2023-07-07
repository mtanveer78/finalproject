import React, { useContext, useEffect } from 'react';
import ProductContext from "../../../context/product/ProductContext";
import { Link } from "react-router-dom";
import Adminlayout from '../Adminlayout/Adminlayout';

function MainReviewpage() {
  const context = useContext(ProductContext);
  const { allreview, getAllReview, products } = context;
  const unique = [...new Map(allreview.map((item) => [item["prod_id"], item])).values()];
  let product = []
  let countValue = (arr, key1, value1, key2, value2) => arr.filter(x => (x[key1] === value1) && (x[key2] === value2)).length

  useEffect(() => {
    /* eslint-disable-next-line */
    getAllReview()
    /* eslint-disable-next-line */
  }, [])
  return (
    <>
      <Adminlayout>

        <div className='br'></div>
        <h4> <strong> Reviews </strong></h4><hr />
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Total positive Review</th>
              <th>Total negative Review</th>
              <th>Action</th>


            </tr>
          </thead>
          <tbody>
            {unique?.map(review => {
              return (
                product = products.find(item => item._id === review.prod_id),
                <tr>
                  <td id="simple-text">{product?.name}</td>
                  <td id="simple-text">{countValue(unique, 'prod_id', review.prod_id, 'user_rate', 4)}</td>
                  <td id="simple-text">{countValue(unique, 'prod_id', review.prod_id, 'user_rate', 4)}</td>
                  <td>
                    <Link to={`/viewreview/${review.prod_id}`} className="btn btn-primary">view</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* </div>
        </div> */}

      </Adminlayout>
    </>
  )
}

export default MainReviewpage

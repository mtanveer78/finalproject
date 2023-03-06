import React, { useContext, useEffect } from 'react'
import ProductContext from "../../context/product/ProductContext"
import { Link } from "react-router-dom";
import Adminlayout from './Adminlayout';


function Product() {
  const context = useContext(ProductContext);
  const { products, getProducts } = context;

  useEffect(() => {
    /* eslint-disable-next-line */
    getProducts()
    /* eslint-disable-next-line */
  }, [])
  return (
    <>
      <Adminlayout>

        <div className="card">
          <div className="card-header">
            <h4>Product page</h4>
            <hr />
          </div>
          <div className="card-body">
            <table className="table table-border table-striped">
              <thead>
                <tr >

                  <th>Name</th>
                  <th>Description</th>
                  <th>Selling Price</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products?.map(product => {
                  return (
                    <tr >

                      <td >{product.name}</td>
                      <td>{product.description}</td>
                      <td>{product.selling_price}</td>
                      <td>
                        <img src={product.image} className="cate-image" alt="Something here" width="150px" />
                      </td>
                      <td>
                        <Link to="" className="btn btn-primary btn-sm">Edit</Link>
                        <Link to="" className="btn btn-danger btn-sm mx-3">Delete</Link>
                      </td>
                    </tr>
                  );
                })}

              </tbody>
            </table>
          </div>
        </div>
      </Adminlayout>
    </>


  )
}

export default Product

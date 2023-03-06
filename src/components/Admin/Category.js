import React, { useContext, useEffect } from 'react'
import ProductContext from "../../context/product/ProductContext"
import { Link } from "react-router-dom";
import Adminlayout from './Adminlayout';



function Category() {
  const context = useContext(ProductContext);
  const { category, getCategory } = context;

  useEffect(() => {
    /* eslint-disable-next-line */
    getCategory()
    /* eslint-disable-next-line */
  }, [])
  return (
    <>
      <Adminlayout>
        <div className="card">
          <div className="card-header">
            <h4>Category page</h4>
            <hr />
          </div>
          <div className="card-body">
            <table className="table table-border table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {category?.map(category => {
                  return (
                    <tr>
                      <td>{category.name}</td>
                      <td>{category.description}</td>
                      <td>
                        <img src={category.image} className="cate-image" alt="Something here" width="150px" />
                      </td>
                      <td>
                        <Link to="" className="btn btn-primary">Edit</Link>
                        <Link to="" className="btn btn-danger">Delete</Link>
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

export default Category

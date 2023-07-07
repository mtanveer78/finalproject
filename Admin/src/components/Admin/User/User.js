import React, { useContext, useEffect } from 'react'
import ProductContext from "../../../context/product/ProductContext"
import { Link } from "react-router-dom";
import Adminlayout from '../Adminlayout/Adminlayout';
function User() {
  const context = useContext(ProductContext);
  const { alluser, getAllUser, DeleteUser } = context;

  useEffect(() => {
    /* eslint-disable-next-line */
    getAllUser()
    /* eslint-disable-next-line */
  }, [])

  const DelUser = (user_id) => {
    DeleteUser(user_id);
  }
  return (
    <div>
      <Adminlayout>
        <div className='br'></div>
        <div className="card">
          <div className="card-header bg-primary">
            <h4 className="text-white">Registered users </h4>

          </div>
          <div className="card-body">
            <table className="table table-border table-striped">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email </th>
                  <th>phone</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {alluser?.map(user => {
                  return (
                    <tr>
                      <td>{user._id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.contact}</td>
                      <td>
                        <Link to={`/viewuser/${user._id}`} className="btn btn-primary btn-sm">view</Link>
                        <Link onClick={() => DelUser(user._id)} className="btn btn-danger btn-sm mx-3">Delete</Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </Adminlayout>
    </div>
  )
}

export default User

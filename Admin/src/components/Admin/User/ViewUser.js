import React, { useContext, useEffect, useState } from 'react';
import ProductContext from "../../../context/product/ProductContext";
import { useParams,Link } from "react-router-dom";
import Adminlayout from '../Adminlayout/Adminlayout';

function ViewUser() {
  const { user_id } = useParams();
  const context = useContext(ProductContext);
  const { getUser} = context;
  const [user, setUser] = useState([])

  useEffect(() => {
    /* eslint-disable-next-line */
    async function fetchData() {
      try {
    const data =await getUser(user_id);
    setUser(data)
    console.log(data)
  } catch (error) {
    console.error(error);
  }
}
fetchData();
    /* eslint-disable-next-line */
  }, [])
  return (
    <>
      <Adminlayout>
      <div className='br'></div>
        <div className="card">
          <div className="card-header bg-primary">
            <h4 className="text-white">users details
              <Link to="/user" className="btn btn-sm btn-warning float-right">Back </Link> </h4>
            
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 mt-3">
                <label htmlFor="">Name</label>
                <div className="p-2 border">{user.name}</div>
              </div>
              
              <div className="col-md-6 mt-3">
                <label htmlFor="">Email</label>
                <div className="p-2 border">{user.email}</div>
              </div>
              <div className="col-md-6 mt-3">
                <label htmlFor="">Phone</label>
                <div className="p-2 border">{user.contact}</div>
              </div>
              <div className="col-md-6 mt-3">
                <label htmlFor="">Address 1</label>
                <div className="p-2 border">{user.address}</div>
              </div>
             
              <div className="col-md-6 mt-3">
                <label htmlFor="">Country</label>
                <div className="p-2 border">{user.country}</div>
              </div>
              <div className="col-md-6 mt-3">
                <label htmlFor="">City</label>
                <div className="p-2 border">{user.city}</div>
              </div>
              <div className="col-md-6 mt-3">
                <label htmlFor="">State</label>
                <div className="p-2 border">{user.state}</div>
              </div>
              <div className="col-md-6 mt-3">
                <label htmlFor="">Pin Code</label>
                <div className="p-2 border">{user.pincode}</div>
              </div>
            </div>
          </div>
        </div>

      </Adminlayout>
    </>
  )
}

export default ViewUser
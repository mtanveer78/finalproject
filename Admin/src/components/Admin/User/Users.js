import React, { useContext, useEffect } from 'react'
import ProductContext from "../../../context/product/ProductContext"
import Adminlayout from '../Adminlayout/Adminlayout'
import { Link } from "react-router-dom";

function Users() {
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
    <>
      <Adminlayout>
        <div className='br'></div>
        <h4 > <strong>Users</strong></h4>
        Below are the customers that have registered on your website
        <hr />
        <div className="row"> {console.log(alluser)}
          {alluser?.map(user => {
            return (
             
              <div className="col-md-3 user-card">
                <div className="dami-image">{user.name.charAt(0).toUpperCase()}</div>
                <div className="user-name">{user.name}</div>
                <hr />
                <div><img className="icon" src="assets/images/cellphone-icon.png" alt="" /><i> {user.contact}</i></div>
                <div><img className="icon" src="assets/images/email-icon.png" alt="" /><i> {user.email}</i></div>
                <div><img className="icon" src="assets/images/address-icon.png" alt="" /><i> {user.address}, {user.city}, {user.state}, {user.country} </i></div>
                <Link onClick={() => DelUser(user._id)} className="float-right"><img className="icon" src="assets/images/delete-icon.png" alt="" /></Link>
              </div>
            );
          })}
        </div>
      </Adminlayout>
    </>
  )
}

export default Users

import React from 'react'
import { Link } from "react-router-dom";
import "./css/nucleo-icons.css";
import "./css/black-dashboard.css?v=1.0.1";
import "./demo/demo.css";
import "./css/custom.css";


function Sidebar() {
  return (
    <div>
      <div className="sidebar font" style={{ width: "300px" }} >

        <div className="sidebar-wrapper">
          <div className="logo">
            <Link to="#" className="simple-text logo-mini">
              CT
            </Link>
            <Link to="#" className="simple-text logo-normal">
              Creative Tim
            </Link>
          </div>
          <ul className="nav">
            <li>
              <Link to="#">
                <i className="tim-icons icon-chart-pie-36"></i>
                <p className="font">Dashboard</p>
              </Link>
            </li>
            <li className=" ">
              <Link to="/category">
                <i className="tim-icons icon-atom"></i>
                <p className="font">Category</p>
              </Link>
            </li>
            <li>
              <Link to="/addcategory">
                <i className="tim-icons icon-pin"></i>
                <p className="font">Add Category</p>
              </Link>
            </li>
            <li>
              <Link to="/product">
                <i className="tim-icons icon-bell-55"></i>
                <p className="font">Product</p>
              </Link>
            </li>
            <li>
              <Link to="/addproduct">
                <i className="tim-icons icon-single-02"></i>
                <p className="font">Add Product</p>
              </Link>
            </li>
            <li>
              <Link to="/order">
                <i className="tim-icons icon-puzzle-10"></i>
                <p className="font">Order</p>
              </Link>
            </li>
            <li>
              <Link to="/review">
                <i className="tim-icons icon-align-center"></i>
                <p className="font">Review</p>
              </Link>
            </li>
            <li>
              <Link to="/user">
                <i className="tim-icons icon-world"></i>
                <p className="font">User</p>
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

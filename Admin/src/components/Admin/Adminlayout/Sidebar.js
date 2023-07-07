import React from 'react'
import { Link, useLocation } from "react-router-dom";


function Sidebar() {
  let location = useLocation();
  const path = location.pathname;

  return (
    <div>
      <nav id="sidebar" className="sticky">


        <Link ><img className='logo' src="assets/images/main-logo.png" alt="alt" /><i className="C-name"> E-Shop </i></Link>

        <ul className="nav">
          <li>
            <Link className={`menu-item ${path === "/dashbord" ? "active" : ""}`} to="#">
              <i className="tim-icons icon-chart-pie-36"></i>
              <p className="font">Dashboard</p>
            </Link>
          </li>
          <li>
            <Link className={`menu-item ${path === "/category" || /updatecategory/.test(path) ? "active" : ""}`} to="/category">
              <i className="tim-icons icon-atom"></i>
              <p className="font">Category</p>
            </Link>
          </li>
          <li>
            <Link className={`menu-item ${path === "/addcategory" ? "active" : ""}`} to="/addcategory">
              <i className="tim-icons icon-pin"></i>
              <p className="font">Add Category</p>
            </Link>
          </li>
          <li>
            <Link className={`menu-item ${path === "/product" || /updateproduct/.test(path) || /viewproductdetail/.test(path) ? "active" : ""}`} to="/product">
              <i className="tim-icons icon-bell-55"></i>
              <p className="font">Product</p>
            </Link>
          </li>
          <li>
            <Link className={`menu-item ${path === "/addproduct" ? "active" : ""}`} to="/addproduct">
              <i className="tim-icons icon-single-02"></i>
              <p className="font">Add Product</p>
            </Link>
          </li>
          <li>
            <Link className={`menu-item ${path === "/order" || /shippedorder/.test(path) || /orderhistory/.test(path) || /vieworder/.test(path) ? "active" : ""}`} to="/order">
              <i className="tim-icons icon-puzzle-10"></i>
              <p className="font">Order</p>
            </Link>
          </li>
          <li>
            <Link className={`menu-item ${path === "/review" || /viewreview/.test(path) ? "active" : ""}`} to="/review">
              <i className="tim-icons icon-align-center"></i>
              <p className="font">Review</p>
            </Link>
          </li>
          <li>
            <Link className={`menu-item ${path === "/user" || /viewuser/.test(path) ? "active" : ""}`} to="/user">
              <i className="tim-icons icon-single-02 "></i>
              <p className="font">User</p>
            </Link>
          </li>
          <li>
            <Link className={`menu-item ${path === "/flashsale" ? "active" : ""}`} to="/flashsale">
              <i className="tim-icons icon-single-02 "></i>
              <p className="font">Flash Sale</p>
            </Link>
          </li>

        </ul>

      </nav>
    </div>
  )
}

export default Sidebar




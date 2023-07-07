import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-absolute navbar-transparent">
        <div className="container-fluid">
          <div className="navbar-wrapper">
            <div className="navbar-toggle d-inline">
              <button type="button" className="navbar-toggler">
                <span className="navbar-toggler-bar bar1"></span>
                <span className="navbar-toggler-bar bar2"></span>
                <span className="navbar-toggler-bar bar3"></span>
              </button>
            </div>
            <Link className="navbar-brand" to="#">Icons</Link>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-bar navbar-kebab"></span>
            <span className="navbar-toggler-bar navbar-kebab"></span>
            <span className="navbar-toggler-bar navbar-kebab"></span>
          </button>
          <div className="collapse navbar-collapse" id="navigation">
            <ul className="navbar-nav ml-auto">
              <li className="search-bar input-group">
                <button className="btn btn-link" id="search-button" data-toggle="modal" data-target="#searchModal"><i className="tim-icons icon-zoom-split" ></i>
                  <span className="d-lg-none d-md-block">Search</span>
                </button>
              </li>
              <li className="dropdown nav-item">
                <Link to="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                  <div className="notification d-none d-lg-block d-xl-block"></div>
                  <i className="tim-icons icon-sound-wave"></i>
                  <p className="d-lg-none">
                    Notifications
                  </p>
                </Link>
                <ul className="dropdown-menu dropdown-menu-right dropdown-navbar">
                  <li className="nav-link"><Link to="#" className="nav-item dropdown-item">Mike John responded to your email</Link></li>
                  <li className="nav-link"><Link to="#" className="nav-item dropdown-item">You have 5 more tasks</Link></li>
                  <li className="nav-link"><Link to="#" className="nav-item dropdown-item">Your friend Michael is in town</Link></li>
                  <li className="nav-link"><Link to="#" className="nav-item dropdown-item">Another notification</Link></li>
                  <li className="nav-link"><Link to="#" className="nav-item dropdown-item">Another one</Link></li>
                </ul>
              </li>
              <li className="dropdown nav-item">
                <Link to="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                  <div className="photo">
                    {/* <img src="../assets/img/anime3.png" alt="Profile Photo"/> */}
                  </div>
                  <b className="caret d-none d-lg-block d-xl-block"></b>
                  <p className="d-lg-none">
                    Log out
                  </p>
                </Link>
                <ul className="dropdown-menu dropdown-navbar">
                  <li className="nav-link"><Link to="#" className="nav-item dropdown-item">Profile</Link></li>
                  <li className="nav-link"><Link to="#" className="nav-item dropdown-item">Settings</Link></li>
                  <li className="dropdown-divider"></li>
                  <li className="nav-link"><Link to="#" className="nav-item dropdown-item">Log out</Link></li>
                </ul>
              </li>
              <li className="separator d-lg-none"></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import "./css/nucleo-icons.css";
import "./css/black-dashboard.css?v=1.0.1";
import "./demo/demo.css";
import "./css/custom.css";

const Adminlayout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="wrapper">
        <div className="main-panel">

          <div className="content">
            <div className="row mx-5">
              <div className="col-md-12">
                <main className="main"> {children} </main>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Adminlayout

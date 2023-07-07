import React from 'react'
// import Footer from './Footer'
// import Navbar from './Navbar'
import Sidebar from './Sidebar'
// import "../assets/css/nucleo-icons.css";
// import "../assets/css/black-dashboard.css?v=1.0.1";
// import "../assets/demo/demo.css";
// import "../assets/css/custom.css";
// import "https://use.fontawesome.com/releases/v5.0.6/css/all.css";
// import "https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800";


const Adminlayout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div className="content ">
        <main className="main"> {children} </main>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default Adminlayout

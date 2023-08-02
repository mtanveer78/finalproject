import React, {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
// import "../assets/css/animate.css"
// import "../assets/css/font-awesome.min.css"
import "../assets/css/bootstrap.min.css"
// import "../assets/css/owl.carousel.min.css"
// import "../assets/css/flexslider.css"
// import "../assets/css/chosen.min.css"
import "../assets/css/style.css"
import "../assets/css/custom.css"
import "../assets/css/color-01.css"
import "../assets/css/simple.css"
import Sidebar from './Sidebar'


const Userlayout = ({ children }) => {
  let location = useLocation();
  const path = location.pathname;
  
  useEffect(() => {
    /* eslint-disable-next-line */
    // console.log(localStorage.getItem('token.loginTime'))
  
    /* eslint-disable-next-line */
  }, [])
  return (
    <>
      {/* <iframe> */}
        <Header />
        {path === '/' ?<Sidebar />:""}
      
        <main className="main"> {children} </main>
        <Footer />
      {/* </iframe> */}
    </>
  )
}

export default Userlayout

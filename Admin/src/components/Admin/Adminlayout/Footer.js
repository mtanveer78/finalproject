import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer id="footer" className="footer mx-5">
        <div className="container-fluid">
          <ul className="nav">
            <li className="nav-item">
              <Link to="#" className="nav-link">
                Creative Tim
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">
                Blog
              </Link>
            </li>
          </ul>
          <div className="copyright">
            ©
            <script>
              document.write(new Date().getFullYear())
            </script>2018 made with <i className="tim-icons icon-heart-2"></i> by
            <Link to="#" target="_blank">Creative Tim</Link> for a better web.
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

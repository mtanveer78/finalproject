import React from 'react'
import { Link } from 'react-router-dom';

function Sidebar() {
  
  
  return (
    <>
   
      <div className="sidebar">
        <div className=" pure-menu">
          <ul className="pure-menu-list">
            <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
              <Link to="" className="pure-menu-link"> Electronics </Link >
              <ul className="pure-menu-children mtn-0">
                <li className="pure-menu-item">
                  <Link to="" className="pure-menu-link">Batteries & Chargens </Link >
                </li>
                <li className="pure-menu-item">
                  <Link to="" className="pure-menu-link"> Mp3 Player & Headphones </Link >
                </li>
                <li className="pure-menu-item">
                  <Link to="" className="pure-menu-link">Headphone & Headsets </Link >
                </li>
                <li className="pure-menu-item">
                  <Link to="" className="pure-menu-link"> Mp3 Player & Acessories </Link >
                </li>
              </ul>
            </li>

            <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
              <Link to="" className="pure-menu-link"> Smartphone & Table </Link >
              <ul className="pure-menu-children mtn-1">
                <li className="pure-menu-item">
                  <Link to="" className="pure-menu-link">Batteries & Chargens </Link >
                </li>
                <li className="pure-menu-item">
                  <Link to="" className="pure-menu-link"> Mp3 Player & Headphones </Link >
                </li>
                <li className="pure-menu-item">
                  <Link to="" className="pure-menu-link"> Mp3 Player & Headphones </Link >
                </li>
                <li className="pure-menu-item">
                  <Link to="" className="pure-menu-link"> Table & Accessories </Link >
                </li>
              </ul>
            </li>

            <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
              <Link to="" className="pure-menu-link"> Electronics </Link >
              <ul className="pure-menu-children mtn-2">
                <li className="pure-menu-item">
                  <Link to="" className="pure-menu-link">Batteries & Chargens </Link >
                </li>
                <li className="pure-menu-item">
                  <Link to="" className="pure-menu-link">Headphone & Headsets </Link >
                </li>
                <li className="pure-menu-item">
                  <Link to="" className="pure-menu-link"> Mp3 Player & Headphones </Link >
                </li>
                <li className="pure-menu-item">
                  <Link to="" className="pure-menu-link"> Mp3 Player & Acessories </Link >
                </li>
              </ul>
            </li>

            <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
              <Link to="" className="pure-menu-link"> Smartphone & Table </Link >
              <ul className="pure-menu-children mtn-3">
                <li className="pure-menu-item">
                  <Link to="" className="pure-menu-link">Batteries & Chargens </Link >
                </li>
                <li className="pure-menu-item">
                  <Link to="" className="pure-menu-link"> Mp3 Player & Headphones </Link >
                </li>
                <li className="pure-menu-item">
                  <Link to="" className="pure-menu-link"> Mp3 Player & Headphones </Link >
                </li>
                <li className="pure-menu-item">
                  <Link to="" className="pure-menu-link"> Table & Accessories </Link >
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sidebar
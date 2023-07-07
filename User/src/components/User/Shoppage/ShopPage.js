import React, { useContext, useEffect } from "react";
import ProductContext from "../../../context/product/ProductContext"
import { Link } from "react-router-dom";
import Catagorycard from '../Mainpage/Catagorycard';
import Userlayout from '../Userlayout/Userlayout'


function ShopPage() {
  const context = useContext(ProductContext);
  const { category, getCategory } = context;

  useEffect(() => {
    /* eslint-disable-next-line */

    getCategory()
    /* eslint-disable-next-line */
  }, [])
  return (
    <div>
      <Userlayout>
        <div className="container">

          <div className="wrap-breadcrumb">
            <ul>
              <li className="item-link"><Link to="/" className="link">home</Link></li>
              <li className="item-link"><span>detail</span></li>
            </ul>
          </div>
          {category?.map(category => {
            return (
              <Catagorycard category={category} />
            );
          })}

        </div>
      </Userlayout>
    </div>
  )
}

export default ShopPage

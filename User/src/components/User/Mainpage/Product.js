import React, { useContext, useEffect } from "react";
import ProductContext from "../../../context/product/ProductContext"
import { Link , useParams} from "react-router-dom";
import Userlayout from '../Userlayout/Userlayout'
import Productcard from "./Productcard";

function Product() {
  const { cat_id } = useParams()
  const context = useContext(ProductContext);
  const { product, getCategoryProduct } = context;

  useEffect(() => {
    /* eslint-disable-next-line */

    getCategoryProduct(cat_id)
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
           {product?.map(product => {
            return (
              <Productcard product={product} />
            );
          })}

        </div>
      </Userlayout>
    </div>
  )
}

export default Product

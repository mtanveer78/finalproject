import React, {useContext} from 'react'
import { Link, useNavigate} from "react-router-dom";
import ProductContext from "../../../context/product/ProductContext"
import { useCookies } from 'react-cookie';
import swal from 'sweetalert';
import "./productcard.css"

function Productcard(props) {
  const navigate = useNavigate();
  const context = useContext(ProductContext);
  const { AddtoCartproduct, AddWishlist } = context;
  const [cookies, setCookie] = useCookies(['token']);

  const AddtoCart = async () => {

		if (cookies.token) {
			
			const data = await AddtoCartproduct(props.product._id, 1)

			if (data.Success !== undefined) {
				swal("Product Added", data.Success, "success");
			}
			else {
				swal("Error", data.Failed, "warning");
			}
		}
		else { navigate("/login") }
	}
	const AddtoWishlist = async () => {

		if (cookies.token) {
      // console.log("data")
			const data = await AddWishlist(props.product._id)
      
			if (data.Success !== undefined) {
				swal("Product Added", data.Success, "success");
			}
			else {
				swal("Error", data.Failed, "warning");
			}
		}
		else { navigate("/login") }
	}
  return (
    <>
     
      <div className="main-productcard grid-color" key={props.product._id} >
        <div className="product-grid ">
          <div className="product-image p-2">
            <Link to={`/product/${props.product._id}`} className="image">
              <img className="pic-1"  src={props.product.images[0].startsWith("https://") ? props.product.images[0] : `http://localhost:5000/images/${props.product.images[0]}`} alt="" />
              {props.product.images.length > 1 ? <img className="pic-2" src={props.product.images[1].startsWith("https://") ? props.product.images[1] : `http://localhost:5000/images/${props.product.images[1]}`} alt="" /> : ""}
            </Link>
            
            <span className="product-discount-label">{`-${100-parseInt(props.product.selling_price/props.product.original_price*100)}%`}</span>
          </div>
          <div className="product-content">

            <li className="fa fa-star star"></li>
            <li className="fa fa-star star"></li>
            <li className="fa fa-star star"></li>
            <li className="fa fa-star star"></li>
            <li className="fa fa-star star"></li>

            <h3 className="title text_overflow" ><Link to={`/product/${props.product._id}`}>{props.product.name}</Link></h3>
            <div className="price"><span className="original-price">{props.product.original_price}</span></div>
            <div className="price">Rs.{props.product.selling_price} </div>
            <div className="product-button-group">
              <Link className="product-like-icon" onClick={AddtoWishlist} ><i className="fa fa-heart"></i></Link>
              {props.product.quantity === 0 ?
              <Link className="add-to-cart" >Out of Stock</Link>:
              <Link className="add-to-cart" onClick={AddtoCart} ><i className="fa fa-cart-plus"></i>ADD TO CART</Link>
              }
              <Link className="product-compare-icon" to=""><i className="fa fa-random"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Productcard

import React, { useContext, useEffect } from 'react'
import ProductContext from "../context/product/ProductContext"
import { Link } from "react-router-dom";
import Latest from "./Latest";
// import Onsales from "./Mainpageproduct";

const Wishlist = () => {
  const context = useContext(ProductContext);
  const { products, wishlist, fetchWishlist, DeleteWishlist, AddtoCartproduct } = context;
  let product = []
  // const [quantity, setquantity] = useState(1)

  useEffect(() => {
    /* eslint-disable-next-line */
    fetchWishlist()
    /* eslint-disable-next-line */
  }, [])

  const AddtoCart = (prod_id) => {
    const qty = document.getElementById(prod_id).value;
    AddtoCartproduct(prod_id,qty)
  }
  const Increasequantity = (prod_id) => {
    const qty = document.getElementById(prod_id);
    qty.value =parseInt(qty.value)+1;
  }
  const Decreasequantity = (prod_id) => {
    const qty = document.getElementById(prod_id);
    qty.value =parseInt(qty.value)-1;
  }

  const Deleteprod = (prod_id) => {
    DeleteWishlist(prod_id);
  }
  // if (wishlist.length === 0) return <span>loading..</span>
  return (
    <>
      <main id="main" className="main-site">

        <div className="container">

          <div className="wrap-breadcrumb">
            <ul>
              <li className="item-link"><Link to="#" className="link">home</Link></li>
              <li className="item-link"><span>login</span></li>
            </ul>
          </div>
          <div className=" main-content-area">

            <div className="wrap-iten-in-cart">
              <h3 className="box-title">Products Name</h3>
              <ul className="products-cart">
                {/* {console.log(wishlist)} */}
                {wishlist?.length > 0 ? (
                  wishlist?.map(wishlistitem => {
                    return (
                      product = products.find(item => item._id === wishlistitem.prod_id),
                      console.log(product.name),
                      <li className="pr-cart-item">
                        <div className="product-image">
                          <figure><img src={product.image} alt="" /></figure>
                        </div>
                        <div className="product-name">
                          <Link className="link-to-product" to="#">{product.name}</Link>
                        </div>
                        <div className="price-field product-price"><p className="price">{product.selling_price}</p></div>
                        <div className="quantity">
												<div className="quantity-input">
													<input id={wishlistitem.prod_id} type="text" name="product-quatity" value="1" data-max="120" pattern="[0-9]*" />
													<Link onClick={() => Increasequantity(wishlistitem.prod_id)} className="btn btn-increase" ></Link>
													<Link onClick={() => Decreasequantity(wishlistitem.prod_id)} className="btn btn-reduce" ></Link>
												</div>
											</div>
                        {/* <div class="input-group text-center mb-3" style={{width:"130px"}}>
                          <button class="input-group-text decrement-btn">-</button>
                          <input id="prdqty" type="text" name="quantity" class="form-control qty-input text-center" value="1" />
                          <button class="input-group-text increment-btn">+</button>
                        </div> */}

                        <div className="price-field" style={{ margin: "10px" }}> <b>{product.quantity > 0 ? "In Stock" : "Out of stock"}</b></div>

                        <div className="wrap-butons">
                          <Link onClick={() => AddtoCart(wishlistitem.prod_id)} className="btn btn-primary add-to-cart" style={{ margin: "10px" }}>Add to Cart</Link>
                        </div>
                        {/* <div className="price-field sub-total"><p className="price">$256.00</p></div> */}
                        <div className="delete">
                          <Link onClick={() => Deleteprod(wishlistitem.prod_id)} className="btn btn-delete" title="">
                            <span>Delete from your wishlist</span>
                            <i className="fa fa-times-circle" aria-hidden="true"></i>
                          </Link>
                        </div>
                      </li>
                    );
                  })) : (<h3 className='text-center'>Wishlist is Empty</h3>)}

              </ul>
            </div>

            <Latest />

          </div>
        </div>

      </main>
    </>
  )
}

export default Wishlist;
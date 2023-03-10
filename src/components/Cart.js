import React, { useContext, useEffect } from 'react'
import ProductContext from "../context/product/ProductContext"
import { Link } from "react-router-dom";
import Latest from "./Latest";
// import Onsales from "./Mainpageproduct";

const Cart = () => {
	const context = useContext(ProductContext);
	const {carts,products,shippingfee, fetchCart,Updatecart, Deletecart} = context;
	let product=[]
	let total = 0

	useEffect(() => {
		/* eslint-disable-next-line */
		fetchCart()
		/* eslint-disable-next-line */
	}, [])

	const Updateqty=(prod_id,prod_qty)=>{
		Updatecart(prod_id,prod_qty);
	}
	const Deleteprod=(prod_id)=>{
		Deletecart(prod_id);
	}
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
					{carts.length>0?(<div>
						<div className="wrap-iten-in-cart">
							<h3 className="box-title">Products Name</h3>
							<ul className="products-cart">
							
								{carts?.map(cart => {
									return (
										product = products.find(item => item._id === cart.prod_id),
										<li className="pr-cart-item">
											<div className="product-image">
												<figure><img src={product.image } alt="" /></figure>
											</div>
											<div className="product-name">
												<Link className="link-to-product" to="#">{product.name}</Link>
											</div>
											<div className="price-field produtc-price"><p className="price">{product.selling_price}</p></div>
											<div className="quantity">
												<div className="quantity-input">
													<input type="text" name="product-quatity" value={cart.prod_qty} data-max="120" pattern="[0-9]*" />
													<Link onClick={() => Updateqty(cart.prod_id,cart.prod_qty+1)} className="btn btn-increase" ></Link>
													<Link onClick={() => Updateqty(cart.prod_id,cart.prod_qty-1)} className="btn btn-reduce" ></Link>
												</div>
											</div>
											<span className="hidden"> {total= total+cart.prod_qty*product.selling_price}</span>
											<div className="price-field sub-total"><p className="price">{cart.prod_qty*product.selling_price}</p></div>
											<div className="delete">
												<Link onClick={() => Deleteprod(cart.prod_id)} className="btn btn-delete" title="">
													<span>Delete from your cart</span>
													<i className="fa fa-times-circle" aria-hidden="true"></i>
												</Link>
											</div>
										</li>
									);
								})}

							</ul>
						</div>

						<div className="summary">
							<div className="order-summary col-md-3">
								<h4 className="title-box">Order Summary</h4>
								<p className="summary-info"><span className="title">Subtotal</span><b className="index">{total}</b></p>
								<p className="summary-info"><span className="title">Shipping</span><b className="index">{shippingfee}</b></p>
								<p className="summary-info total-info "><span className="title">Total</span><b className="index">{total+shippingfee}</b></p>
								
							</div>
							<div className="checkout-info col-md-4" style={{ margin: "50px", paddingLeft: "75px" }}>
								<label className="checkbox-field ">
									<input className="frm-input " name="have-code" id="have-code" value="" type="checkbox" /><span>I have promo code</span>
								</label>
								<Link className="btn btn-checkout" to="/checkout">Check out</Link>
								<Link className="link-to-shop" to="shop.html">Continue Shopping<i className="fa fa-arrow-circle-right" aria-hidden="true"></i></Link>
							</div>
							<div className="update-clear col-md-3" style={{ paddingLeft: "100px" }}>
								<Link className="btn btn-clear" style={{ marginTop: "50px" }} to="#">Clear Shopping Cart</Link>
								<Link className="btn btn-update" to="#">Update Shopping Cart</Link>
							</div>
						</div>
						</div>
						):(<h3 className='text-center'>Cart is Empty</h3>)}
						<Latest />

					</div>
				</div>

			</main>
		</>
	)
}

export default Cart;
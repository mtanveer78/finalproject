import React, {useContext,useEffect,useState} from "react";
import ProductContext from "../context/product/ProductContext"
import { Link } from "react-router-dom";
import Showproduct from "./Showproduct";

const Checkout = ({ onsaleproduct }) => {
	const context = useContext(ProductContext);
	const {subtotal,shippingfee,Totalgrand,PlaceOrder} = context;
	const total_price = subtotal+shippingfee;
	useEffect(() => {
		/* eslint-disable-next-line */
		Totalgrand()
		/* eslint-disable-next-line */
	}, [])
	const [user, setUser] = useState({ name: "", email: "", contact: "", address: "", country: "", city: "", state: "", zip: "", message:"" })

	const handleClick = (e) => {
		e.preventDefault();
		PlaceOrder(user.name, user.email, user.contact, user.address, user.country, user.city, user.state, user.zip, user.message,total_price);
		setUser({ name: "", email: "", contact: "", address: "", country: "", city: "", state: "", zip: "", message:"" })
		
	}

	const onChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value })
	}
	
	return (
		<>
			<main id="main" className="main-site">

				<div className="container">

					<div className="wrap-breadcrumb">
						<ul>
							<li className="item-link"><Link to="/" className="link">home</Link></li>
							<li className="item-link"><span>login</span></li>
						</ul>
					</div>
					<div className=" main-content-area">
						<form action={handleClick} method="get" name="frm-billing">
							<div className="wrap-address-billing">
								<h3 className="box-title">Billing Address</h3>
								
									<p className="row-in-form">
										<label htmlFor="name">Full name<span>*</span></label>
										<input id="name" type="text" name="name" value={user.name} placeholder="Your name" onChange={onChange} required />
									</p>
									<p className="row-in-form">
										<label htmlFor="email">Email Address<span>*</span></label>
										<input id="email" type="email" name="email"  value={user.email} placeholder="Type your email" onChange={onChange} required />
									</p>
									<p className="row-in-form">
										<label htmlFor="contact">Phone No:<span>*</span></label>
										<input id="contact" type="number" name="contact" value={user.contact} placeholder="10 digits format" onChange={onChange} required />
									</p>
									<p className="row-in-form">
										<label htmlFor="address">Address:<span>*</span></label>
										<input id="address" type="text" name="address" value={user.address} placeholder="Street at apartment number"  onChange={onChange} required />
									</p>
									<p className="row-in-form">
										<label htmlFor="country">Country</label>
										<input id="country" type="text" name="country" value={user.country} placeholder="Country name" onChange={onChange} />
									</p>
									<p className="row-in-form">
										<label htmlFor="city">Town / City<span>*</span></label>
										<input id="city" type="text" name="city" value={user.city} placeholder="City name" onChange={onChange} required />
									</p>
									<p className="row-in-form">
										<label htmlFor="state">State<span>*</span></label>
										<input id="state" type="text" name="state" value={user.state} placeholder="State name" onChange={onChange} required />
									</p>
									<p className="row-in-form">
										<label htmlFor="zip">Postcode / ZIP:</label>
										<input id="zip" type="number" name="zip" value={user.zip} placeholder="Your postal code" onChange={onChange} />
									</p>
									<p className="row-in-form col-md-12">
										<label htmlFor="message">Message</label>
										<textarea id="message" name="message" rows="6" cols="100" value={user.message} placeholder="Message" onChange={onChange} />
									</p>
									<p className="row-in-form fill-wife">
										<label className="checkbox-field">
											<input name="create-account" id="create-account" value="forever" type="checkbox" />
											<span>Create an account?</span>
										</label>
									
										<label className="checkbox-field">
											<input name="different-add" id="different-add" value="forever" type="checkbox" />
											<span>Ship to a different address?</span>
										</label>
									</p>
								
							</div>
							<div className="summary summary-checkout">
								<div className="summary-item payment-method">
									<h4 className="title-box">Payment Method</h4>
									<p className="summary-info"><span className="title">Check / Money order</span></p>
									<p className="summary-info"><span className="title">Credit Cart (saved)</span></p>
									<div className="choose-payment-methods">
										<label className="payment-method">
											<input name="payment-method" id="payment-method-bank" value="bank" type="radio" />
											<span>Direct Bank Transder</span>
											<span className="payment-desc">But the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</span>
										</label>
										<label className="payment-method">
											<input name="payment-method" id="payment-method-visa" value="visa" type="radio" />
											<span>visa</span>
											<span className="payment-desc">There are many variations of passages of Lorem Ipsum available</span>
										</label>
										<label className="payment-method">
											<input name="payment-method" id="payment-method-paypal" value="paypal" type="radio" />
											<span>Paypal</span>
											<span className="payment-desc">You can pay with your credit</span>
											<span className="payment-desc">card if you don't have a paypal account</span>
										</label>
									</div>
									<p className="summary-info grand-total"><span>Grand Total</span> <span className="grand-total-price">{subtotal+shippingfee}</span></p>
									<button type="submit" className="btn btn-medium" onClick={handleClick}>Place order now</button>
								</div>
								<div className="summary-item shipping-method">
									<h4 className="title-box f-title">Shipping charges</h4>
									<p className="summary-info"><span className="title">Flat Rate</span></p>
									<p className="summary-info"><span className="title">Fixed {shippingfee}</span></p>
									<h4 className="title-box">Discount Codes</h4>
									<p className="row-in-form">
										<label htmlFor="coupon-code">Enter Your Coupon code:</label>
										<input id="coupon-code" type="text" name="coupon-code" value="" placeholder="" />
									</p>
									<Link to="/" className="btn btn-small">Apply</Link>
								</div>
							</div>
						</form>
						<div className="wrap-show-advance-info-box style-1 box-in-site">
							<h3 className="title-box">Most Viewed Products</h3>
							<div className="wrap-products">
								<div className="products slide-carousel owl-carousel style-nav-1 equal-container" data-items="5" data-loop="false" data-nav="true" data-dots="false" data-responsive='{"0":{"items":"1"},"480":{"items":"2"},"768":{"items":"3"},"992":{"items":"3"},"1200":{"items":"5"}}' >

									{onsaleproduct.map(onsaleproduct => {
										return (
											<Showproduct title={onsaleproduct.title} description={onsaleproduct.description} imageurl={onsaleproduct.imageurl} price={onsaleproduct.price} labels={onsaleproduct.labels} />
										);
									})}
								</div>
							</div>
						</div>

					</div>
				</div>

			</main>
		</>
	)
}

export default Checkout;

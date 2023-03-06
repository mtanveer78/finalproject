import React, { useContext, useEffect, useState } from 'react'
import ProductContext from "../context/product/ProductContext"
import { Link, useParams } from "react-router-dom";


const Detail = () => {
	const { prod_id } = useParams()
	const context = useContext(ProductContext);
	const { product, getProductsdetail, AddtoCartproduct , AddWishlist } = context;

	let [visibleA, setVisibleA] = useState(false)
	let [visibleB, setVisibleB] = useState(false)
	let [visibleC, setVisibleC] = useState(true)

	const handleclick=(info)=> {
		if (info==="description") {
			setVisibleA(true) 
			setVisibleB(false)
			setVisibleC(false)
		}
		else if (info==="add_information") {
			setVisibleA(false) 
			setVisibleB(true)
			setVisibleC(false)
		}
		else if (info==="reviews") {
			setVisibleA(false) 
			setVisibleB(false)
			setVisibleC(true)
		}
	}

	const AddtoCart=()=> {
		const qty = document.getElementById("qty").value;
		// console.log(qty)
		AddtoCartproduct(product._id,qty)
	}
	const AddtoWishlist=()=> {
		AddWishlist(product._id)
	}

	useEffect(() => {
		/* eslint-disable-next-line */
		getProductsdetail(prod_id)
		/* eslint-disable-next-line */
	}, [])

	return (
		<>
			
			<main id="main" className="main-site">

				<div className="container">

					<div className="wrap-breadcrumb">
						<ul>
							<li className="item-link"><Link to="/" className="link">home</Link></li>
							<li className="item-link"><span>detail</span></li>
						</ul>
					</div>
					<div className="row">

						<div className="col-lg-9 col-md-8 col-sm-8 col-xs-12 main-content-area">
							<div className="wrap-product-detail">
								<div className="detail-media">
									<div className="product-gallery">
										<ul className="slides">
											
											<li data-thumb={`${product.image}`}>
												<img src={`${product.image}`} alt="product thumbnail" />
											</li>

											<li data-thumb={`${product.image}`}>
												<img src={`${product.image}`} alt="product thumbnail" />
												
											</li>

											<li data-thumb={`${product.image}`}>
												<img src={`${product.image}`} alt="product thumbnail" />
											</li>

											<li data-thumb={`${product.image}`}>
												<img src={`${product.image}`} alt="product thumbnail" />
											</li>

											<li data-thumb={`${product.image}`}>
												<img src={`${product.image}`} alt="product thumbnail" />
											</li>

											<li data-thumb={`${product.image}`}>
												<img src={`${product.image}`} alt="product thumbnail" />
											</li>

											<li data-thumb={`${product.image}`}>
												<img src={`${product.image}`} alt="product thumbnail" />
											</li>

											<li data-thumb={`${product.image}`}>
												<img src={`${product.image}`} alt="product thumbnail" />
											</li>

										</ul>
									</div>
								</div>
								<div className="detail-info">
									<div className="product-rating">
										{/* <i className="fa fa-star" aria-hidden="true"></i> */}
										<i className="fa fa-star" aria-hidden="true"></i>
										<i className="fa fa-star" aria-hidden="true"></i>
										<i className="fa fa-star" aria-hidden="true"></i>
										<i className="fa fa-star" aria-hidden="true"></i>
										<Link to="/" className="count-review">(05 review)</Link>
									</div>
									<h2 className="product-name">{product.name}</h2>
									<div className="short-desc">
										<ul>
											<li>{product.description}</li>
											<li>Dual-core A7 with quad-core graphics</li>
											<li>FaceTime HD Camera 7.0 MP Photos</li>
										</ul>
									</div>
									<div className="wrap-social">
										<Link className="link-socail" to="/"><img src="assets/images/social-list.png" alt="" /></Link>
									</div>
									<div className="wrap-price"><span className="product-price">Rs:{product.selling_price}.00</span></div>
									<div className={`stock-info ${product.quantity > 0 ? "in-stock" : "out-stock"}`}>
										<p className="availability">Availability: <b>{product.quantity > 0 ? "In Stock" : "Out of stock"}</b></p>
									</div>
									<div className="quantity">
										<span>Quantity:</span>
										<div className="quantity-input">
											<input id="qty" type="text" name="product-quatity" value="1" data-max={product.quantity} pattern="[0-9]*" />

											<Link className="btn btn-reduce" ></Link>
											<Link className="btn btn-increase" ></Link>
										</div>
									</div>
									<div className="wrap-butons">
										<Link onClick={() => AddtoCart()} className="btn add-to-cart">Add to Cart</Link>
										<div className="wrap-btn">

											<Link onClick={() => AddtoWishlist()} className="btn btn-wishlist">Add Wishlist</Link>
										</div>
									</div>
								</div>
								<div className="advance-info">
									<div className="tab-control normal">
										<Link onClick={() => handleclick("description")} className="tab-control-item active">description</Link>
										<Link onClick={() => handleclick("add_information")} className="tab-control-item ">Addtional Infomation</Link>
										<Link onClick={() => handleclick("reviews")} className="tab-control-item">Reviews</Link>
									</div>
									<div className="tab-contents">
										<div className={`tab-content-item ${visibleA===true?"active":""}`} id="description">
											<p>Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, a t everti meliore erroribus sea. ro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.</p>
											<p>Cum altera mandamus in, mea verear disputationi et. Vel regione discere ut, legere expetenda ut eos. In nam nibh invenire similique. Atqui mollis ea his, ius graecis accommodare te. No eam tota nostrum eque. Est cu nibh clita. Sed an nominavi, et stituto, duo id rebum lucilius. Te eam iisque deseruisse, ipsum euismod his at. Eu putent habemus voluptua sit, sit cu rationibus scripserit, modus taria . </p>
											<p>experian soleat maluisset per. Has eu idque similique, et blandit scriptorem tatibus mea. Vis quaeque ocurreret ea.cu bus  scripserit, modus voluptaria ex per.</p>
										</div>
										<div className={`tab-content-item ${visibleB===true?"active":""}`} id="add_infomation">
											<table className="shop_attributes">
												<tbody>
													<tr>
														<th>Weight</th><td className="product_weight">1 kg</td>
													</tr>
													<tr>
														<th>Dimensions</th><td className="product_dimensions">12 x 15 x 23 cm</td>
													</tr>
													<tr>
														<th>Color</th><td><p>Black, Blue, Grey, Violet, Yellow</p></td>
													</tr>
												</tbody>
											</table>
										</div>
										<div className={`tab-content-item ${visibleC===true?"active":""}`} id="review">

											<div className="wrap-review-form">

												<div id="comments">
													<h2 className="woocommerce-Reviews-title">01 review for <span>Radiant-360 R6 Chainsaw Omnidirectional [Orage]</span></h2>
													<ol className="commentlist">
														<li className="comment byuser comment-author-admin bypostauthor even thread-even depth-1" id="li-comment-20">
															<div id="comment-20" className="comment_container">
																<img alt="" src="assets/images/author-avata.jpg" height="80" width="80" />
																<div className="comment-text">
																	<div className="star-rating">
																		<span className="width-80-percent">Rated <strong className="rating">5</strong> out of 5</span>
																	</div>
																	<p className="meta">
																		<strong className="woocommerce-review__author">admin</strong>
																		<span className="woocommerce-review__dash">–</span>
																		<time className="woocommerce-review__published-date" dateTime="2008-02-14 20:00" >Tue, Aug 15,  2017</time>
																	</p>
																	<div className="description">
																		<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
																	</div>
																</div>
															</div>
														</li>
													</ol>
												</div>

												<div id="review_form_wrapper">
													<div id="review_form">
														<div id="respond" className="comment-respond">

															<form action="#" method="post" id="commentform" className="comment-form" noValidate="">
																<p className="comment-notes">
																	<span id="email-notes">Your email address will not be published.</span> Required fields are marked <span className="required">*</span>
																</p>
																<div className="comment-form-rating">
																	<span>Your rating</span>
																	<p className="stars">

																		<label htmlFor="rated-1"></label>
																		<input type="radio" id="rated-1" name="rating" value="1" />
																		<label htmlFor="rated-2"></label>
																		<input type="radio" id="rated-2" name="rating" value="2" />
																		<label htmlFor="rated-3"></label>
																		<input type="radio" id="rated-3" name="rating" value="3" />
																		<label htmlFor="rated-4"></label>
																		<input type="radio" id="rated-4" name="rating" value="4" />
																		<label htmlFor="rated-5"></label>
																		<input type="radio" id="rated-5" name="rating" value="5" />
																	</p>
																</div>
																<p className="comment-form-author">
																	<label htmlFor="author">Name <span className="required">*</span></label>
																	<input id="author" name="author" type="text" value="" />
																</p>
																<p className="comment-form-email">
																	<label htmlFor="email">Email <span className="required">*</span></label>
																	<input id="email" name="email" type="email" value="" />
																</p>
																<p className="comment-form-comment">
																	<label htmlFor="comment">Your review <span className="required">*</span>
																	</label>
																	<textarea id="comment" name="comment" cols="45" rows="8"></textarea>
																</p>
																<p className="form-submit">
																	<input name="submit" type="submit" id="submit" className="submit" value="Submit" />
																</p>
															</form>

														</div>
													</div>
												</div>

											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-3 col-md-4 col-sm-4 col-xs-12 sitebar">
							<div className="widget widget-our-services ">
								<div className="widget-content">
									<ul className="our-services">

										<li className="service">
											<Link className="link-to-service" to="/">
												<i className="fa fa-truck" aria-hidden="true"></i>
												<div className="right-content">
													<b className="title">Free Shipping</b>
													<span className="subtitle">On Oder Over $99</span>
													<p className="desc">Lorem Ipsum is simply dummy text of the printing...</p>
												</div>
											</Link>
										</li>

										<li className="service">
											<Link className="link-to-service" to="/">
												<i className="fa fa-gift" aria-hidden="true"></i>
												<div className="right-content">
													<b className="title">Special Offer</b>
													<span className="subtitle">Get a gift!</span>
													<p className="desc">Lorem Ipsum is simply dummy text of the printing...</p>
												</div>
											</Link>
										</li>

										<li className="service">
											<Link className="link-to-service" to="/">
												<i className="fa fa-reply" aria-hidden="true"></i>
												<div className="right-content">
													<b className="title">Order Return</b>
													<span className="subtitle">Return within 7 days</span>
													<p className="desc">Lorem Ipsum is simply dummy text of the printing...</p>
												</div>
											</Link>
										</li>
									</ul>
								</div>
							</div>

							<div className="widget mercado-widget widget-product">
								<h2 className="widget-title">Popular Products</h2>
								<div className="widget-content">
									<ul className="products">
										<li className="product-item">
											<div className="product product-widget-style">
												<div className="thumbnnail">
													<Link to="detail.html" title="Radiant-360 R6 Wireless Omnidirectional Speaker [White]">
														<figure><img src="assets/images/products/digital_01.jpg" alt="" /></figure>
													</Link>
												</div>
												<div className="product-info">
													<Link to="/" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker...</span></Link>
													<div className="wrap-price"><span className="product-price">$168.00</span></div>
												</div>
											</div>
										</li>

										<li className="product-item">
											<div className="product product-widget-style">
												<div className="thumbnnail">
													<Link to="detail.html" title="Radiant-360 R6 Wireless Omnidirectional Speaker [White]">
														<figure><img src="assets/images/products/digital_17.jpg" alt="" /></figure>
													</Link>
												</div>
												<div className="product-info">
													<Link to="/" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker...</span></Link>
													<div className="wrap-price"><span className="product-price">$168.00</span></div>
												</div>
											</div>
										</li>

										<li className="product-item">
											<div className="product product-widget-style">
												<div className="thumbnnail">
													<Link to="detail.html" title="Radiant-360 R6 Wireless Omnidirectional Speaker [White]">
														<figure><img src="assets/images/products/digital_18.jpg" alt="" /></figure>
													</Link>
												</div>
												<div className="product-info">
													<Link to="/" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker...</span></Link>
													<div className="wrap-price"><span className="product-price">$168.00</span></div>
												</div>
											</div>
										</li>

										<li className="product-item">
											<div className="product product-widget-style">
												<div className="thumbnnail">
													<Link to="detail.html" title="Radiant-360 R6 Wireless Omnidirectional Speaker [White]">
														<figure><img src="assets/images/products/digital_20.jpg" alt="" /></figure>
													</Link>
												</div>
												<div className="product-info">
													<Link to="/" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker...</span></Link>
													<div className="wrap-price"><span className="product-price">$168.00</span></div>
												</div>
											</div>
										</li>

									</ul>
								</div>
							</div>

						</div>

						<div className="single-advance-box col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div className="wrap-show-advance-info-box style-1 box-in-site">
								<h3 className="title-box">Related Products</h3>
								<div className="wrap-products">
									<div className="products slide-carousel owl-carousel style-nav-1 equal-container" data-items="5" data-loop="false" data-nav="true" data-dots="false" data-responsive='{"0":{"items":"1"},"480":{"items":"2"},"768":{"items":"3"},"992":{"items":"3"},"1200":{"items":"5"}}' >

										<div className="product product-style-2 equal-elem ">
											<div className="product-thumnail">
												<Link to="detail.html" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
													<figure><img src="assets/images/products/digital_04.jpg" width="214" height="214" alt="T-Shirt Raw Hem Organic Boro Constrast Denim" /></figure>
												</Link>
												<div className="group-flash">
													<span className="flash-item new-label">new</span>
												</div>
												<div className="wrap-btn">
													<Link to="/" className="function-link">quick view</Link>
												</div>
											</div>
											<div className="product-info">
												<Link to="/" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></Link>
												<div className="wrap-price"><span className="product-price">$250.00</span></div>
											</div>
										</div>

										<div className="product product-style-2 equal-elem ">
											<div className="product-thumnail">
												<Link to="detail.html" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
													<figure><img src="assets/images/products/digital_17.jpg" width="214" height="214" alt="T-Shirt Raw Hem Organic Boro Constrast Denim" /></figure>
												</Link>
												<div className="group-flash">
													<span className="flash-item sale-label">sale</span>
												</div>
												<div className="wrap-btn">
													<Link to="/" className="function-link">quick view</Link>
												</div>
											</div>
											<div className="product-info">
												<Link to="/" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></Link>
												<div className="wrap-price"><ins><p className="product-price">$168.00</p></ins> <del><p className="product-price">$250.00</p></del></div>
											</div>
										</div>

										<div className="product product-style-2 equal-elem ">
											<div className="product-thumnail">
												<Link to="detail.html" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
													<figure><img src="assets/images/products/digital_15.jpg" width="214" height="214" alt="T-Shirt Raw Hem Organic Boro Constrast Denim" /></figure>
												</Link>
												<div className="group-flash">
													<span className="flash-item new-label">new</span>
													<span className="flash-item sale-label">sale</span>
												</div>
												<div className="wrap-btn">
													<Link to="/" className="function-link">quick view</Link>
												</div>
											</div>
											<div className="product-info">
												<Link to="/" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></Link>
												<div className="wrap-price"><ins><p className="product-price">$168.00</p></ins> <del><p className="product-price">$250.00</p></del></div>
											</div>
										</div>

										<div className="product product-style-2 equal-elem ">
											<div className="product-thumnail">
												<Link to="detail.html" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
													<figure><img src="assets/images/products/digital_01.jpg" width="214" height="214" alt="T-Shirt Raw Hem Organic Boro Constrast Denim" /></figure>
												</Link>
												<div className="group-flash">
													<span className="flash-item bestseller-label">Bestseller</span>
												</div>
												<div className="wrap-btn">
													<Link to="/" className="function-link">quick view</Link>
												</div>
											</div>
											<div className="product-info">
												<Link to="/" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></Link>
												<div className="wrap-price"><span className="product-price">$250.00</span></div>
											</div>
										</div>

										<div className="product product-style-2 equal-elem ">
											<div className="product-thumnail">
												<Link to="detail.html" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
													<figure><img src="assets/images/products/digital_21.jpg" width="214" height="214" alt="T-Shirt Raw Hem Organic Boro Constrast Denim" /></figure>
												</Link>
												<div className="wrap-btn">
													<Link to="/" className="function-link">quick view</Link>
												</div>
											</div>
											<div className="product-info">
												<Link to="/" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></Link>
												<div className="wrap-price"><span className="product-price">$250.00</span></div>
											</div>
										</div>

										<div className="product product-style-2 equal-elem ">
											<div className="product-thumnail">
												<Link to="detail.html" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
													<figure><img src="assets/images/products/digital_03.jpg" width="214" height="214" alt="T-Shirt Raw Hem Organic Boro Constrast Denim" /></figure>
												</Link>
												<div className="group-flash">
													<span className="flash-item sale-label">sale</span>
												</div>
												<div className="wrap-btn">
													<Link to="/" className="function-link">quick view</Link>
												</div>
											</div>
											<div className="product-info">
												<Link to="/" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></Link>
												<div className="wrap-price"><ins><p className="product-price">$168.00</p></ins> <del><p className="product-price">$250.00</p></del></div>
											</div>
										</div>

										<div className="product product-style-2 equal-elem ">
											<div className="product-thumnail">
												<Link to="detail.html" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
													<figure><img src="assets/images/products/digital_04.jpg" width="214" height="214" alt="T-Shirt Raw Hem Organic Boro Constrast Denim" /></figure>
												</Link>
												<div className="group-flash">
													<span className="flash-item new-label">new</span>
												</div>
												<div className="wrap-btn">
													<Link to="/" className="function-link">quick view</Link>
												</div>
											</div>
											<div className="product-info">
												<Link to="/" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></Link>
												<div className="wrap-price"><span className="product-price">$250.00</span></div>
											</div>
										</div>

										<div className="product product-style-2 equal-elem ">
											<div className="product-thumnail">
												<Link to="detail.html" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
													<figure><img src="assets/images/products/digital_05.jpg" width="214" height="214" alt="T-Shirt Raw Hem Organic Boro Constrast Denim" /></figure>
												</Link>
												<div className="group-flash">
													<span className="flash-item bestseller-label">Bestseller</span>
												</div>
												<div className="wrap-btn">
													<Link to="/" className="function-link">quick view</Link>
												</div>
											</div>
											<div className="product-info">
												<Link to="/" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></Link>
												<div className="wrap-price"><span className="product-price">$250.00</span></div>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</main>
		</>
	)
}

export default Detail;
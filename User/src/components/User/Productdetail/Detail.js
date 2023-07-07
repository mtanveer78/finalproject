import React, { useContext, useEffect, useState } from 'react'
import ProductContext from "../../../context/product/ProductContext"
import { Link, useParams, useNavigate } from "react-router-dom";
import Userlayout from '../Userlayout/Userlayout';
import swal from 'sweetalert';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import Reviews from './Reviews';
import Latest from '../Mainpage/Latest';
// import "react-image-gallery/styles/scss/image-gallery.scss"

const Detail = () => {
	const navigate = useNavigate();
	const { prod_id } = useParams()
	const context = useContext(ProductContext);
	const { getProductsdetail, AddtoCartproduct, AddWishlist } = context;
	const [product, setProduct] = useState([])
	const [images, setImages] = useState([])
	const [quantity, setQuantity] = useState(1)

	const AddtoCart = async() => {
		
			if (localStorage.getItem('token')) {
				
				const qty = document.getElementById("qty").value;
				const data = await AddtoCartproduct(product._id, qty)

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
		if (localStorage.getItem('token')) {
			const data = await AddWishlist(product._id)
			if (data.Success !== undefined) {
				swal("Product Added", data.Success, "success");
			}
			else {
				swal("Error", data.Failed, "warning");
			}
		}
		else { navigate("/login") }
	}
	const handleQuantityChange = async (event) => {
		const newQuantity = parseInt(event.target.value);
		if (newQuantity <= parseInt(event.target.getAttribute("data-max"))) {
			setQuantity(newQuantity);
		}
	}

	const handleReduceClick = async () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	}

	const handleIncreaseClick = async () => {
		if (quantity < product.quantity) {
			setQuantity(quantity + 1);
		}
	}

	useEffect(() => {
		/* eslint-disable-next-line */
		async function fetchData() {
			try {
				const prod = await getProductsdetail(prod_id)
				setProduct(prod)
				const newImages = prod.images.map((image) => ({
					original: `http://localhost:5000/images/${image}`,
					thumbnail: `http://localhost:5000/images/${image}`,
				}));
				setImages((prevImages) => {
					// Filter out any images that already exist in the state
					const filteredImages = newImages.filter(
						(image) => !prevImages.some((prevImage) => prevImage.original === image.original)
					);
					// Concatenate the filtered images with the existing state
					return [...prevImages, ...filteredImages];
				});

			} catch (error) {
				console.error(error);
			}
		}
		fetchData();
		/* eslint-disable-next-line */
	}, [])

	return (
		<div>
			<Userlayout>
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
									<div className="image-gallery-container">
										<ImageGallery items={images} showPlayButton={false} />
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
										<h2 className="product-name">{product.name} </h2>
										<div className="short-desc">
											<ul>

												{product.description?.split("\n").map((line) => (
													<li>{line}</li>
												))
												}

											</ul>

										</div>
										<div className="wrap-social">
											<Link className="link-socail" to="/"><img src="assets/images/social-list.png" alt="" /></Link>
										</div>
										<div className="wrap-price"><span className="cut-price">{product.original_price}</span><br /> <span className="product-price">Rs:{product.selling_price}</span></div>
										<div className={`stock-info ${product.quantity > 0 ? "in-stock" : "out-stock"}`}>
											<p className="availability">Availability: <b>{product.quantity > 0 ? "In Stock" : "Out of stock"}</b></p>
										</div>
										<div className="quantity">
											<span>Quantity:</span>
											<div className="quantity-input">
												<input id="qty" type="text" name="product-quatity" value={quantity} data-max={product.quantity} onChange={handleQuantityChange} pattern="[0-9]*" />

												<Link className="btn btn-reduce" onClick={handleReduceClick} ></Link>
												<Link className="btn btn-increase" onClick={handleIncreaseClick} ></Link>
											</div>
										</div>
										<div className="wrap-butons">
											<button onClick={() => AddtoCart()} className="btn add-to-cart">Add to Cart</button>
											<div className="wrap-btn wish-icon">

												<button onClick={() => AddtoWishlist()} className="btn btn-wishlist wish-btn">Add Wishlist</button>
											</div>
										</div>
									</div>
									<div className="advance-info">
										{/* <div className="tab-control normal">
											<Link onClick={() => handleclick("description")} className="tab-control-item active">description</Link>
											<Link onClick={() => handleclick("add_information")} className="tab-control-item ">Addtional Infomation</Link>
											<Link onClick={() => handleclick("reviews")} className="tab-control-item">Reviews</Link>
										</div> */}

										<div className="tab-contents bg-white p-2 mt-2">
											{product.meta_description?.split("\n").map((line) => (
												<p>{line}</p>
											))}
										</div>.
										<div className="wrap-review-form">
											<div className="title-name" >01 review for <strong>{product.name}</strong></div>
											<Reviews />
											{/* <div id="comments">
												<h2 className="woocommerce-Reviews-title ">01 review for <span>Radiant-360 R6 Chainsaw Omnidirectional [Orage]</span></h2>
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
											</div> */}

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
							
						</div>
						<Latest />
					</div>

				</main>
			</Userlayout>
		</div>
	)
}

export default Detail;
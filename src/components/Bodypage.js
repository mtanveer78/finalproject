import React from "react";
import { Link } from 'react-router-dom';
import Latest from "./Latest";
import Onsales from "./Onsales";
import Showproduct from './Showproduct';


const Bodypage = ({ onsaleproduct }) => {

	
	return (
		<> 
		{/* {console.log(onsaleproduct)} */}
			<div className="container w-100">
				{/* <!-- mobile menu --> */}
				<div className="mercado-clone-wrap">
					<div className="mercado-panels-actions-wrap">
						<Link className="mercado-close-btn mercado-close-panels" to="/">x</Link>
					</div>
					<div className="mercado-panels"></div>
				</div>

				{/* <!--header--> */}


				<main id="main">
					<div className="container">

						{/* <!--MAIN SLIDE--> */}
						<div className="wrap-main-slide">
							<div className="slide-carousel owl-carousel style-nav-1" data-items="1" data-loop="1" data-nav="true" data-dots="false">
								<div className="item-slide">
									<img src="assets/images/main-slider-1-1.jpg" alt="" className="img-slide" />
									<div className="slide-info slide-1">
										<h2 className="f-title">Kid Smart <b>Watches</b></h2>
										<span className="subtitle">Compra todos tus productos Smart por internet.</span>
										<p className="sale-info">Only price: <span className="price">$59.99</span></p>
										<Link to="/" className="btn-link">Shop Now</Link>
									</div>
								</div>
								<div className="item-slide">
									<img src="assets/images/main-slider-1-2.jpg" alt="" className="img-slide" />
									<div className="slide-info slide-2">
										<h2 className="f-title">Extra 25% Off</h2>
										<span className="f-subtitle">On online payments</span>
										<p className="discount-code">Use Code: #FA6868</p>
										<h4 className="s-title">Get Free</h4>
										<p className="s-subtitle">TRansparent Bra Straps</p>
									</div>
								</div>
								<div className="item-slide">
									<img src="assets/images/main-slider-1-3.jpg" alt="" className="img-slide" />
									<div className="slide-info slide-3">
										<h2 className="f-title">Great Range of <b>Exclusive Furniture Packages</b></h2>
										<span className="f-subtitle">Exclusive Furniture Packages to Suit every need.</span>
										<p className="sale-info">Stating at: <b className="price">$225.00</b></p>
										<Link to="/" className="btn-link">Shop Now</Link>
									</div>
								</div>
							</div>
						</div>

						{/* <!--BANNER--> */}
						<div className="wrap-banner style-twin-default">
							<div className="banner-item">
								<Link to="/" className="link-banner banner-effect-1">
									<figure><img src="assets/images/home-1-banner-1.jpg" alt="" width="580" height="190" /></figure>
								</Link>
							</div>
							<div className="banner-item">
								<Link to="/" className="link-banner banner-effect-1">
									<figure><img src="assets/images/home-1-banner-2.jpg" alt="" width="580" height="190" /></figure>
								</Link>
							</div>
						</div>

						{/* <!--On Sale--> */}
						
						<Onsales/>
						
						{/* <!--Latest Products--> */}
						<Latest/>

						{/* <!--Product Categories--> */}
						<div className="wrap-show-advance-info-box style-1">
							<h3 className="title-box">Product Categories</h3>
							<div className="wrap-top-banner">
								<Link to="/" className="link-banner banner-effect-2">
									<figure><img src="assets/images/fashion-accesories-banner.jpg" width="1170" height="240" alt="" /></figure>
								</Link>
							</div>
							<div className="wrap-products">
								<div className="wrap-product-tab tab-style-1">
									<div className="tab-control">
										<Link to="/" className="tab-control-item active">Smartphone</Link>
										<Link to="/" className="tab-control-item">Watch</Link>
										<Link to="/" className="tab-control-item">Laptop</Link>
										<Link to="/" className="tab-control-item">Tablet</Link>
									</div>
									<div className="tab-contents">

										<div className="tab-content-item active" id="fashion_1a">
											<div className="wrap-products slide-carousel owl-carousel style-nav-1 equal-container" data-items="5" data-loop="false" data-nav="true" data-dots="false" data-responsive='{"0":{"items":"1"},"480":{"items":"2"},"768":{"items":"3"},"992":{"items":"4"},"1200":{"items":"5"}}' >

												{onsaleproduct?.map(onsaleproduct => {
													return (
														<Showproduct name={onsaleproduct.name} description={onsaleproduct.description} image={onsaleproduct.image} selling_price={onsaleproduct.selling_price} labels={onsaleproduct.labels} />
													);
												})}
											</div>
										</div>


									</div>
								</div>
							</div>
						</div>
					</div>

				</main>
			</div>

		</>
	)
}

export default Bodypage;

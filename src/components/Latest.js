import ProductContext from "../context/product/ProductContext"
import React, { useContext, useEffect } from 'react'
import { Link } from "react-router-dom";
import Showproduct from './Showproduct';

function Latest() {

	const context = useContext(ProductContext);
	const { products, getProducts } = context;

	useEffect(() => {
		/* eslint-disable-next-line */
		getProducts()
	
		/* eslint-disable-next-line */
	}, [])



	return (
		<>
			<div className="wrap-show-advance-info-box style-1">
				<h3 className="title-box">Latest Products</h3>
				<div className="wrap-top-banner">
					<Link to="/" className="link-banner banner-effect-2">
						<figure><img src="assets/images/digital-electronic-banner.jpg" width="1170" height="240" alt="" /></figure>
					</Link>
				</div>
				<div className="wrap-products">
					<div className="wrap-product-tab tab-style-1">
						<div className="tab-contents">
							<div className="tab-content-item active" id="digital_1a">
								<div className="wrap-products slide-carousel owl-carousel style-nav-1 equal-container" data-items="5" data-loop="false" data-nav="true" data-dots="false" data-responsive='{"0":{"items":"1"},"480":{"items":"2"},"768":{"items":"3"},"992":{"items":"4"},"1200":{"items":"5"}}' >
								
									{products?.map(product => {
										return (
											<Showproduct id={product._id} name={product.name} description={product.description} image={product.image} selling_price={product.selling_price} labels="sale" />
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Latest

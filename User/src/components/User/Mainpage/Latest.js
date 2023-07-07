import ProductContext from "../../../context/product/ProductContext"
import React, { useContext, useEffect } from 'react'
import { Link } from "react-router-dom";
// import Showproduct from './Showproduct';
import Productcard from "./Productcard";

function Latest() {

	const context = useContext(ProductContext);
	let { products, getProducts } = context;
	products = products.slice(0, 5)
	useEffect(() => {
		/* eslint-disable-next-line */
		getProducts()

		/* eslint-disable-next-line */
	}, [])



	return (
		<>
			<div className="wrap-show-advance-info-box style-1">
				<h3 className="title-box">Just For you</h3>
				<div className="wrap-top-banner">
					<Link to="/" className="link-banner banner-effect-2">
						<figure><img src="assets/images/digital-electronic-banner.jpg" width="1300" height="240" alt="" /></figure>
					</Link>
				</div>
			</div>
			{products?.map(product => {
				return (
					<Productcard product={product} key={product._id}/>
				);
			})}

		</>
	)
}

export default Latest

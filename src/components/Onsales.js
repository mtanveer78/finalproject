import Showproduct from './Showproduct';
import React, { useContext, useEffect } from 'react'
import ProductContext from "../context/product/ProductContext"
// import { useNavigate } from 'react-router-dom'

const Onsales = () => {
	const context = useContext(ProductContext);
	const { products, getProducts } = context;
	// let history = useNavigate();
	useEffect(() => {
		// if (localStorage.getItem('token')) {
		// getProducts()
		// }
		// else {
		getProducts()

		// history("/login");
		// }
		// eslint-disable-next-line
	}, [])
	// const ref = useRef(null)
	// const refClose = useRef(null)


	return (
		<>

			<div className="wrap-show-advance-info-box style-1 has-countdown">
				<h3 className="title-box">On Sale</h3>
				<div className="wrap-countdown mercado-countdown" data-expire="2020/12/12 12:34:56"></div>
				<div className="wrap-products slide-carousel owl-carousel style-nav-1 equal-container owl-loaded owl-drag" data-items="5" data-loop="false" data-nav="true" data-dots="false" >
				
					{products?.map(product => {
						return (

							<Showproduct id={product._id} name={product.name} description={product.description} image={product.image} selling_price={product.selling_price} labels="sale" />
						);
					})}

				</div>

			</div>

		</>
	)
}

export default Onsales

import React from "react";
import { Link } from 'react-router-dom';

const Showproduct = (props) => {
	let { id ,name, image, description, selling_price, labels } = props;
	
	return (
		<>
			<div id={`${id}`} className="product product-style-2 equal-elem h-25">
				<div className="product-thumnail h-25">
					<Link to={`/product/${id}`} title={name}>
						<figure><img src={image} width="800" height="800" alt="T-Shirt Raw Hem Organic Boro Constrast Denim" /></figure>
					</Link>
					<div className="group-flash">
						<span className={labels === "sale" ? "flash-item sale-label" : "flash-item new-label"}>{labels}</span>
					</div>
					<div className="wrap-btn">
						<Link  to={`/product/${id}`} className="function-link">quick view</Link>
					</div>
				</div>
				<div className="product-info">
					<Link  to={`/product/${id}`} className="product-name"><span>{description} [White]</span></Link>
					<div className="wrap-price"><span className="product-price">${selling_price}.00</span></div>
				</div>
			</div>

		</>
	)
}

export default Showproduct;

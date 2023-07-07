// import Showproduct from './Showproduct';
import React, { useContext, useEffect, useState } from 'react'
import ProductContext from "../../../context/product/ProductContext"
import Productcard from '../Mainpage/Productcard';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom'

const Onsales = () => {
	const context = useContext(ProductContext);
	const [flashprod, setFlashprod] = useState([]);
	let { getFlashproduct } = context;
	
	useEffect(() => {
		/* eslint-disable-next-line */
		async function fetchData() {
			try {
				let flashprod = await getFlashproduct();
				// const date = new Date();
				// flashprod = flashprod.filter((prod) => prod.sale_date === `${date.getDate()<10?`0${date.getDate()}`:date.getDate()}-${date.getMonth()+1<10?`0${date.getMonth()+1}`:date.getMonth()+1}-${date.getFullYear()}`);
				flashprod = flashprod.slice(0, 5)
				setFlashprod(flashprod);
			} catch (error) {
				console.error(error);
			}
		}
		fetchData();
		/* eslint-disable-next-line */
	}, [])

	const [seconds, setSeconds] = useState((new Date()).getSeconds());
	const [hours, setHours] = useState((new Date()).getHours());
	const [minutes, setMinutes] = useState((new Date()).getMinutes());
	function GetTime() {
		setHours((new Date()).getHours());
		setMinutes((new Date()).getMinutes());
		setSeconds((new Date()).getSeconds());
	}

	setTimeout(() => {

		GetTime();
	}, 1000);

	return (
		<>

			<div className="mt-2">
				<div className="my-box">
					<h3 className="sale-heading">On Sale Now</h3>
					<i className="onsale-label"> Ending in</i>
					<i className="time">{24 - hours < 10 ? `0${24 - hours}` : 24 - hours}</i>:
					<i className="time">{60 - minutes < 10 ? `0${60 - minutes}` : 60 - minutes}</i>:
					<i className="time">{60 - seconds < 10 ? `0${60 - seconds}` : 60 - seconds}</i>
					<button className="btn shop-btn">Show More</button>
					<hr className="onsale-line" />
				</div>
				{flashprod?.map(product => {
					return (
						<Productcard product={product.product_info[0]} />
					);
				})}

			</div>
		</>
	)
}

export default Onsales

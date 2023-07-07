import ProductContext from "../../../context/product/ProductContext"
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Latest from "../Mainpage/Latest";
import Onsales from "../Mainpage/Onsales";
// import Showproduct from './Showproduct';
import Userlayout from "../Userlayout/Userlayout";
import Catagorycard from "../Mainpage/Catagorycard";
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';



const Bodypage = () => {
	const context = useContext(ProductContext);
	const { category, getCategory } = context;
	const images = [
		{
			src: "assets/images/main-slider-1-1.jpg"
		},
		{
			src: "assets/images/main-slider-1-2.jpg"
		},
		{
			src: "assets/images/main-slider-1-3.jpg"
		}
	];
	useEffect(() => {
		/* eslint-disable-next-line */

		getCategory()
		/* eslint-disable-next-line */
	}, [])


	return (
		<div>
			<Userlayout>
				
				<div className="header-nav-section">
					<div className="container margn">
						<ul className="nav menu-nav clone-main-menu" id="mercado_haead_menu" data-menuname="Sale Info" >
							<li className="menu-item nav-item"><Link to="/" className="link-term ml-3">Weekly Featured</Link> </li>
							<li className="menu-item nav-item"><Link to="/" className="link-term">Hot Sale items</Link> </li>
							<li className="menu-item nav-item"><Link to="/" className="link-term">Top new items</Link> </li>
							<li className="menu-item nav-item"><Link to="/" className="link-term">Top Selling</Link> </li>
							<li className="menu-item nav-item"><Link to="/" className="link-term">Top rated items</Link> </li>
						</ul>
					</div>
				</div>
				<main id="main">
					<div className="container">
						<Carousel images={images} hasThumbnails={false} hasSizeButton={false} hasMediaButton={false} hasIndexBoard={false} isAutoPlaying={true} autoPlayInterval={5000} />
						<Onsales />
							<div className="mb-3">
								<h3 className="category-heading">Categories</h3>
								{category?.map(category => {
									return (
										<Catagorycard category={category} page="bodypage" />
									);
								})}
							</div>
						<Latest />
					</div>
				</main>
			</Userlayout>
		</div>
	)
}

export default Bodypage;

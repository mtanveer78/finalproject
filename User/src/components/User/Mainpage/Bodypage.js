import ProductContext from "../../../context/product/ProductContext"
import React, { useContext, useEffect, useRef} from 'react'
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
	const specificPartRef = useRef();

	const scrollToSpecificPart = () => {
    // Check if the specificPartRef has a value (element is mounted)
		// console.log(specificPartRef.current.getBoundingClientRect().bottom)
    if (specificPartRef.current) {
      // Calculate the Y coordinate of the specific part
      const yOffset = specificPartRef.current.getBoundingClientRect().top-630;

      // Use smooth scrolling to scroll to the specific part
      window.scrollBy({
        top: yOffset,
        behavior: 'smooth'
      });
    }
  };

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
				
	
				<main id="main">
					<div className="container">
					<div className="header-nav-section">
					<div style={{marginLeft:'8%'}}>
						<ul className="nav menu-nav clone-main-menu" id="mercado_haead_menu" data-menuname="Sale Info" >
							<li className="menu-item nav-item"><Link to=""  onClick={scrollToSpecificPart} className="link-term ml-3">Weekly Featured</Link> </li>
							<li className="menu-item nav-item"><Link to="/" className="link-term">Hot Sale items</Link> </li>
							<li className="menu-item nav-item"><Link to="/" className="link-term">Top new items</Link> </li>
							<li className="menu-item nav-item"><Link to="/" className="link-term">Top Selling</Link> </li>
							<li className="menu-item nav-item"><Link to="/" className="link-term">Top rated items</Link> </li>
						</ul>
					</div>
				</div>
						<Carousel images={images} hasThumbnails={false} hasSizeButton={false} hasMediaButton={false} hasIndexBoard={false} isAutoPlaying={true} autoPlayInterval={5000} />
						<Onsales />
							<div className="mb-3">
								<h3 className="category-heading">Categories</h3>
								{category?.map((category,index) => {
									return (
										<Catagorycard ref={specificPartRef} category={category} page="bodypage" index={index} />
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

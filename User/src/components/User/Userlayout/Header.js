import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../../../context/product/ProductContext"
import { Link, useNavigate, useLocation} from 'react-router-dom';

const Header = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const context = useContext(ProductContext);
	const [user, setUser] = useState([]);

	const [viewuserorder, setViewuserorder] = useState([]);
	const { carts, wishlist, getUserdetail, fetchCart, fetchWishlist, getViewUserOrder } = context;
	const path = location.pathname;
	useEffect(() => {
		/* eslint-disable-next-line */
		const fatchData = async () => {
			// call the function from context
			if (localStorage.getItem('token')) {
				const user = await getUserdetail()
				if (user.status !== 401) {
					setUser(user)
					await fetchCart()
				  await fetchWishlist()
					// console.log(wishlist.error)
					const viewuserorder = await getViewUserOrder()
					setViewuserorder(viewuserorder)
				}
				else{
					localStorage.removeItem('token')

				}
			}
		} // end of fatchData
		fatchData()
		/* eslint-disable-next-line */
	}, [])

	const Logout = async() => {
		localStorage.removeItem('token')
		if(path==="/"){window.location.reload();}
		else{navigate("/")}
		
	}
	return (
		<>

			<header id="header" className="header header-style-1">
				<div className="container-fluid">
					<div className="row">
						<div className="sticky">
							<div className="topbar-menu-area ">
								<div className="container">
									<div className="topbar-menu left-menu">
										<ul>
											<li className="menu-item" >
												<Link title="Hotline: (+92331) 6460611" to="/" ><span className="icon label-before fa fa-mobile"></span>Hotline: (+92331) 6460611</Link>
											</li>
										</ul>
									</div>
									<div className="topbar-menu float-right">
										<ul>
											<li className="menu-item" ><Link className="navbar-item" to="/contact">contact us</Link></li>
											<li className="menu-item" ><Link className="navbar-item" to="/about">About us</Link></li>
											<li className="menu-item" ><Link className="navbar-item" to="/">Track my order</Link></li>

											{user.length===0 ? (<>
												<li className="menu-item" ><Link className="navbar-item" to="/login">Login</Link></li>
												<li className="menu-item" ><Link className="navbar-item" to="/register">Register</Link></li>
											</>) :
												<li className="menu-item menu-item-has-children parent" >
												 <Link className="navbar-item" to="">{user.name} Account<i className="fa fa-angle-down" aria-hidden="true"></i></Link> 
													<ul className="submenu curency" >
														<li className="menu-item" >
															<Link to="/Profile">Profile</Link>
														</li>
														<li className="menu-item" >
															<Link to="/order/orderhistory">Order History</Link>
														</li>
														<li className="menu-item" >
															<Link to="">Order Tracking</Link>
														</li>
														<li className="menu-item" >
															<button onClick={() => Logout()}>Log out</button>
														</li>
													</ul>
												</li>
											}

										</ul>
									</div>
								</div>
							</div>

							<div className="container searchbar-color">
								<div className="mid-section main-info-area">

									<div className="wrap-logo-top left-section ">
										<Link to="index.html" className="link-to-home"><img src="assets/images/logo-top-1.png" alt="mercado" /></Link>
									</div>

									<div className="wrap-search center-section">
										<div className="wrap-search-form">
											<form action="#" id="form-search-top" name="form-search-top">
												<input className="text" type="text" name="search" value="" placeholder="Search here..." />
												<button form="form-search-top" type="button"><i className="fa fa-search" aria-hidden="true"></i></button>
												<div className="wrap-list-cate">
													<input type="hidden" name="product-cate" value="0" id="product-cate" />
													<Link to="/" className="link-control">All Category</Link>
													<ul className="list-cate">
														<li className="level-0">All Category</li>
														<li className="level-1">-Electronics</li>
														<li className="level-2">Batteries & Chargens</li>
														<li className="level-2">Headphone & Headsets</li>
														<li className="level-2">Mp3 Player & Acessories</li>
														<li className="level-1">-Smartphone & Table</li>
														<li className="level-2">Batteries & Chargens</li>
														<li className="level-2">Mp3 Player & Headphones</li>
														<li className="level-2">Table & Accessories</li>
														<li className="level-1">-Electronics</li>
														<li className="level-2">Batteries & Chargens</li>
														<li className="level-2">Headphone & Headsets</li>
														<li className="level-2">Mp3 Player & Acessories</li>
														<li className="level-1">-Smartphone & Table</li>
														<li className="level-2">Batteries & Chargens</li>
														<li className="level-2">Mp3 Player & Headphones</li>
														<li className="level-2">Table & Accessories</li>
													</ul>
												</div>
											</form>
										</div>
									</div>

									<div className="wrap-icon right-section " style={{ width: "400px" }}>
										<div className="wrap-icon-section wishlist" style={{ width: "130px" }}>
											<Link to="/wishlist" className="link-direction">
												<i className="fa fa-heart" aria-hidden="true"></i>
												<div className="left-info">
													<span className="index">{wishlist?.length} item</span>
													<span className="title">Wishlist</span>
												</div>
											</Link>
										</div>
										<div className="wrap-icon-section minicart" style={{ width: "130px" }}>
											<Link to="/cart" className="link-direction">
												<i className="fa fa-shopping-basket" aria-hidden="true"></i>
												<div className="left-info">
													<span className="index">{carts?.length} items</span>
													<span className="title">CART</span>
												</div>
											</Link>
										</div>
										{/* <div className="wrap-icon-section minicart" style={{ width: "130px" }}>
											<Link to="/order" className="link-direction ">
												<i><img className="icon " src="assets/fonts/currentOrder-icon.png" alt="" width="30" height="30" /></i>
												<div className="left-info ">
													
													<span className="index">{viewuserorder.filter(obj => {
														return obj.status === 'pending' || obj.status === 'shipped';
													})?.length} order</span>
													<span className="title">Order</span>
												</div>
											</Link>
										</div> */}
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header;
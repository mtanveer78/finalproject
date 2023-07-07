import React from "react";
import { Link } from 'react-router-dom';
import Userlayout from "../Userlayout/Userlayout";

const Aboutus = () => {
	return (
		<div>
			<Userlayout>
				<main id="main" className="main-site">

					<div className="container">

						<div className="wrap-breadcrumb">
							<ul>
								<li className="item-link"><Link to="/" className="link">home</Link></li>
								<li className="item-link"><span>Contact us</span></li>
							</ul>
						</div>
					</div>

					<div className="container">
						<div className="main-content-area">
							<div className="aboutus-info style-center">
								<b className="box-title">Interesting Facts</b>
								<p className="txt-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
							</div>

							<div className="row equal-container">
								<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
									<div className="aboutus-box-score equal-elem ">
										<b className="box-score-title">10000</b>
										<span className="sub-title">Items in Store</span>
										<p className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text ever since the 1500s...</p>
									</div>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
									<div className="aboutus-box-score equal-elem ">
										<b className="box-score-title">90%</b>
										<span className="sub-title">Our Customers comeback</span>
										<p className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text ever since the 1500s...</p>
									</div>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
									<div className="aboutus-box-score equal-elem ">
										<b className="box-score-title">2 million</b>
										<span className="sub-title">User of the site</span>
										<p className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text ever since the 1500s...</p>
									</div>
								</div>
							</div>

							<div className="row">

								<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
									<div className="aboutus-info style-small-left">
										<b className="box-title">What we really do?</b>
										<p className="txt-content">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,</p>
									</div>
									<div className="aboutus-info style-small-left">
										<b className="box-title">History of the Company</b>
										<p className="txt-content">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,</p>
									</div>
								</div>

								<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
									<div className="aboutus-info style-small-left">
										<b className="box-title">Our Vision</b>
										<p className="txt-content">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,</p>
									</div>
									<div className="aboutus-info style-small-left">
										<b className="box-title">Cooperate with Us!</b>
										<p className="txt-content">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,</p>
									</div>
								</div>

								<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
									<div className="aboutus-info style-small-left">
										<b className="box-title">Cooperate with Us!</b>
										<div className="list-showups">
											<label>
												<input type="radio" className="hidden" name="showup" id="shoup1" value="shoup1" checked="checked" />
												<span className="check-box"></span>
												<span className='function-name'>Support 24/7</span>
												<span className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</span>
											</label>
											<label>
												<input type="radio" className="hidden" name="showup" id="shoup2" value="shoup2" />
												<span className="check-box"></span>
												<span className='function-name'>Best Quanlity</span>
												<span className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</span>
											</label>
											<label>
												<input type="radio" className="hidden" name="showup" id="shoup3" value="shoup3" />
												<span className="check-box"></span>
												<span className='function-name'>Fastest Delivery</span>
												<span className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</span>
											</label>
											<label>
												<input type="radio" className="hidden" name="showup" id="shoup4" value="shoup4" />
												<span className="check-box"></span>
												<span className='function-name'>Customer Care</span>
												<span className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</span>
											</label>
										</div>
									</div>
								</div>
							</div>

							<div className="our-team-info">
								<h4 className="title-box">Our teams</h4>
								<div className="our-staff">
									<div
										className="slide-carousel owl-carousel style-nav-1 equal-container"
										data-items="5"
										data-loop="false"
										data-nav="true"
										data-dots="false"
										data-margin="30"
										data-responsive='{"0":{"items":"1"},"480":{"items":"2"},"768":{"items":"3"},"992":{"items":"3"},"1200":{"items":"4"}}' >

										<div className="team-member equal-elem">
											<div className="media">
												<Link to="/" title="LEONA">
													<figure><img src="assets/images/member-leona.jpg" alt="LEONA" /></figure>
												</Link>
											</div>
											<div className="info">
												<b className="name">leona</b>
												<span className="title">Director</span>
												<p className="desc">Contrary to popular belief, Lorem Ipsum is not simply random text...</p>
											</div>
										</div>

										<div className="team-member equal-elem">
											<div className="media">
												<Link to="/" title="LUCIA">
													<figure><img src="assets/images/member-lucia.jpg" alt="LUCIA" /></figure>
												</Link>
											</div>
											<div className="info">
												<b className="name">LUCIA</b>
												<span className="title">Manager</span>
												<p className="desc">Contrary to popular belief, Lorem Ipsum is not simply random text...</p>
											</div>
										</div>

										<div className="team-member equal-elem">
											<div className="media">
												<Link to="/" title="NANA">
													<figure><img src="assets/images/member-nana.jpg" alt="NANA" /></figure>
												</Link>
											</div>
											<div className="info">
												<b className="name">NANA</b>
												<span className="title">Marketer</span>
												<p className="desc">Contrary to popular belief, Lorem Ipsum is not simply random text...</p>
											</div>
										</div>

										<div className="team-member equal-elem">
											<div className="media">
												<Link to="/" title="BRAUM">
													<figure><img src="assets/images/member-braum.jpg" alt="BRAUM" /></figure>
												</Link>
											</div>
											<div className="info">
												<b className="name">BRAUM</b>
												<span className="title">Member</span>
												<p className="desc">Contrary to popular belief, Lorem Ipsum is not simply random text...</p>
											</div>
										</div>

										<div className="team-member equal-elem">
											<div className="media">
												<Link to="/" title="LUCIA">
													<figure><img src="assets/images/member-lucia.jpg" alt="LUCIA" /></figure>
												</Link>
											</div>
											<div className="info">
												<b className="name">LUCIA</b>
												<span className="title">Manager</span>
												<p className="desc">Contrary to popular belief, Lorem Ipsum is not simply random text...</p>
											</div>
										</div>

										<div className="team-member equal-elem">
											<div className="media">
												<Link to="/" title="NANA">
													<figure><img src="assets/images/member-nana.jpg" alt="NANA" /></figure>
												</Link>
											</div>
											<div className="info">
												<b className="name">NANA</b>
												<span className="title">Marketer</span>
												<p className="desc">Contrary to popular belief, Lorem Ipsum is not simply random text...</p>
											</div>
										</div>

									</div>

								</div>

							</div>
						</div>


					</div>

				</main>
			</Userlayout>
		</div>
	)
}

export default Aboutus;
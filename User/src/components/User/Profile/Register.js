import React from "react";
import { Link } from "react-router-dom";
import Userlayout from "../Userlayout/Userlayout";

const Register = () => {
	return (
		<div>
			<Userlayout>
				<main id="main" class="main-site left-sidebar">

					<div class="container">

						<div class="wrap-breadcrumb">
							<ul>
								<li class="item-link"><Link to="/" class="link">home</Link></li>
								<li class="item-link"><span>Register</span></li>
							</ul>
						</div>
						<div class="row">
							<div class="col-lg-6 col-sm-6 col-md-6 col-xs-12 col-md-offset-3">
								<div class=" main-content-area">
									<div class="wrap-login-item ">
										<div class="register-form form-item ">
											<form class="form-stl" action="#" name="frm-login" method="get" >
												<fieldset class="wrap-title">
													<h3 class="form-title">Create an account</h3>
													<h4 class="form-subtitle">Personal infomation</h4>
												</fieldset>
												<fieldset class="wrap-input">
													<label htmlFor="frm-reg-lname">Name*</label>
													<input type="text" id="frm-reg-lname" name="reg-lname" placeholder="Last name*" />
												</fieldset>
												<fieldset class="wrap-input">
													<label htmlFor="frm-reg-email">Email Address*</label>
													<input type="email" id="frm-reg-email" name="reg-email" placeholder="Email address" />
												</fieldset>
											
												<fieldset class="wrap-title">
													<h3 class="form-title">Login Information</h3>
												</fieldset>
												<fieldset class="wrap-input item-width-in-half left-item ">
													<label htmlFor="frm-reg-pass">Password *</label>
													<input type="text" id="frm-reg-pass" name="reg-pass" placeholder="Password" />
												</fieldset>
												<fieldset class="wrap-input item-width-in-half ">
													<label htmlFor="frm-reg-cfpass">Confirm Password *</label>
													<input type="text" id="frm-reg-cfpass" name="reg-cfpass" placeholder="Confirm Password" />
												</fieldset>
												<input type="submit" class="btn btn-sign" value="Register" name="register" />
											</form>
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

export default Register;
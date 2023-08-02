import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom'
import swal from 'sweetalert';
import Userlayout from "../Userlayout/Userlayout";

const Register = () => {
	let history = useNavigate();
	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const handleInputChange = (event) => {
		setUser((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const { name, email, password, confirmPassword } = user;

		// Validate form inputs
		if (password !== confirmPassword) {
			swal("Error", "Passwords do not match", "error");
		} else if (!validateEmail(email)) {
			swal("Error", "Invalid email format", "error");
		} else if (/\d/.test(name)) {
			swal("Error", "Name should not contain numbers", "error");
		} else {
			// Make API request to register user
			// Replace <API_URL> with your actual API endpoint
			fetch("http://localhost:5000/api/auth/createuser", {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify( user )
			})
				.then((response) => response.json())
				.then((data) => {
						// Handle successful registration response
					if (data.success) {
						swal("Succes", "You have succesfully register", "success").then(() => {
							history('/login');
						});
					}
					else {
						swal("Error", "Internal Error occur", "error");
					}

				})
				.catch((error) => {
					// Handle registration error
					swal("Error", "Internal Error occur", "error");
				});
		}
	};

	const validateEmail = (email) => {
		// Regular expression pattern for email validation
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		// Check if the email matches the pattern
		return emailPattern.test(email);
	};

	return (
		<div>
			<Userlayout>
				<main id="main" class="main-site left-sidebar">
					<div class="container">
						<div class="wrap-breadcrumb">
							<ul>
								<li class="item-link">
									<Link to="/" class="link">
										home
									</Link>
								</li>
								<li class="item-link">
									<span>Register</span>
								</li>
							</ul>
						</div>
						<div class="row">
							<div class="col-lg-6 col-sm-6 col-md-6 col-xs-12 col-md-offset-3">
								<div class=" main-content-area">
									<div class="wrap-login-item ">
										<div class="register-form form-item ">
											<form>
												<fieldset class="wrap-title">
													<h3 class="form-title">Create an account</h3>
													<h4 class="form-subtitle">Personal information</h4>
												</fieldset>
												<fieldset class="wrap-input">
													<label htmlFor="frm-reg-lname">Name*</label>
													<input
														type="text"
														id="frm-reg-lname"
														name="name"
														placeholder="Full name*"
														value={user.name}
														onChange={handleInputChange}
													/>
												</fieldset>
												<fieldset class="wrap-input">
													<label htmlFor="frm-reg-email">Email Address*</label>
													<input
														type="email"
														id="frm-reg-email"
														name="email"
														placeholder="Email address"
														value={user.email}
														onChange={handleInputChange}
													/>
												</fieldset>
												<fieldset class="wrap-title">
													<h3 class="form-title">Login Information</h3>
												</fieldset>
												<fieldset class="wrap-input item-width-in-half left-item ">
													<label htmlFor="frm-reg-pass">Password *</label>
													<input
														type="password"
														id="frm-reg-pass"
														name="password"
														placeholder="Password"
														value={user.password}
														onChange={handleInputChange}
													/>
												</fieldset>
												<fieldset class="wrap-input item-width-in-half ">
													<label htmlFor="frm-reg-cfpass">
														Confirm Password *
													</label>
													<input
														type="password"
														id="frm-reg-cfpass"
														name="confirmPassword"
														placeholder="Confirm Password"
														value={user.confirmPassword}
														onChange={handleInputChange}
													/>
												</fieldset>
												<button type="button" class="btn btn-sign" name="register" onClick={(e) => handleSubmit(e)}>Submit</button>
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
	);
};

export default Register;

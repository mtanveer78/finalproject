import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Userlayout from '../Userlayout/Userlayout';
import { useCookies } from 'react-cookie';
import swal from 'sweetalert';


const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  const [cookies, setCookie] = useCookies(['token']);
  let history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: credentials.email, password: credentials.password })
      });
      const data = await response.json()
      if (data.success) {
        // Save the auth token and redirect
        setCookie('token', data.authtoken, { maxAge: 3600 });

        swal('Login Success!', 'You have been successfully logged in!', 'success').then(() => {
          history('/');
        });
      } else {
        swal('Login Failed!', 'Please check your email and password!', 'error');
      }
    } catch (err) {
      swal('Internal Error!', 'Error occur!', 'error');
    }

  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <Userlayout>
        <main id="main" className="main-site left-sidebar">

          <div className="container">

            <div className="wrap-breadcrumb">
              <ul>
                <li className="item-link"><Link to="/" className="link">home</Link></li>
                <li className="item-link"><span>login</span></li>
              </ul>
            </div>
            <div className="row">
              <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12 col-md-offset-3">
                <div className=" main-content-area">
                  <div className="wrap-login-item ">
                    <div className="login-form form-item form-stl">
                      <form name="frm-login" onSubmit={handleSubmit}>
                        <fieldset className="wrap-title">
                          <h3 className="form-title">Log in to your account</h3>
                        </fieldset>
                        <fieldset className="wrap-input">
                          <label htmlFor="frm-login-uname">Email Address:</label>
                          <input type="text" id="frm-login-uname" value={credentials.email} onChange={onChange} name="email" placeholder="Type your email address" />
                        </fieldset>
                        <fieldset className="wrap-input">
                          <label htmlFor="frm-login-pass">Password:</label>
                          <input type="password" id="frm-login-pass" value={credentials.password} onChange={onChange} name="password" placeholder="************" />
                        </fieldset>

                        <fieldset className="wrap-input">

                          <Link className="link-function left-position" to="" title="Forgotten password?">Forgotten password?</Link>
                        </fieldset>
                        <input type="submit" className="btn btn-submit" value="Login" name="submit" />
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

export default Login;